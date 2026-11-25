// 손코딩 수행평가(2차: 지속가능발전 프로젝트) 감점 안내 챗봇: 학생 확인 + 질문 답변 로직
import DATA from './data.js';

const ITEMS = [
  {
    key: 'exec', name: '실행가능성',
    words: ['실행', '돌아가', '작동', '에러', '오류나', '안돌', '안 돌', '실행불가'],
    level: {
      5: '손으로 쓴 코드를 그대로 입력하면 고칠 곳 없이 실행되는 수준이에요.',
      4: '프로그램 흐름은 갖췄지만, 콜론·괄호·대소문자·오타 같은 1~2곳을 고쳐야 실행돼요. 그대로 입력하면 오류가 나기 때문에 1점 감점했어요.',
      3: '변수 혼동 같은 논리 오류가 있거나 여러 곳을 고쳐야 실행돼요.',
      2: '코드가 일부만 작성되어 실행 단계까지 가지 못했어요.',
    },
    tip: '파이썬은 대소문자를 구분해요(Print ≠ print, P ≠ p). 다 쓴 뒤에는 "이 코드를 그대로 입력하면 실행될까?"를 한 줄씩 따라가며 확인해 보세요. 콜론(:)·세미콜론(;)·쉼표(,)·마침표(.)를 헷갈리지 않았는지도 꼭 보세요.',
  },
  {
    key: 'eff', name: '효율성',
    words: ['효율', '구조', '반복문', '리스트', '중복'],
    level: {
      5: '활동지 코드의 자료구조(리스트·딕셔너리)와 반복·조건 구조를 그대로 살렸어요.',
      4: '구조는 맞지만 일부 단계가 빠졌거나 비효율적인 부분이 있어요. 리스트·반복문 없이 조건문만으로 작성한 코드도 4점이에요.',
      3: '주요 구조를 일부만 구현했어요.',
      2: '반복·탐색 구조가 거의 없어요.',
    },
    tip: '같은 처리를 여러 번 반복한다면 반복문으로 묶고, 데이터를 리스트·딕셔너리에 담아 한 번에 처리하는 방식을 연습해 보세요.',
  },
  {
    key: 'syn', name: '문법의 정확성',
    words: ['문법', '오타', '콜론', '세미콜론', '들여쓰기', '괄호', '따옴표', '철자', '스펠링', '대문자', '소문자'],
    level: {
      5: '문법 오류가 하나도 없어요.',
      4: '콜론·괄호·대소문자·오타 같은 사소한 실수가 1~2곳 있어요.',
      3: '문법 오류가 여러 곳 있거나 들여쓰기가 크게 어긋났어요.',
      2: '문법 오류가 많아 코드로 성립하기 어려운 부분이 있어요(의사코드 수준).',
    },
    tip: 'for·if·while·else 줄 끝의 콜론(:), 괄호와 따옴표 짝, 대소문자(print, input, int, import), 쉼표와 마침표(input().split())를 마지막에 한 번 더 확인해 보세요.',
  },
  {
    key: 'alg', name: '알고리즘',
    words: ['알고리즘', '논리', '순서', '절차', '로직', '흐름', '단계'],
    level: {
      5: '입력 → 저장/누적 → 조회·갱신(조건 판정) → 출력 단계를 논리 오류 없이 모두 재현했어요.',
      4: '주요 단계는 재현했지만 일부 단계가 빠졌거나 논리 오류가 있어요.',
      3: '주요 단계를 일부만 재현했어요.',
      2: '알고리즘의 일부만 작성했어요.',
    },
    tip: '코드를 쓰기 전에 "입력 → 저장/누적 → 조회·갱신 → 출력" 순서를 먼저 적어 두고, 빠진 단계나 바뀐 변수가 없는지 확인해 보세요.',
  },
];

const RUBRIC = '손코딩 수행평가는 4개 항목을 각 5점씩, 총 20점으로 채점했어요.\n비교 기준은 본인 활동지의 [3. 자동화 - (1) 프로그래밍] 코드예요.\n\n'
  + ITEMS.map(it => `■ ${it.name}\n · 5점: ${it.level[5]}\n · 4점: ${it.level[4]}\n · 3점: ${it.level[3]}\n · 2점: ${it.level[2]}`).join('\n\n')
  + '\n\n[채점 원칙]\n · 만점(5점)은 오류 없이 완벽하게 재현한 경우에만 줬어요.\n · 코드를 그대로 입력했을 때 실행되지 않으면, 실수가 하나뿐이어도 실행가능성에서 감점했어요.\n · 작성한 만큼 부분 점수를 인정했고, 코드를 조금이라도 썼다면 항목별 최소 2점이에요.';

const norm = s => String(s ?? '').replace(/\s+/g, '').trim();

// 학생 확인 결과: ok / wrongScore(점수 틀림) / wrongName(학번은 있으나 이름 틀림) / mismatch(없는 학번) / badFormat
export function identify(body) {
  const sid = norm(body?.sid);
  const name = norm(body?.name);
  const scoreText = norm(body?.score);
  if (!/^\d{5}$/.test(sid) || !name || !/^\d{1,2}$/.test(scoreText)) return { status: 'badFormat' };
  const st = DATA[sid];
  if (!st) return { status: 'mismatch' };
  if (norm(st.name) !== name) return { status: 'wrongName', sid, tried: Number(scoreText) };
  if (st.total !== Number(scoreText)) return { status: 'wrongScore', sid, name: st.name, tried: Number(scoreText) };
  return { status: 'ok', st: { sid, ...st } };
}

export function studentInfo(sid) {
  const st = DATA[sid];
  return st ? { name: st.name, cls: st.cls } : null;
}

export function verify(body) {
  const sid = norm(body?.sid);
  const name = norm(body?.name);
  const score = Number(norm(body?.score));
  const st = DATA[sid];
  if (!st || norm(st.name) !== name || st.total !== score) return null;
  return { sid, ...st };
}

// 채점 근거를 잘한 점 / 아쉬운 점 / 실행 불가 이유 / 안내로 나눔
const GOOD = /재현|완성|충실|정확|구현|갖춤|살림|일치|완벽|실행 가능/;
const BAD = /누락|오류|오타|빠짐|잘못|혼동|대신|미완|중단|없음|없이|불일치|않|사용해|사용\)|대문자|-1/;
export function splitEvidence(ev) {
  const good = [], bad = [], info = [];
  let rest = String(ev || '').trim();
  let fail = '';
  const fi = rest.indexOf('[실행 불가]');
  if (fi >= 0) { fail = rest.slice(fi + 7).trim(); rest = rest.slice(0, fi).trim(); }
  const lead = rest.match(/^\(([^)]*)\)\s*/);
  if (lead) { info.push(lead[1]); rest = rest.slice(lead[0].length); }
  const parts = rest.split(/(?<=[.])\s+/).map(s => s.trim().replace(/\.$/, '')).filter(Boolean);
  const plain = s => s.replace(/오류\s*없이|그대로\s*재현/g, '재현');
  const isGood = s => GOOD.test(s) && (!BAD.test(plain(s)) || (/완벽\s*재현/.test(s) && !/누락|오타|오류[^\s]*\s*(?!없)/.test(s)));
  for (const p of parts) {
    if (isGood(p)) good.push(p);
    else if (GOOD.test(p) && /[,，]/.test(p)) {
      // "A 재현, B 누락"처럼 섞인 문장은 쉼표로 나눠 다시 분류
      p.split(/,\s*(?![^()]*\))/).map(s => s.trim()).filter(Boolean)
        .forEach(s => (isGood(s) ? good : bad).push(s));
    } else bad.push(p);
  }
  return { good, bad: bad.flatMap(splitComma), info, fail };
}

// 따옴표·괄호 안의 쉼표는 건드리지 않고 ", "에서 나눔
function splitComma(s) {
  const out = []; let cur = '', depth = 0, q = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "'") q = !q;
    else if (!q && (c === '(' || c === '[')) depth++;
    else if (!q && (c === ')' || c === ']')) depth = Math.max(0, depth - 1);
    if (c === ',' && !q && depth === 0 && s[i + 1] === ' ') { out.push(cur.trim()); cur = ''; i++; continue; }
    cur += c;
  }
  if (cur.trim()) out.push(cur.trim());
  return out.filter(Boolean);
}

const condOnly = st => !/\b(for|while)\b/.test(st.code || '');

function levelText(st, i) {
  const sc = st.scores[i];
  if (i === 1 && sc === 4) {
    return condOnly(st)
      ? '활동지 코드 자체가 리스트·반복문 없이 조건문(if/elif/else)만으로 되어 있어서 4점이에요.'
      : '구조는 맞지만 일부 단계가 빠졌거나 비효율적인 부분이 있어요.';
  }
  return ITEMS[i].level[sc] || '';
}

function itemLine(st, it, i) {
  const sc = st.scores[i];
  const lost = 5 - sc;
  return `■ ${it.name}: ${sc}점${lost ? ` (-${lost}점)` : ' (만점)'}\n${levelText(st, i)}`;
}

// 아쉬운 점을 항목별로 연결 (찾지 못하면 전체를 보여 줌)
const ITEM_HINT = [
  /누락|오류|오타|대문자|콜론|괄호|비어|중단|빠짐|미완|Error|대신|혼동|불일치|잘못/,
  /반복|리스트|구조|조건문만|효율|딕셔너리|누락|미완|중단/,
  /오타|대문자|소문자|콜론|세미콜론|괄호|따옴표|들여쓰기|문법|철자|기호|'[^']+'|쉼표|마침표|비어|대입|Error/,
  /누락|논리|순서|갱신|조건|단계|흐름|혼동|대신|뒤바|미완|중단|빠짐|잘못|오류/,
];

function evidenceBlock(st, idx) {
  const { bad, fail } = splitEvidence(st.ev);
  const lines = [];
  const showFail = fail && (idx === undefined || idx === 0 || idx === 2);
  if (showFail) lines.push(`[그대로 실행하면 오류가 나는 부분]\n${fail}`);
  let list = bad;
  if (idx !== undefined) {
    const hit = bad.filter(b => ITEM_HINT[idx].test(b));
    list = hit.length ? hit : (showFail ? [] : bad);
  }
  if (list.length) lines.push(`[선생님 채점 기록에 적힌 아쉬운 점]\n${list.map(b => '· ' + b).join('\n')}`);
  return lines.join('\n\n');
}

function summary(st) {
  const lostItems = ITEMS.map((it, i) => ({ it, i })).filter(x => st.scores[x.i] < 5);
  if (!lostItems.length) {
    return `${st.name} 학생은 20점 만점이에요! 활동지 코드를 오류 없이 완벽하게 재현해서 4개 항목 모두 5점이에요.`;
  }
  const lostTotal = 20 - st.total;
  let out = `${st.name} 학생의 손코딩 점수는 ${st.total}점(20점 만점)으로, ${lostTotal}점이 감점됐어요.\n\n`;
  out += lostItems.map(x => itemLine(st, x.it, x.i)).join('\n\n');
  const ev = evidenceBlock(st);
  if (ev) out += `\n\n${ev}`;
  out += '\n\n궁금한 항목 이름(예: "실행가능성은 왜 감점됐어?")을 물어보면 더 자세히 알려줄게요. "내 활동지 코드 보여줘"라고 하면 비교 기준이 된 코드도 볼 수 있어요.';
  return out;
}

function itemDetail(st, idx) {
  const it = ITEMS[idx];
  let out = itemLine(st, it, idx);
  if (st.scores[idx] < 5) {
    const condEff = idx === 1 && st.scores[1] === 4 && condOnly(st);
    const ev = condEff ? '' : evidenceBlock(st, idx);
    if (ev) out += `\n\n${ev}`;
    if (idx === 0 && st.scores[0] === 4) {
      out += '\n\n※ 실행가능성은 "손으로 쓴 코드를 그대로 입력했을 때 고칠 곳 없이 실행되는가"로 판단해요. 실수가 한 곳뿐이어도 그대로는 실행되지 않으면 5점을 줄 수 없어요.';
    }
    if (condEff) {
      out += '\n\n※ 손코딩을 잘못 써서 깎인 것이 아니라, 코드 구조 자체에 대한 평가예요. 같은 항목에서 리스트와 반복문을 활용한 코드는 5점을 받았어요.';
    }
    out += `\n\n💡 다음에는 이렇게 해 보세요\n${it.tip}`;
  } else {
    out += '\n\n이 항목은 감점이 없어요. 잘했어요!';
  }
  return out;
}

function strengths(st) {
  const { good } = splitEvidence(st.ev);
  const full = ITEMS.filter((it, i) => st.scores[i] === 5).map(it => it.name);
  let out = '';
  if (good.length) out += `잘한 점이에요.\n${good.map(g => '· ' + g).join('\n')}`;
  if (full.length) out += `${out ? '\n\n' : ''}만점을 받은 항목: ${full.join(', ')}`;
  return out || '코드를 끝까지 써 보려고 노력한 점이 좋았어요. 감점된 항목의 팁을 참고해서 다음에 도전해 봐요!';
}

function tips(st) {
  const lost = ITEMS.map((it, i) => ({ it, i })).filter(x => st.scores[x.i] < 5);
  if (!lost.length) return '이미 만점이에요! 지금처럼 코드를 끝까지 꼼꼼하게 확인하는 습관을 유지해 보세요.';
  return '감점된 항목별로 다음에는 이렇게 해 보세요.\n\n' + lost.map(x => `■ ${x.it.name}\n${x.it.tip}`).join('\n\n');
}

function codeView(st) {
  if (!st.code) return '활동지에서 코드를 찾지 못했어요. 정보과학 선생님께 문의해 주세요.';
  let out = `${st.name} 학생 활동지의 [3. 자동화 - (1) 프로그래밍] 코드예요. 손코딩은 이 코드와 비교해서 채점했어요.\n\n${st.code}`;
  if (st.note) out += `\n\n(참고: ${st.note})`;
  return out;
}

const MENU = ['왜 감점됐어?', '항목별 점수 보여줘', '실행가능성은 왜 감점됐어?', '내 활동지 코드 보여줘', '잘한 점은?', '채점 기준 알려줘', '다음엔 어떻게 해야 해?', '이의 신청은 어떻게 해?'];

export function answer(st, raw) {
  const q = String(raw || '').trim();
  const t = q.replace(/\s+/g, '');
  const has = (...w) => w.some(x => t.includes(x.replace(/\s+/g, '')));

  if (!t) return { text: '궁금한 점을 입력해 주세요.', chips: MENU };
  if (has('안녕', '하이', 'hi', 'hello')) return { text: `안녕하세요, ${st.name} 학생! 손코딩 수행평가 점수에 대해 궁금한 점을 물어보세요.`, chips: MENU };
  if (has('친구', '다른사람', '다른학생', '평균', '등수', '순위', '1등', '최고점', '만점자')) {
    return { text: '다른 학생의 점수나 반 평균·순위는 알려줄 수 없어요. 본인 점수와 감점 이유만 안내할 수 있어요.', chips: MENU };
  }
  if (has('이의', '재채점', '억울', '다시채점', '정정', '항의', '틀린것같', '잘못채점', '잘못된것같')) {
    return { text: '채점 결과에 이의가 있으면 정보과학 선생님께 직접 말씀드려 주세요. 손코딩 답안지 원본과 활동지를 함께 확인한 뒤 다시 살펴봐 주실 거예요. 이 챗봇은 점수를 바꿀 수 없어요.', chips: MENU };
  }
  if (has('기준', '루브릭', '채점방법', '어떻게채점', '배점')) return { text: RUBRIC, chips: MENU };
  if (has('활동지', '원래코드', '내코드', '정답', '기준코드', '비교')) return { text: codeView(st), chips: MENU, mono: Boolean(st.code) };
  for (let i = 0; i < ITEMS.length; i++) {
    if (has(ITEMS[i].name) || ITEMS[i].words.some(w => has(w))) return { text: itemDetail(st, i), chips: MENU };
  }
  if (has('잘한', '칭찬', '좋은점', '장점', '잘했')) return { text: strengths(st), chips: MENU };
  if (has('어떻게해야', '팁', '개선', '공부', '다음엔', '다음에는', '잘하려면', '보완')) return { text: tips(st), chips: MENU };
  if (has('항목별', '세부', '자세히', '점수표', '각항목')) {
    return { text: `${st.name} 학생의 항목별 점수예요.\n\n` + ITEMS.map((it, i) => itemLine(st, it, i)).join('\n\n') + `\n\n총점: ${st.total}점 / 20점`, chips: MENU };
  }
  if (has('감점', '왜', '이유', '깎', '점수', '몇점', '총점', '틀린', '부족')) return { text: summary(st), chips: MENU };
  return {
    text: '질문을 잘 이해하지 못했어요. 아래 버튼을 누르거나 "왜 감점됐어?", "문법은 왜 감점됐어?", "채점 기준 알려줘"처럼 물어봐 주세요.',
    chips: MENU,
  };
}

export function welcome(st) {
  return {
    text: `${st.name} 학생, 반가워요! 손코딩 수행평가(지속가능발전 프로젝트)는 ${st.total}점(20점 만점)이에요.\n궁금한 점을 물어보거나 아래 버튼을 눌러 보세요.`,
    chips: MENU,
  };
}

// 교사용: 전체 학생 목록과 학생별 상세
export function teacherList() {
  return Object.entries(DATA).map(([sid, s]) => ({ sid, name: s.name, cls: s.cls, scores: s.scores, total: s.total }))
    .sort((a, b) => a.sid.localeCompare(b.sid));
}

export function teacherDetail(sid) {
  const s = DATA[String(sid)];
  if (!s) return null;
  const st = { sid: String(sid), ...s };
  const { good, bad, fail, info } = splitEvidence(s.ev);
  return {
    sid: st.sid, name: s.name, cls: s.cls, scores: s.scores, total: s.total,
    ev: s.ev, note: s.note, code: s.code, good, bad, fail, info,
    preview: summary(st),
  };
}

export const RUBRIC_TEXT = RUBRIC;
