import { checkAdmin, issueToken } from './auth.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const { id, pw } = req.body || {};
  if (!checkAdmin(id, pw)) {
    await new Promise(r => setTimeout(r, 1000)); // 무작위 대입을 늦추기 위한 지연
    return res.status(401).json({ ok: false, message: '교사 ID 또는 비밀번호가 올바르지 않아요.' });
  }
  return res.status(200).json({ ok: true, token: issueToken() });
}
