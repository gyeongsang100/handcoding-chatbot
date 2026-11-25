import { identify, welcome } from './bot.js';
import { getLocks, updateLocks } from './store.js';

const MAX_FAILS = 2; // 로그인 오류 2번이면 계정 잠금
const LOCKED_MSG = '로그인 오류가 2번 발생해 계정이 잠겼어요. 정보과학 선생님께 잠금 해제를 요청해 주세요.';
const sleep = ms => new Promise(r => setTimeout(r, ms));

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const r = identify(req.body || {});

  if (r.status === 'badFormat') {
    return res.status(400).json({ ok: false, message: '학번 5자리, 이름, 점수(숫자)를 정확히 입력해 주세요.' });
  }
  if (r.status === 'mismatch') {
    await sleep(800);
    return res.status(401).json({ ok: false, message: '학번과 이름이 채점 결과와 일치하지 않아요. 다시 확인해 주세요.' });
  }

  const sid = r.status === 'ok' ? r.st.sid : r.sid;
  try {
    const current = await getLocks();
    if (current[sid]?.locked) return res.status(423).json({ ok: false, locked: true, message: LOCKED_MSG });

    if (r.status === 'wrongScore' || r.status === 'wrongName') {
      await sleep(500);
      const next = await updateLocks(locks => {
        const prev = locks[sid] || { fails: 0, tries: [] };
        const fails = (prev.fails || 0) + 1;
        const tries = [...(prev.tries || []), { kind: r.status === 'wrongName' ? '이름' : '점수', score: r.tried, at: new Date().toISOString() }].slice(-5);
        locks[sid] = { fails, tries, locked: fails >= MAX_FAILS, at: new Date().toISOString(), tried: r.tried };
        return locks;
      });
      if (next[sid]?.locked) return res.status(423).json({ ok: false, locked: true, message: LOCKED_MSG });
      const left = MAX_FAILS - (next[sid]?.fails || 0);
      const what = r.status === 'wrongName' ? '이름이' : '점수가';
      return res.status(401).json({
        ok: false,
        message: `${what} 채점 결과와 일치하지 않아요. 한 번 더 틀리면 계정이 잠겨요. (남은 기회 ${left}번)`,
      });
    }

    // 로그인 성공: 이전 오류 횟수 초기화
    if (current[sid]) {
      await updateLocks(locks => {
        if (locks[sid] && !locks[sid].locked) delete locks[sid];
        return locks;
      });
    }
  } catch (e) {
    console.error('lock store error', e);
    return res.status(503).json({ ok: false, message: '잠시 후 다시 시도해 주세요.' });
  }

  return res.status(200).json({ ok: true, name: r.st.name, total: r.st.total, ...welcome(r.st) });
}
