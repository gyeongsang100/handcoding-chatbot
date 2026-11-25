// 교사: 전체 학생 점수 목록(action: list) / 학생별 채점 상세(action: detail)
import { verifyToken } from './auth.js';
import { teacherList, teacherDetail, RUBRIC_TEXT } from './bot.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const { token, action, sid } = req.body || {};
  if (!verifyToken(token)) return res.status(401).json({ ok: false, expired: true, message: '교사 로그인이 만료됐어요. 다시 로그인해 주세요.' });
  if (action === 'detail') {
    const d = teacherDetail(sid);
    if (!d) return res.status(404).json({ ok: false, message: '해당 학생을 찾지 못했어요.' });
    return res.status(200).json({ ok: true, item: d });
  }
  return res.status(200).json({ ok: true, items: teacherList(), rubric: RUBRIC_TEXT });
}
