// 교사 로그인 확인과 세션 토큰
import crypto from 'node:crypto';
import { ADMIN_ID, PW_SALT, PW_HASH, SESSION_SECRET } from './secret.js';

const TTL_MS = 12 * 60 * 60 * 1000; // 12시간

function safeEqual(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

export function checkAdmin(id, pw) {
  if (typeof id !== 'string' || typeof pw !== 'string' || pw.length > 200) return false;
  const hash = crypto.scryptSync(pw, PW_SALT, 32).toString('hex');
  return safeEqual(id.trim(), ADMIN_ID) && safeEqual(hash, PW_HASH);
}

function sign(payload) {
  return crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
}

export function issueToken() {
  const payload = `admin.${Date.now() + TTL_MS}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(token) {
  if (typeof token !== 'string') return false;
  const i = token.lastIndexOf('.');
  if (i < 0) return false;
  const payload = token.slice(0, i), sig = token.slice(i + 1);
  if (!safeEqual(sig, sign(payload))) return false;
  const exp = Number(payload.split('.')[1]);
  return Number.isFinite(exp) && exp > Date.now();
}
