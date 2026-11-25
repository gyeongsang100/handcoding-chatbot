// 로컬 테스트용 서버 (배포에는 포함되지 않음): node dev-server.mjs → http://localhost:3005
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import handler from './server.js';
const root = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3005);
http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname.startsWith('/api/')) {
    let raw = ''; for await (const c of req) raw += c;
    try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = {}; }
    res.status = c => { res.statusCode = c; return res; };
    res.json = o => { res.setHeader('Content-Type', 'application/json; charset=utf-8'); res.end(JSON.stringify(o)); return res; };
    return handler(req, res);
  }
  if (url.pathname !== '/') { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  fs.createReadStream(path.join(root, 'index.html')).pipe(res);
}).listen(PORT, () => console.log('http://localhost:' + PORT));
