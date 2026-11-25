// 교사: 잠긴 학생 목록 조회(action: list) / 선택한 학생 잠금 해제(action: unlock)
import { verifyToken } from './auth.js';
import { getLocks, updateLocks } from './store.js';
import { studentInfo } from './bot.js';

function toList(locks) {
  return Object.entries(locks)
    .filter(([, v]) => v && v.locked)
    .map(([sid, v]) => ({ sid, ...(studentInfo(sid) || { name: '?', cls: '?' }), at: v.at, tried: v.tried,
      tries: (v.tries || []).map(t => `${t.kind} 오류(${t.score}점 입력)`).join(', ') }))
    .sort((a, b) => a.sid.localeCompare(b.sid));
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const { token, action, sids } = req.body || {};
  if (!verifyToken(token)) return res.status(401).json({ ok: false, expired: true, message: '교사 로그인이 만료됐어요. 다시 로그인해 주세요.' });
  try {
    if (action === 'unlock') {
      const list = Array.isArray(sids) ? sids.map(String) : [];
      if (!list.length) return res.status(400).json({ ok: false, message: '잠금을 풀 학생을 선택해 주세요.' });
      const next = await updateLocks(locks => { list.forEach(s => delete locks[s]); return locks; });
      return res.status(200).json({ ok: true, unlocked: list.length, items: toList(next) });
    }
    return res.status(200).json({ ok: true, items: toList(await getLocks()) });
  } catch (e) {
    console.error('lock store error', e);
    return res.status(503).json({ ok: false, message: '잠금 정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.' });
  }
}
