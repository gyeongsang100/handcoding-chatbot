import { verify, answer } from './bot.js';
import { isLocked } from './store.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const body = req.body || {};
  const st = verify(body);
  if (!st) return res.status(401).json({ ok: false, message: '학생 확인이 만료됐어요. 처음 화면에서 다시 입력해 주세요.' });
  try {
    if (await isLocked(st.sid)) {
      return res.status(423).json({ ok: false, locked: true, message: '계정이 잠긴 상태예요. 정보과학 선생님께 잠금 해제를 요청해 주세요.' });
    }
  } catch (e) {
    console.error('lock store error', e);
    return res.status(503).json({ ok: false, message: '잠시 후 다시 시도해 주세요.' });
  }
  const msg = String(body.message || '').slice(0, 300);
  return res.status(200).json({ ok: true, ...answer(st, msg) });
}
