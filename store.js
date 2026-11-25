// 잠긴 학생 목록 저장소 (Vercel Blob, 비공개). BLOB 토큰이 없으면(로컬 테스트) 메모리에 보관.

const PATH = 'locks.json';
const useMemory = !process.env.BLOB_READ_WRITE_TOKEN;
const blob = () => import('@vercel/blob'); // 배포 환경에서만 불러옴
let memory = {};

async function readRaw() {
  if (useMemory) return { locks: { ...memory }, etag: undefined };
  const { get } = await blob();
  const r = await get(PATH, { access: 'private', useCache: false });
  if (!r || r.statusCode !== 200) return { locks: {}, etag: undefined };
  const text = await new Response(r.stream).text();
  let locks = {};
  try { locks = JSON.parse(text) || {}; } catch (e) { locks = {}; }
  return { locks, etag: r.blob.etag };
}

export async function getLocks() {
  return (await readRaw()).locks;
}

export async function isLocked(sid) {
  const locks = await getLocks();
  return Boolean(locks[sid]?.locked);
}

// 동시에 여러 요청이 와도 덮어쓰지 않도록 ETag 조건부 쓰기 + 재시도
export async function updateLocks(fn) {
  if (useMemory) { memory = fn({ ...memory }) || memory; return memory; }
  const { put, BlobPreconditionFailedError } = await blob();
  for (let attempt = 0; attempt < 5; attempt++) {
    const { locks, etag } = await readRaw();
    const next = fn({ ...locks }) || locks;
    try {
      await put(PATH, JSON.stringify(next), {
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
        cacheControlMaxAge: 60,
        ...(etag ? { ifMatch: etag } : {}),
      });
      return next;
    } catch (e) {
      if (e instanceof BlobPreconditionFailedError) continue;
      throw e;
    }
  }
  throw new Error('잠금 정보를 저장하지 못했어요.');
}
