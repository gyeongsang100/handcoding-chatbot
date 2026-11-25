// 모든 /api 요청을 받아 해당 처리 파일로 넘겨 주는 진입점 (Vercel 함수 1개)
import login from './login.js';
import chat from './chat.js';
import adminLogin from './admin-login.js';
import adminLocks from './admin-locks.js';
import adminStudents from './admin-students.js';

const ROUTES = {
  '/api/login': login,
  '/api/chat': chat,
  '/api/admin/login': adminLogin,
  '/api/admin/locks': adminLocks,
  '/api/admin/students': adminStudents,
};

export default async function handler(req, res) {
  const path = new URL(req.url, 'http://x').pathname.replace(/\/+$/, '');
  const fn = ROUTES[path];
  if (!fn) return res.status(404).json({ ok: false });
  return fn(req, res);
}
