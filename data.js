// 손코딩 수행평가(2차) 채점 결과 + 활동지 코드 (서버 전용, 공개 폴더에 두지 말 것)
export default {
 "20601": {
  "name": "강주아",
  "cls": "2-06",
  "scores": [
   2,
   2,
   2,
   2
  ],
  "total": 8,
  "ev": "연도·총량 리스트와 변수 초기화(total 등)만 작성. for문 본문(합계·평균·증감 비교)과 결과 출력 누락",
  "note": "",
  "code": "years = [2019, 2020, 2021, 2022, 2023, 2024]\namount = [2116, 2254, 2270, 2304, 2241, 2376]\n\ntotal = 0\nfor a in amount:\n    total += a\navg = total / len(amount)\n\nup = 0\nmax_diff = 0\nmax_year = 0\nfor i in range(1, len(amount)):\n    diff = amount[i] - amount[i-1]\n    print(years[i], \"년 증감:\", diff, \"만톤\")\n    if diff > 0:\n        up += 1\n    if diff > max_diff:\n        max_diff = diff\n        max_year = years[i]\n\nprint(\"평균:\", round(avg, 1), \"만톤\")\nprint(\"증가한 해:\", up, \"번\")\nprint(\"가장 크게 증가한 해:\", max_year, \"년 (+\", max_diff, \")\")\n\nif amount[-1] > amount[0]:\n    print(\"결론: 생활계폐기물은 늘어났다.\")\nelse:\n    print(\"결론: 생활계폐기물은 줄어들었다.\")\n\n\n1~2행: 연도와 발생량을 리스트로 저장\n\n첫번째 for문: 합계와 평균 계산\n\n두번째 for문: 전년 대비 증감 계산\n\nif문 2개: 증가 횟수 세기, 최대 증가 연도 찾기\n\n마지막 if-else: 2019년과 2024년을 비교해 결론 출력"
 },
 "20602": {
  "name": "김래윤",
  "cls": "2-06",
  "scores": [
   4,
   4,
   4,
   5
  ],
  "total": 17,
  "ev": "제목 출력·input 4개·if/elif/else 중첩 조건·안내 출력까지 활동지 코드 26줄을 거의 그대로 재현. 일부 안내 문구만 다름. [실행 불가] print를 'Print'(대문자)로 쓴 줄이 있어 NameError",
  "note": "",
  "code": "print(\"================================\")\nprint(\"       의류 폐기 도움 서비스”)\nprint(\" 의류 재사용 및 처리 방법 안내\")\nprint(\"================================\")\n\nclothes = input(\"의류 종류를 입력하세요: \")\n\ndirty = input(\"의류가 깨끗한가요? (예/아니오): \")\ndamage = input(\"손상 정도를 입력하세요 (없음/작음/심함): \")\ndonation = input(\"기부 가능한 의류인가요? (예/아니오): \")\n\nprint(\"\\n[의류 처리 방법 안내]\")\nprint(\"의류 종류:\", clothes)\n\nif dirty == \"아니오\" or damage == \"심함\":\n    print(\"추천 방법: 지역별 폐기 기준 확인\")\n    print(\"오염되거나 심하게 손상된 의류는\")\n    print(\"지역별 배출 기준에 따라 처리하세요.\")\n\nelif damage == \"작음\":\n    print(\"추천 방법: 수선 후 재사용\")\n    print(\"작은 손상을 수선하여 다시 사용하세요.\")\n\nelif dirty == \"예\" and damage == \"없음\":\n    if donation == \"예\":\n        print(\"추천 방법: 기부\")\n        print(\"깨끗한 의류를 기부하여 재사용을 도와주세요.\")\n    else:\n        print(\"추천 방법: 헌옷수거함 배출 기준 확인\")\n        print(\"해당 의류가 수거함 배출 대상인지 확인하세요.\")\n\nelse:\n    print(\"입력 정보를 다시 확인해주세요.\")\n\n\n프로그램 제목을 출력한다.\n사용자로부터 의류 종류를 입력받아 clothes 변수에 저장한다.\n의류의 오염 여부를 입력받아 dirty 변수에 저장한다.\n의류의 손상 정도를 입력받아 damage 변수에 저장한다.\n의류의 기부 가능 여부를 입력받아 donation 변수에 저장한다.\n줄을 바꾸어 의류 처리 방법 안내 문구를 출력한다.\n사용자가 입력한 의류 종류를 출력한다.\n의류가 깨끗하지 않거나 손상 정도가 심한지 조건을 검사한다.\n오염되거나 심하게 손상된 의류에 대한 처리 방법을 안내한다.\n앞의 조건이 거짓일 때 의류의 손상 정도가 작은지 검사한다.\n작은 손상이 있는 의류의 수선 및 재사용을 안내한다.\n의류가 깨끗하고 손상이 없는지 두 조건을 동시에 검사한다.\n기부가 가능한 의류인지 검사한다.\n기부 가능한 의류의 재사용 방법을 안내한다.\n앞의 조건이 모두 거짓일 때 실행할 내용을 지정한다.\n기부가 불가능한 의류의 수거함 배출 기준 확인을 안내한다.\n입력한 정보가 조건에 맞지 않을 때 다시 확인하도록 안내한다."
 },
 "20603": {
  "name": "박세연",
  "cls": "2-06",
  "scores": [
   2,
   4,
   3,
   4
  ],
  "total": 13,
  "ev": "노드·부모·습도·강수 리스트, for 반복·강수 조건·부모 누적·루트 합산까지 재현. 반복/조건 본문 들여쓰기 없음, 'p: parent[i]' 대입 오류, 노드별 출력·용수 한도 판정부 누락",
  "note": "",
  "code": "01) nodes = [\"\", \"청도군 전체\", \"동창천 수계\", \"서부·한재 권역\", \"운문면\", \"금천면\", \"매전면\", \"화양읍\", \"이서면\"]\n02) parent = [0, 0, 1, 1, 2, 2, 2, 3, 3]\n03) cur_hum = [0, 0, 0, 0, 50, 40, 45, 55, 40]\n04) tar_hum = [0, 0, 0, 0, 70, 60, 60, 80, 65]\n05) rain = [0, 0, 0, 0, 15, 10, 20, 60, 10]\n06) water = [0] * 9\n07) max_water = 800\n08) saved = 0\n09) for i in range(4, 9):\n10) need = (tar_hum[i] - cur_hum[i]) * 10\n11) if rain[i] >= 50:\n12) water[i] = 0\n13) saved += need\n14) else:\n15) water[i] = need\n16) p = parent[i]\n17) water[p] += water[i]\n18) water[1] = water[2] + water[3]\n19) for i in range(1, 9):\n20) print(f\"{i}번 [{nodes[i]}] 최종 급수량: {water[i]}L\")\n21) if water[1] <= max_water:\n22) print(f\"운문댐 용수 공급 가능! (절약 수자원: {saved}L)\")\n23) else:\n24) print(\"운문댐 용수 한도 초과: 추가 절수 계획 필요\")\n01) 트리 1번~8번 노드의 권역 이름을 저장하는 리스트\n02) ④번 표에서 정리한 각 노드의 부모 노드 번호 배열 (루트 1번은 0)\n03) 4~8번 개별 권역의 현재 토양 습도(%) 리스트\n04) 4~8번 개별 권역의 적정 기준 습도(%) 리스트\n05) 4~8번 개별 권역의 강수 확률(%) 리스트\n06) 각 노드(1~8번)의 실제 필요 급수량(L)을 저장할 리스트\n07) 가뭄으로 저수율이 감소한 운문댐의 일일 가용 농업용수 한도(L)\n08) 강수 예보 반영으로 절약한 농업용수량(L) 누적 변수\n09) 단말 노드인 4번(운문면)~8번(이서면) 권역을 순서대로 확인하는 반복문\n10) 습도 1%당 10L를 곱해 권역별 기본 필요 급수량 계산\n11) 강수 확률이 50% 이상이면 자연 강수로 대체하는 조건문\n12) 해당 권역의 인공 급수량을 0L로 설정\n13) 절약된 물의 양을 saved 변수에 누적\n14) 강수 확률이 50% 미만인 경우\n15) 계산된 필요 급수량을 해당 노드에 저장\n16) 현재 노드 i의 부모 노드 번호(수계 권역) 확인\n17) 각 노드별 확정 급수량 출력\n18) 전체 필요 급수량이 운문댐 가용 한도(800L) 이내인지 판별하는 조건문\n19) 공급 승인 및 절약 효과 안내 문구 출력\n20) 가용 한도를 초과할 경우\n21) 경고 메시지 출력\n# 1. 트리 구조 및 청도군 5개 권역 데이터 초기화\nnodes = [\"\", \"청도군 전체\", \"동창천 수계\", \"서부·한재 권역\", \"운문면\", \"금천면\", \"매전면\", \"화양읍\", \"이서면\"]\nparent = [0, 0, 1, 1, 2, 2, 2, 3, 3]\ncur_hum = [0, 0, 0, 0, 50, 40, 45, 55, 40]\ntar_hum = [0, 0, 0, 0, 70, 60, 60, 80, 65]\nrain = [0, 0, 0, 0, 15, 10, 20, 60, 10]\n\nwater = [0] * 9\nmax_water = 800\nsaved = 0\n\n# 2. 단말 노드(4~8번) 급수량 판별 및 부모 노드로 누적\nfor i in range(4, 9):\n    need = (tar_hum[i] - cur_hum[i]) * 10\n    if rain[i] >= 50:\n        water[i] = 0\n        saved += need\n        print(f\"[강수 대체] {nodes[i]}: 강수확률 {rain[i]}% -> 급수 생략 ({need}L 절약)\")\n    else:\n        water[i] = need\n        print(f\"[급수 필요] {nodes[i]}: {water[i]}L 배정\")\n\n    p = parent[i]\n    water[p] += water[i]\n\n# 3. 루트 노드(청도군 전체) 합산 및 운문댐 용수 한도 검증\nwater[1] = water[2] + water[3]\n\nprint(\"-\" * 40)\nfor i in range(1, 9):\n    print(f\"{i}번 [{nodes[i]}] 최종 급수량: {water[i]}L\")\n\nprint(\"-\" * 40)\nif water[1] <= max_water:\n    print(f\"운문댐 농업용수 공급 가능! (총 {water[1]}L / 한도 {max_water}L, 절약량: {saved}L)\")\nelse:\n    print(\"운문댐 용수 한도 초과: 추가 절수 계획 필요\")"
 },
 "20604": {
  "name": "박지우",
  "cls": "2-06",
  "scores": [
   3,
   5,
   4,
   4
  ],
  "total": 16,
  "ev": "입력·부모/값 리스트·트리 저장·질의 처리·while 갱신까지 전체 재현. 12줄 e[c]=d를 e[b]=d로 씀(값 저장 위치 오류), if·while 콜론 누락",
  "note": "",
  "code": "n = int(input())\np = [0] * 100\ne = [0] * 100\n\nfor i in range(n):\n    # 전체, 폭력 성격, 피해 유형 번호, 비율 순으로 입력\n    a, b, c, d = input().split()\n    a, b, c, d = int(a), int(b), int(c), float(d)\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = input().split()\n    a, b = int(a), float(b)\n    if a == 0:\n        print(round(e[int(b)], 1))\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n\n\n01  입력받은 값을 정수로 바꿔 변수 n에 저장한다. (피해 유형의 개수)\n02  트리에서 각 노드의 부모 노드 번호를 저장하기 위한 리스트 p를 선언한다.\n03  트리에서 각 노드의 비율 값을 저장하기 위한 리스트 e를 선언한다.\n05  반복문을 이용하여 n개의 피해 유형 정보를 입력받는다.\n06  입력 순서(전체, 폭력 성격, 피해 유형 번호, 비율)를 알려 주는 주석이다.\n07  한 줄에 입력된 값을 공백을 기준으로 나누어 a, b, c, d에 저장한다.\n08  a, b, c는 노드 번호이므로 정수(int)로, d는 비율이므로 소수(float)로 변환한다.\n09  b번 폭력 성격 노드가 a번 전체 노드의 자식이라는 것을 저장한다.\n10  c번 피해 유형 노드가 b번 폭력 성격 노드의 자식이라는 것을 저장한다.\n11  a번 전체 노드의 값에 비율 d를 누적하여 저장한다.\n12  b번 폭력 성격 노드의 값에 비율 d를 누적하여 저장한다.\n13  c번 피해 유형 노드에 비율 d를 저장한다.\n15  입력받은 값을 정수로 바꿔 변수 q에 저장한다. (작업의 개수)\n16  반복문을 이용하여 q개의 작업을 하나씩 처리한다.\n17  한 줄에 입력된 작업 번호와 값을 공백을 기준으로 나누어 a, b에 저장한다.\n18  a는 정수(int)로, b는 소수(float)로 변환한다.\n19  작업 번호 a가 0이면 합계를 출력하는 작업이다. (부분 문제 3)\n20  b번 노드의 값을 소수 첫째 자리까지 반올림하여 출력한다.\n21  작업 번호 a가 0이 아니면 a번 피해 유형의 비율을 갱신하는 작업이다. (부분 문제 2)\n22  새 비율 b와 기존 비율 e[a]의 차이를 계산하여 c에 저장한다.\n23  a가 0보다 크면, 즉 루트 노드를 지나기 전까지 반복한다.\n24  a번 노드의 값에 차이 c를 더하여 갱신한다.\n25  a를 부모 노드 번호로 바꾸어 한 단계 위 노드로 이동한다."
 },
 "20605": {
  "name": "배수빈",
  "cls": "2-06",
  "scores": [
   2,
   4,
   3,
   4
  ],
  "total": 13,
  "ev": "리스트·input 3개·or 조건·운동부족/적정 출력 구조 재현. data.append(t)를 't = append.data(\"...\")'로 잘못 씀(3곳), 11줄 주석을 코드로 작성",
  "note": "",
  "code": "data = []   # 학생 1명의 운동 데이터를 저장할 리스트\n\n# 1. 학생 1명의 데이터 입력받기\nt = int(input(\"하루 평균 운동 시간(분): \"))\nc = int(input(\"일주일 운동 횟수(회): \"))\ns = int(input(\"하루 평균 걸음 수(보): \"))\n\ndata.append(t)\ndata.append(c)\ndata.append(s)\n\nprint(\"\\n=== 분석 결과 ===\")\n\n# 2. 결과 판단 및 출력 (data[0]: 시간, data[1]: 횟수, data[2]: 걸음 수)\nif data[0] < 30 or data[1] < 3 or data[2] < 7000:\n    print(\"운동 부족 -> 하루 20분 산책 및 주 3회 이상 운동, 7,000보 이상 걷기를 목표로 하세요!\")\nelse:\n    print(\"운동 적정 -> 지금처럼 건강한 습관을 유지하세요!\")\n\nint(input(...)) 및 data.append(...): 키보드로 입력받은 운동 시간(분), 주간 운동 횟수(회), 하루 걸음 수(보)를 계산 가능한 정수(int)로 바꾼 뒤, data 리스트의 0번, 1번, 2번 칸에 순서대로 추가합니다.\nif data[0] < 30 or data[1] < 3 or data[2] < 7000:: 리스트에 저장된 세 항목 중 하나라도 기준치에 부족한지 or 연산자로 검사하여, 해당하면 '운동 부족' 판정과 함께 목표 안내 문구를 출력합니다.\nelse:: 운동 시간 30분 이상, 주 3회 이상, 7,000보 이상 기준을 모두 달성한 경우 '운동 적정' 메시지를 출력합니다"
 },
 "20606": {
  "name": "신수림",
  "cls": "2-06",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "서비스 2차원 리스트·input·for 탐색·나이/대상 중첩 조건·임신 조건·개수 출력까지 전체 재현. for문 'service'(s 누락)·'≤' 기호 사용 등 사소한 실수",
  "note": "",
  "code": "services = [[\"아동급식카드\", 0, 17, \"전체\"],\n            [\"드림스타트\", 0, 11, \"전체\"],\n            [\"청소년상담\", 9, 24, \"전체\"],\n            [\"기초연금\", 65, 999, \"전체\"],\n            [\"노인맞춤돌봄\", 65, 999, \"전체\"],\n            [\"활동지원\", 6, 64, \"장애인\"]]\n\ndisabled = input(\"장애 여부(예/아니오): \")\npregnant = input(\"임신 여부(예/아니오): \")\nage = int(input(\"나이: \"))\ncount = 0\n\nfor s in services:\n    if s[1] <= age <= s[2]:\n        if s[3] == \"전체\" or disabled == \"예\":\n            print(s[0])\n            count += 1\n\nif pregnant == \"예\":\n    print(\"드림스타트\")\n    count += 1\n\nprint(\"총\", count, \"개\")\n 1~6줄 : 서비스를 리스트로 저장\n [이름, 최소 나이, 최대 나이, 대상]\n 최대 나이가 없으면 999\n\n 8~10줄 : 장애 여부, 임신 여부, 나이 입력\n\n 11줄 : 서비스 개수 세기\n\n 13줄 : 서비스 하나씩 확인\n\n 14줄 : 나이가 범위 안인지 확인\n\n 15줄 : 서비스 대상이 전체이거나 입력한 장애 여부가 \"예\"이면 통과\n\n 16~17줄  :위 조건이 맞으면 서비스 이름 출력, 개수 1 증가\n\n 19~21줄 : 임신 중이면 나이와 상관없이 드림스타트 출력, 개수 1 증가\n\n 23줄 : 받을 수 있는 서비스 총 개수 출력"
 },
 "20607": {
  "name": "신유빈",
  "cls": "2-06",
  "scores": [
   5,
   4,
   5,
   5
  ],
  "total": 19,
  "ev": "활동지 코드(이미지로 첨부, 다음 페이지로 넘어감)와 손코딩 19줄이 구조·변수·조건이 일치. 입력(kind, dirty)→종류별 if/elif/else, 종이·플라스틱은 오염 여부 중첩 조건→배출 방법 출력까지 실행 가능. 출력 문구 일부만 축약(예: \"분리배출하세요\"→\"배출하세요\"). 반복문·리스트 없이 조건문만 사용해 효율성 -1",
  "note": "활동지 코드가 이미지로 첨부되어 있어 이미지 코드와 직접 비교",
  "code": "print(\"올바른 분리배출 안내 프로그램\")\n\nkind = input(\"쓰레기 종류를 입력하세요(종이/플라스틱/캔/유리병/기타): \")\ndirty = input(\"음식물이나 이물질이 묻어 있나요?(예/아니오): \")\n\nif kind == \"종이\":\n    if dirty == \"예\":\n        print(\"오염된 종이는 일반 쓰레기로 배출하세요.\")\n    else:\n        print(\"종이류로 분리배출하세요.\")\n\nelif kind == \"플라스틱\":\n    if dirty == \"예\":\n        print(\"내용물을 제거하고 세척한 후 배출하세요.\")\n    else:\n        print(\"플라스틱류로 분리배출하세요.\")\n\nelif kind == \"캔\":\n    print(\"내용물을 비우고 캔류로 배출하세요.\")\n\nelif kind == \"유리병\":\n    print(\"내용물을 비우고 유리병류로 배출하세요.\")\n\nelse:\n    print(\"지역의 배출 기준을 확인한 후 배출하세요.\")"
 },
 "20608": {
  "name": "이세빈",
  "cls": "2-06",
  "scores": [
   2,
   5,
   4,
   4
  ],
  "total": 15,
  "ev": "입력·트리 저장·질의·while 갱신 구조 전체 재현. 트리 저장부에서 p와 e를 서로 바꿔 씀(e[b]=a, p[a]+=d 등), c=e[a]-b 부호 반대, else/while 들여쓰기 어긋남",
  "note": "",
  "code": "01 n = int(input())\n02 p = [0] * 1000\n03 e = [0] * 1000\n04\n05 for i in range(n):\n06     a, b, c, d = map(int, input().split())\n07     p[b] = a\n08     p[c] = b\n09     e[a] += d\n10     e[b] += d\n11     e[c] = d\n12\n13 q = int(input())\n14 for i in range(q):\n15     a, b = map(int, input().split())\n16     if a == 0:\n17         print(e[b])\n18     else:\n19         c = b - e[a]\n20         while a > 0:\n21             e[a] += c\n22             a = p[a]\n\n01~03. 입력할 원료 정보의 개수를 입력받고, 부모 노드와 각 노드의 원료 사용량을 저장할 리스트 생성\n05~11. 원료별 정보를 입력받아 전체 사용량, 품목별 사용량, 개별 원료의 부모·자식 관계를 설정하고 사용량 저장\n13~15. 조회 및 수정 작업의 횟수를 입력받고, 작업 번호와 대상 노드 및 변경할 사용량 입력\n16~18. 작업 번호에 따라 해당 노드의 원료 사용량 조회\n19~22. 개별 원료의 사용량을 수정하고, 부모 노드로 이동하며 품목별 및 전체 사용량 갱신"
 },
 "20609": {
  "name": "이유승",
  "cls": "2-06",
  "scores": [
   2,
   3,
   2,
   3
  ],
  "total": 10,
  "ev": "노드 설명·score/parents 리스트는 재현. input·조건부 대입·부모 합산을 '[#2+#3]*8 → x' 같은 의사코드로 작성, if문도 'if(x<50), print(...)' 형태로 파이썬 문법 미성립",
  "note": "",
  "code": "# 1. 트리 노드 및 점수 리스트 초기화 (인덱스: 1~7번 노드)\n# [노드 1: 총점, 노드 2: 기술적, 노드 3: 내용적, 노드 4: 공공도메인, 노드 5: 상업도메인, 노드 6: 저자, 노드 7: 참고문헌]\nscores = [0] * 8\nparents = [None, None, 1, 1, 2, 2, 3, 3]  # 노드별 부모 노드 번호\n\nprint(\"=== 정보 출처 신뢰도 판별기 ===\")\n\n# 2. 사용자 입력 및 조건 판단\ndomain = input(\"도메인 유형 (1: 공공/학술, 2: 기타): \")\nscores[4 if domain == '1' else 5] = 40 if domain == '1' else 10\n\nscores[6] = 30 if input(\"저자 명시 여부 (y/n): \").lower() == 'y' else 0\nscores[7] = 30 if input(\"참고문헌 포함 여부 (y/n): \").lower() == 'y' else 0\n\n# 3. 부모 노드 점수 합산 (하위 노드 -> 상위 노드)\nscores[2] = scores[4] + scores[5]  # 기술적 평가 합산\nscores[3] = scores[6] + scores[7]  # 내용적 평가 합산\nscores[1] = scores[2] + scores[3]  # 총점 합산\n\n# 4. 결과 출력\ntotal = scores[1]\nprint(f\"\\n[결과] 총점: {total}점 / 100점\")\n\nif total >= 80:\n    print(\"판정: 🟢 [신뢰] 인용을 권장합니다.\")\nelif total >= 50:\n    print(\"판정: 🟡 [보통] 추가 교차 검증이 필요합니다.\")\nelse:\n    print(\"판정: 🔴 [주의] 신뢰도가 낮습니다.\")"
 },
 "20610": {
  "name": "이진주",
  "cls": "2-06",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "과목·수준 입력, if/elif/else 수준 판정, 목적 출력·입력, 콘텐츠 리스트, for+조건 추천 출력까지 활동지 코드 28줄 완벽 재현",
  "note": "",
  "code": "subject=input(\"학습 과목을 입력하세요:\")\nlevel=int(input(\"학습 수준을 입력하세요(1~5):\"))\n\nif level<=2:\n level_type=\"기초\"\nelif level==3:\n level_type=\"보통\"\nelse:\n level_type=\"심화\"\n\nprint(\"1.기초 개념 보충\")\nprint(\"2.시험 문제 유형 학습\")\nprint(\"3.심화 지식 학습\")\nprint(\"4.진로 관련 지식 학습\")\npurpose=int(input(\"학습 목적을 선택하세요:\"))\n\ncontents=[\n   \"개념 설명 및 기초 문제 풀이 자료\",\n   \"시험 빈출 문제 유형 및 해설 자료\",\n   \"교과 연계 심화 탐구 자료\",\n   \"진로 연계 전문 학습 자료\"\n]\n\nfor i in range(len(contents)):\n if purpose==i+1:\n   print(\"추천 과목:\", subject)\n   print(\"학습 수준:\", level_type)\n   print(\"추천 콘텐츠:\", contents[i])\n\n1.학습 과목 입력받아 subject 변수에 저장하기\n2.학습 수준 입력받아 정수로 변환 후 level 변수에 저장하기\n3.\n4.학습 수준이 2 이하인지 확인하기\n5.조건 참이면 학습 수준 기초로 저장\n6.앞의 조건 거짓일 때 학습 수준 3인지 확인\n7.조건 참이면 학습 수준 보통으로 저장\n8.위 조건 해당하지 않을 경우 실행\n9.학습 수준 심화로 저장\n10.\n11.첫번째 학습 목적 화면에 출력\n12.두번째 학습 목적 화면에 출력\n13.세번째 학습 목적 화면에 출력\n14.네번째 학습 목적 화면에 출력\n15.학습 목적 입력 받아 정수로 변환 후 purpose변수에 저장\n16.\n17.학습 목적별로 추천할 교육 콘텐츠 리스트에 저장\n18.기초 개념 보충에 해당하는 콘텐츠 저장\n19.시험 문제 유형 학습에 해당하는 콘텐츠 저장\n20.심화 지식 학습에 해당하는 콘텐츠 저장\n21.진로 관련 학습에 해당하는 콘텐츠 저장\n22.\n23.\n24.리스트에 저장된 콘텐츠 개수만큼 반복\n25.입력한 학습 목적과 콘텐츠  번호가 일치하는지 확인\n26.학생이 입력한 학습 과목 출력\n27.분류된 학습 수준 출력\n28.선택한 학습 목적에 맞는 교육 콘텐츠 출력"
 },
 "20611": {
  "name": "장미소",
  "cls": "2-06",
  "scores": [
   2,
   5,
   4,
   4
  ],
  "total": 15,
  "ev": "부모·조도·구역명 리스트, 기준값, for 순회·출력까지 재현. 'if lux >= TARGET_LUX:' 줄이 빠져 else만 남음, else 콜론 누락, f-string 중괄호 표기 오류",
  "note": "",
  "code": "01    # 트리의 부모 노드 번호 및 초기 조도(Lux) 데이터 설정\n02    p = [0, 0, 1, 1, 2, 2, 3, 3]\n03    e = [0, 365, 465, 265, 650, 280, 310, 220]\n04    zone_names = [\"\", \"전체\", \"2-6반\", \"2-7반\", \"2-6창가\", \"2-6복도\", \"2-7창가\", \"2-7복도\"]\n05\n06    # 학업 적정 조도 기준 설정 (500 Lux)\n07    TARGET_LUX = 500\n08\n09    # 단말 노드(4~7번 구역) 순회 및 자동 제어 판별\n10    for i in range(4, 8):\n11        lux = e[i]\n12        if lux >= TARGET_LUX:\n13            print(f\"[{zone_names[i]}] 조도: {lux}Lux -> 자연광 충분 (인공 조명 OFF)\")\n14        else:\n15            print(f\"[{zone_names[i]}] 조도: {lux}Lux -> 조도 부족 (인공 조명 ON)\")\n\n02)트리 구조를 구현하기 위해 각 노드의 부모 노드 번호를 리스트 p에 선언\n03)트리의 각 노드별 실내 측정 조도값(Lux)을 리스트 e에 저장\n04)출력 시 구역 이름을 명확히 보여주기 위한 구역 이름 리스트 선언\n07)학습 권장 적정 조도 기준값인 500 Lux를 변수 TARGET_LUX에 설정\n10)반복문(for)을 이용하여 실제 전등 제어가 필요한 4~7번 단말 노드(구역)를 순회\n11) i번 구역의 현재 조도 수치(Lux)를 변수 lux에 저장\n12)조건문(if)을 통해 현재 조도가 기준값(500 Lux) 이상인지 비교\n13)기준값 이상일 경우 자연광만으로 충분하므로 인공 조명 차단(OFF) 메시지 출력\n14~15)기준값 미달 시 학습 시력 보호를 위해 인공 조명 유지(ON) 메시지 출력"
 },
 "20612": {
  "name": "장하랑",
  "cls": "2-06",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "성별·수면·충족률 리스트, for 반복, 두 개의 if/else 판정·출력까지 활동지 코드 완벽 재현. 일부 닫는 따옴표 누락",
  "note": "",
  "code": "gender_list = [\"남학생\", \"여학생\"]\nsleep_list = [6.6, 5.9]\nsatisfaction_list = [28.3, 16.9]\n\nfor i in range(2):\n    print(gender_list[i])\n\n    if sleep_list[i] < 8:\n        print(\"평균 수면시간 부족\")\n    else:\n        print(\"평균 수면시간 충분\")\n\n    if satisfaction_list[i] < 20:\n        print(\"수면충족률 낮음\")\n    else:\n        print(\"수면충족률 높음\")\n리스트: 남학생과 여학생의 평균 수면시간과 수면충족률을 각각 저장한다.\n반복문: for i in range(2)를 사용해 남학생과 여학생의 데이터를 차례대로 확인한다.\n조건문 ①: 평균 수면시간이 8시간보다 적으면 수면시간 부족, 그렇지 않으면 수면시간 충분이라고 출력한다.\n조건문 ②: 수면충족률이 20%보다 낮으면 수면충족률 낮음, 그렇지 않으면 높음이라고 출력한다.\n출력: 성별에 따른 조사 결과를 확인하고 청소년의 수면 상태를 비교한다."
 },
 "20613": {
  "name": "정지원",
  "cls": "2-06",
  "scores": [
   2,
   4,
   4,
   4
  ],
  "total": 14,
  "ev": "점검 항목 리스트·for 입력·총점 출력·if/elif/else 판정 재현. 'for item in :' 반복 대상과 'score +=' 우변 비어 있음, while 입력 검증부 누락",
  "note": "",
  "code": "checks = [\n    \"정보의 출처가 확인되는가?\",\n    \"작성자 또는 작성 기관이 확인되는가?\",\n    \"작성 날짜가 확인되는가?\",\n    \"정보를 뒷받침하는 근거 자료가 있는가?\",\n    \"다른 신뢰할 만한 자료와 내용이 일치하는가?\"\n]\n\nscore = 0\n\nprint(\"온라인 정보 신뢰도 판별 프로그램\")\nprint(\"각 질문에 해당하면 1, 해당하지 않으면 0을 입력하세요.\")\n\nfor item in checks:\n    while True:\n        answer = input(item + \" (1/0): \")\n\n        if answer == \"1\" or answer == \"0\":\n            score += int(answer)\n            break\n        else:\n            print(\"1 또는 0만 입력하세요.\")\n\nprint(\"총점:\", score, \"/ 5점\")\n\nif score >= 4:\n    print(\"판별 결과: 신뢰도 높음\")\nelif score >= 2:\n    print(\"판별 결과: 추가 확인 필요\")\nelse:\n    print(\"판별 결과: 신뢰도 낮음\")\n\nprint(\"※ 이 결과는 참고용이며 정보의 진실 여부를 확정하지 않습니다.\")\n\n\n정보의 출처, 작성자, 작성 날짜, 근거 자료, 다른 자료와의 일치 여부를 확인하여 항목별로 점수를 계산하도록 하였습니다. 반복문과 조건문을 사용하여 총점에 따라 정보의 신뢰도를 3단계로 분류하도록 만들었다."
 },
 "20614": {
  "name": "진예영",
  "cls": "2-06",
  "scores": [
   2,
   5,
   3,
   4
  ],
  "total": 14,
  "ev": "iter 입력·부모/값 리스트·트리 저장·조회/수정 분기·평균 비교 출력까지 대부분 재현(뒷면 포함). 첫 for 본문 들여쓰기 없음, while에서 's[t]+=' 미완성·t=p[t] 대신 print(p[t]), 'for v to r' 오류",
  "note": "",
  "code": "it = iter(input().split())\nn = int(next(it))\np = [0] * 20\ns = [0] * 20\nold = [0] * 20\n\nfor i in range(n):\n    a = int(next(it))\n    b = int(next(it))\n    c = int(next(it))\n    d = int(next(it))\n    e = int(next(it))\n    p[b] = a\n    p[c] = b\n    old[b] = d\n    s[a] += e\n    s[b] += e\n    s[c] = e\n\nq = int(next(it))\nfor i in range(q):\n    op = int(next(it))\n    t = int(next(it))\n    if op == 0:\n        print(s[t])\n    elif op == 1:\n        add = int(next(it))\n        while t > 0:\n            s[t] += add\n            t = p[t]\n    else:\n        r = []\n        for i in range(2, 2 + n):\n            if old[i] > 0:\n                r.append(round(s[i] / old[i] * 1000, 2))\n        avg = round(sum(r) / len(r), 2)\n        print(\"평균:\", avg)\n        for v in r:\n            if v < avg:\n                print(v, \"우선점검\")\n            else:\n                print(v, \"평균이상\")\n01~02: 공백과 줄바꿈으로 구분된 입력값을 순서대로 읽어 비교할 행정동 개수(n)를 저장한다.\n03~05: 부모 노드(p), 쉼터 수(s), 고령 인구수(old)를 저장할 리스트를 0으로 초기화한다.\n07~18: 반복문을 통해 n개 동의 트리 연결 정보와 인구·쉼터 수를 입력받아 각 노드 및 부모 노드에 쉼터 수를 누적한다.\n20~21: 수행할 작업 개수(q)를 입력받고 반복문을 실행한다.\n22~25: 작업 번호(op)와 대상 노드(t)를 입력받아, op가 0이면 해당 노드의 현재 쉼터 수를 출력한다.\n26~30: op가 1이면 추가된 쉼터 수(add)를 입력받고, while문을 이용해 최상위 루트 노드까지 올라가며 쉼터 수를 누적 갱신한다.\n31~41: 그 외(op가 2)의 경우 고령 인구가 0명 초과인 동들의 1,000명당 쉼터 수와 평균(avg)을 계산하고, 평균 미만이면 '우선점검', 이상이면 '평균이상'으로 분류해 출력한다."
 },
 "20615": {
  "name": "채우영",
  "cls": "2-06",
  "scores": [
   2,
   3,
   2,
   2
  ],
  "total": 9,
  "ev": "활동지 코드(239줄, AI API·클래스 기반) 중 import/try, 카테고리·가중치 자료 일부만 작성. 'CATS : [...]' 등 대입 대신 콜론 사용, 함수·판정 로직은 의사코드 수준, Player 클래스·경고 누적·출력 누락",
  "note": "",
  "code": "import json\nimport os\n\ntry:\n  from google import genai\n  from google.genai import types\n\n  HAS_GENAI = True\nexcept ImportError:\n  HAS_GENAI = False\n\nHATE_CATEGORIES = [\n    \"신체·외모\",\n    \"국적·인종\",\n    \"성소수자\",\n    \"정치성향\",\n    \"장애인\",\n    \"성별\",\n    \"종교\",\n    \"특정 연령대\",\n    \"학벌·학력\",\n    \"지역\",\n    \"소득수준\",\n    \"다문화\",\n]\n\n\nAGE_WEIGHTS = {\"초등\": 2.0, \"중등\": 1.5, \"고등\": 1.0}\n\n\nclass Player:\n\n  def __init__(self, nickname, age_group):\n    self.nickname = nickname\n    self.age_group = age_group\n    self.warning_score = 0.0\n    self.status = \"정상 이용\"\n\n\ndef analyze_chat_with_ai(message):\n  api_key = os.environ.get(\"GEMINI_API_KEY\")\n\n  if HAS_GENAI and api_key:\n    client = genai.Client(api_key=api_key)\n    prompt = f\"\"\"\n        다음 온라인 게임 채팅 문장을 분석해줘.\n        카테고리 이름이 직접 적히지 않았더라도 비하어·초성·은어·문맥적 혐오 표현을 감지해서 분류해.\n\n        채팅 문장: \"{message}\"\n\n        반드시 아래 JSON 형식으로만 응답해:\n        {{\n            \"is_hate\": true 또는 false,\n            \"category\": {HATE_CATEGORIES} 중 가장 알맞은 항목 1개 (해당 없으면 \"없음\"),\n            \"base_severity\": 1(약함), 2(보통), 3(심함) 중 정수 (혐오가 아니면 0),\n            \"purified_text\": \"혐오/비속어 부분을 부드러운 순화어로 바꾼 전체 문장\"\n        }}\n        \"\"\"\n    response = client.models.generate_content(\n        model=\"gemini-2.5-flash\",\n        contents=prompt,\n        config=types.GenerateContentConfig(\n            response_mime_type=\"application/json\"\n        ),\n    )\n    return json.loads(response.text)\n\n\n  ai_knowledge_base = [\n      ([\"못생긴\", \"못생겼\", \"돼지\", \"멸치\", \"대머리\"], \"신체·외모\", 2, \"개성 있는\"),\n      ([\"ㅂㅅ\", \"ㅄ\", \"병신\", \"장애인\", \"찐따\"], \"장애인\", 3, \"아쉬운 플레이어\"),\n      ([\"초딩\", \"잼민\", \"잼민이\", \"틀딱\", \"급식충\"], \"특정 연령대\", 2, \"플레이어\"),\n      ([\"한남\", \"김치녀\", \"여자가\", \"남자가\"], \"성별\", 3, \"팀원이\"),\n      ([\"짱깨\", \"쪽바리\", \"깜둥이\"], \"국적·인종\", 3, \"해외 유저\"),\n      ([\"지잡대\", \"무식한\", \"빡대가리\"], \"학벌·학력\", 2, \"실수한\"),\n      ([\"거지\", \"그지\", \"흙수저\"], \"소득수준\", 2, \"초보\"),\n      ([\"사투리\", \"촌놈\"], \"지역\", 1, \"친구\"),\n  ]\n\n  purified = message\n  detected_categories = []\n  max_severity = 0\n\n\n  for expressions, category, severity, replacement in ai_knowledge_base:\n    for word in expressions:\n      if word in purified:\n        purified = purified.replace(word, replacement)\n        if category not in detected_categories:\n          detected_categories.append(category)\n        if severity > max_severity:\n          max_severity = severity\n\n  return {\n      \"is_hate\": max_severity > 0,\n      \"category\": (\n          \", \".join(detected_categories) if detected_categories else \"없음\"\n      ),\n      \"base_severity\": max_severity,\n      \"purified_text\": purified,\n  }\n\n\ndef process_chat(player, message):\n  result = analyze_chat_with_ai(message)\n\n  if not result[\"is_hate\"]:\n    print(f\" [채팅 출력] {player.nickname}: {message}\")\n    return\n\n  category = result[\"category\"]\n  base_score = result[\"base_severity\"]\n  purified_text = result[\"purified_text\"]\n\n  weight = AGE_WEIGHTS[player.age_group]\n  added_warning = base_score * weight\n  player.warning_score += added_warning\n\n  if player.warning_score >= 6.0:\n    player.status = \"게임 이용 일시 정지\"\n  elif player.warning_score >= 3.0:\n    player.status = \"10분간 채팅 금지\"\n  else:\n    player.status = \"1차 주의 알림\"\n\n  print(\"-\" * 50)\n  print(f\" [AI 감지 완료] 분류 카테고리: {category} (기본 유해도: {base_score}점)\")\n  print(f\" [순화어 변환] {player.nickname}: {purified_text}\")\n  print(\n      f\" [경고 점수] {player.age_group} 가중치({weight}배) 적용 →\"\n      f\" +{added_warning:.1f}점 (누적: {player.warning_score:.1f}점)\"\n  )\n  print(f\" [자동 제재] 현재 상태: ▶ {player.status} ◀\")\n  print(\"-\" * 50)\n\nif __name__ == \"__main__\":\n  print(\"==================================================\")\n  print(\"   게임 내 혐오 표현 감지 및 연령별 경고 자동화\")\n  print(\"==================================================\")\n\n  nickname = input(\"1. 플레이어 닉네임을 입력하세요: \").strip() or \"게이머1\"\n\n  while True:\n    age_input = input(\"2. 연령대(학급)를 입력하세요 (초등 / 중등 / 고등): \").strip()\n    if age_input in AGE_WEIGHTS:\n      break\n    print(\" -> '초등', '중등', '고등' 중 하나를 정확히 입력해 주세요.\")\n\n  user = Player(nickname, age_input)\n  print(\n      f\"\\n[{user.nickname}({user.age_group})]님 접속 완료! (적용 경고 가중치:\"\n      f\" {AGE_WEIGHTS[user.age_group]}배)\"\n  )\n  print(\"채팅을 입력해 테스트해 보세요. (종료하려면 '종료' 입력)\\n\")\n\n  while True:\n    if user.status == \"게임 이용 일시 정지\":\n      print(\n          f\"\\n[시스템 알림] {user.nickname}님은 누적 경고\"\n          f\" {user.warning_score:.1f}점으로 '게임 이용 일시 정지' 상태입니다.\"\n      )\n      retry = input(\"새 플레이어로 다시 테스트하시겠습니까? (y/n): \").strip().lower()\n      if retry == \"y\":\n        user.warning_score = 0.0\n        user.status = \"정상 이용\"\n        new_age = input(\"새 연령대 입력 (초등 / 중등 / 고등): \").strip()\n        if new_age in AGE_WEIGHTS:\n          user.age_group = new_age\n        print(\n            f\"\\n[{user.age_group}] 모드로 초기화되었습니다. 다시 채팅을 입력하세요.\\n\"\n        )\n        continue\n      else:\n        print(\"프로그램을 종료합니다.\")\n        break\n\n    chat_msg = input(\"채팅 입력 > \").strip()\n\n    if chat_msg == \"종료\":\n      print(\n          f\"\\n테스트를 종료합니다. (최종 누적 경고: {user.warning_score:.1f}점 / 상태:\"\n          f\" {user.status})\"\n      )\n      break\n\n    if not chat_msg:\n      continue\n\n    process_chat(user, chat_msg)\n01 AI가 반환한 JSON 형식의 분석 결과를 파이썬 딕셔너리 자료형으로 변환하기 위해 모듈을 불러오기\n02 컴퓨터 환경변수에 저장된 API 키를 읽어오기 위해 운영체제 모듈을 불러오기\n04 # Google Gemini AI SDK\n08 AI 라이브러리를 정상적으로 불러왔을 때 사용 가능 상태를 True로 저장.\n09~10 라이브러리가 설치되지 않았을 때 프로그램이 멈추지 않도록 예외 처리하고 내장 모드로 전환.\n12~24  # 1. 트리 구조 기반 데이터 모델링\n28 # 연령이 어릴수록 더 강한 경고 가중치 부여\n31 플레이어 한 명의 닉네임, 연령대, 경고 점수, 이용 상태를 하나로 묶어 관리하는 클래스를 선언.\n33 새로운 플레이어가 생성될 때 기본 정보를 설정하는 초기화 함수.\n34~35 사용자가 입력한 닉네임과 연령대를 플레이어 정보에 저장.\n36~37 플레이어의 초기 누적 경고 점수를 0.0점, 초기 상태를 \"정상 이용\"으로 설정.\n40 채팅 문장에서 혐오 표현을 탐색하고 카테고리 분류 및 순화어 변환을 수행하는 함수.\n41 환경변수에 등록된 GEMINI_API_KEY 값을 가져옵니다.\n43 AI 라이브러리와 API 키가 모두 존재할 때 실제 AI 분석 모드를 실행하는 조건문.\n44 API 키를 이용해 Gemini AI와 통신할 클라이언트 객체를 생성.\n45~60 AI에게 문맥·초성·은어를 분석해 12개 카테고리 중 하나로 분류하고 순화어로 바꾼 뒤 JSON으로 답하도록 지시문을 만들기.\n61~67  지시문을 gemini-2.5-flash 모델에 전달하고 JSON 형식의 분석 결과를 받기.\n68 받아온 JSON 텍스트를 파이썬 딕셔너리로 변환하여 반환.\n71~81 API 키 없이도 바로 테스트할 수 있도록 감지 표현 리스트, 카테고리, 기본 유해도, 순화어를 묶어 저장한 내장 데이터.\n83~86 순화될 문장, 감지된 카테고리 리스트, 최고 유해도 점수를 저장할 변수를 초기화.\n89 내장 데이터 리스트에서 각 카테고리 묶음을 하나씩 꺼내는 바깥쪽 반복문.\n90 해당 카테고리에 속한 감지 단어들을 처음부터 끝까지 하나씩 꺼내는 안쪽 반복문.\n91 입력된 채팅 문장 안에 해당 비하어나 초성이 포함되어 있는지 검사하는 조건문.\n92 감지된 표현을 대응하는 순화어로 자동 치환.\n93~94 감지된 카테고리가 중복되지 않도록 결과 목록에 추가.\n95~96 한 문장에 여러 표현이 있을 경우 가장 높은 유해도 점수를 기준으로 기록.\n98~106 혐오 표현 여부, 분류된 카테고리, 기본 유해도, 순화 문장을 딕셔너리 형태로 반환.\n109 감지 결과와 플레이어 연령을 바탕으로 경고 점수를 계산하고 자동 제재를 내리는 함수.\n110 채팅 문장을 분석 함수에 전달하여 판별 결과를 받아오기\n112~115 혐오 표현이 없는 정상 채팅이면 입력된 문장을 그대로 화면에 출력하고 함수를 종료.\n117~120 분석 결과에서 카테고리, 기본 유해도, 순화 문장을 각각 꺼내 변수에 담기.\n122 플레이어의 연령대에 해당하는 경고 가중치를 불러오기.\n123 기본 유해도 × 연령 가중치를 계산하여 이번에 부과할 경고 점수를 산출.\n124 산출된 경고 점수를 플레이어의 누적 경고 점수에 더하기.\n126~127 누적 경고 점수가 6.0점 이상이면 플레이어 상태를 \"게임 이용 일시 정지\"로 변경.\n128~129 누적 경고 점수가 3.0점 이상 6.0점 미만이면 \"10분간 채팅 금지\" 처분을 내리기.\n130~131 누적 경고 점수가 3.0점 미만이면 \"1차 주의 알림\" 상태로 설정.\n133~142 AI가 분류한 카테고리, 순화된 채팅 문장, 연령 가중치가 적용된 경고 점수, 자동 제재 상태를 화면에 출력.\n144 이 파일을 직접 실행했을 때만 아래 사용자 입력 테스트 프로그램이 동작하도록 설정.\n145~148 프로그램 시작 안내 배너를 화면에 출력.\n150 플레이어 닉네임을 입력받으며, 빈칸으로 엔터를 누르면 기본값 \"게이머1\"을 사용.\n152~157 사용자가 \"초등\", \"중등\", \"고등\" 중 하나를 정확히 입력할 때까지 반복해서 입력.\n159 입력받은 닉네임과 연령대로 Player 객체를 생성.\n161~166 접속 완료 메시지와 적용된 연령별 경고 가중치, 종료 방법을 안내.\n168 사용자가 '종료'를 입력하기 전까지 채팅 테스트를 계속 진행하는 반복문.\n169~188 일시 정지 상태가 되면 채팅 입력을 차단하고, 새 연령대로 초기화할지 종료할지 선택.\n190 사용자가 테스트할 채팅 문장을 직접 입력.\n192~198 사용자가 \"종료\"를 입력하면 최종 누적 경고 점수와 상태를 출력하고 프로그램을 종료.\n200~201 아무 내용 없이 엔터만 입력한 경우 처리 과정을 건너뛰고 다시 입력창으로 돌아가기.\n203 입력된 채팅 문장을 process_chat 함수로 전달해 감지·순화·경고 처리를 실행."
 },
 "20616": {
  "name": "표준희",
  "cls": "2-06",
  "scores": [
   2,
   2,
   2,
   2
  ],
  "total": 8,
  "ev": "'households[1,2,3...]', 'max value[0]' 등 변수명만 나열. 실제 자료 리스트·for 반복·최대/최소 비교 조건이 '가장 높은 전력량일 때' 같은 한글 의사코드 수준",
  "note": "",
  "code": "# 가구원 수별 전기 소비량 자료\nhouseholds = [\"1명\", \"2명\", \"3명\", \"4명 이상\", \"전체\"]\n\ngeneral = [2226.3, 2743.7, 2978.9, 3242.9, 2698.3]\nnight = [244.8, 203.5, 138.9, 96.0, 186.4]\ntotal = [2471.1, 2947.3, 3117.8, 3338.9, 2884.8]\n\n# 전체 가구의 전기 소비량 비교\nfor i in range(5):\n    print(households[i], total[i], \"Mcal\")\n\n# 전체 가구를 제외하고 가장 높은 소비량 찾기\nmax_value = total[0]\nmin_value = total[0]\nmax_house = households[0]\nmin_house = households[0]\n\nfor i in range(1, 4):\n    if total[i] > max_value:\n        max_value = total[i]\n        max_house = households[i]\n\n    if total[i] < min_value:\n        min_value = total[i]\n        min_house = households[i]\n\nprint(\"가장 높은 소비량:\", max_house, max_value)\nprint(\"가장 낮은 소비량:\", min_house, min_value)\nprint(\"소비량 차이:\", round(max_value - min_value, 1))\n리스트: 가구원 수별 전기 소비량 자료를 저장한다\n반복문: 가구원 수에 따른 소비량을\n차례대로 확인한다\n조건문: 가장 높은 소비량과 가장 낮은 소비량을 비교한다\n출력문: 분석 결과와 소비량 차이를 화면에 출력한다."
 },
 "20617": {
  "name": "한효민",
  "cls": "2-06",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·부모/값 리스트·트리 저장·질의 처리·while 갱신까지 활동지 코드 27줄 완벽 재현. 'd = float'(인자 누락), if 콜론 누락 등 사소한 실수",
  "note": "",
  "code": "n = int(input())\np = [0] * 10\ne = [0] * 10\n\nfor i in range(n):\n    a, b, c, d = input().split()\n    a, b, c = int(a), int(b), int(c)\n    d = float(d)\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = input().split()\n    a = int(a)\n    b = float(b)\n    if a == 0:\n        print(round(e[int(b)], 2))\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n\n\n01~03: 가구 수 n을 입력받고, 부모 번호 리스트 p와 배출량 리스트 e 선언\n05~13: 가구 정보를 입력받아 트리에 저장 (부분 문제 1)\n09~10: 구의 부모는 전체, 가구의 부모는 구\n11~13: 전체와 구에는 배출량을 누적하고, 가구에는 값을 저장\n15~16: 작업 개수 q를 입력받아 q번 반복\n17~19: 작업 번호 a와 값 b 입력 (배출량이 소수라 b는 float)\n20~21: a가 0이면 b번 노드의 배출량 출력 (부분 문제 3)\n22~26: a가 0이 아니면 a번 가구의 배출량을 b로 갱신 (부분 문제 2)\n23: 새 값과 기존 값의 차이 c 계산\n24~26: 최상위 노드까지 부모로 올라가며 c를 누적"
 },
 "20618": {
  "name": "홍지유",
  "cls": "2-06",
  "scores": [
   3,
   5,
   3,
   5
  ],
  "total": 16,
  "ev": "학교·CO2·미세먼지 리스트, 기준값, for 반복 출력, or 조건 판정, 구분선 출력까지 전체 재현. 리스트 대입에 '=' 대신 ':' 사용(3곳), if/else가 for 본문 밖으로 들여쓰기 어긋남",
  "note": "",
  "code": "schools = [\"강북고등학교\", \"경상공업고등학교\", \"경상여자고등학교\",\n           \"남산고등학교\", \"능인고등학교\", \"다사고등학교\",\n           \"영남고등학교\"]\n\nco2 = [850, 1150, 950, 1250, 780, 1080, 900]\ndust = [28, 42, 31, 55, 20, 38, 25]\n\nco2_limit = 1000\ndust_limit = 75\n\nfor i in range(len(schools)):\n    print(\"학교:\", schools[i])\n    print(\"이산화탄소:\", co2[i], \"ppm\")\n    print(\"미세먼지:\", dust[i], \"㎍/㎥\")\n\n    if co2[i] > co2_limit or dust[i] > dust_limit:\n        print(\"공기질 상태: 환기 필요\")\n    else:\n        print(\"공기질 상태: 정상\")\n\n    print(\"--------------------\")\n1. 학교 이름과 이산화탄소 , 미세먼지 측정값을 각각 리스트에 저장합니다.\n\n2. 반복문을 사용하여 학교 목록을 하나씩 확인합니다.\n\n3. 조건문을 사용하여 이산화탄소 농도가 1,000ppm을 초과하거나 미세먼지 농도가 75㎍/m3를 초과하는지 확인합니다.\n\n4. 두 항목 중 하나라도 기준을 초과하면 환기 필요를 출력하고, 모두 기준 이하이면 정상을 출력합니다.\n\n5. 모든 학교의 공기질 상태를 순서대로 화면에 표시합니다."
 },
 "20701": {
  "name": "권소윤",
  "cls": "2-07",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·부모/값 리스트·트리 저장·질의(result 저장)·while 갱신·결과 출력까지 활동지 코드 34줄 완벽 재현(뒷면 포함). [실행 불가] 6줄 주석을 '#' 없이 '※'로 써서 SyntaxError",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0.0] * 1000\n\nfor i in range(n):\n   # 전국, 지역 그룹, 지역 번호, 학생 수 순으로 입력\n   a, b, c, d = input().split()\n   a, b, c = int(a), int(b), int(c)\n   d = float(d)\n\n   p[b] = a\n   p[c] = b\n   e[a] += d\n   e[b] += d\n   e[c] = d\n\nq = int(input())\nresult = []\n\nfor i in range(q):\n   a, b = input().split()\n   a = int(a)\n   b = float(b)\n\n   if a == 0:\n       result.append(e[int(b)])\n   else:\n       c = b - e[a]\n       while a > 0:\n           e[a] = e[a] + c\n           a = p[a]\n\nfor value in result:\n   print(round(value, 2))\n01 입력받을 지역 데이터 개수를 정수로 저장\n02 부모 노드 정보를 저장할 리스트 p 선언\n03 각 노드의 데이터를 저장할 리스트 e 선언\n05~15 반복문을 이용하여 n개의 지역 데이터 입력 및 저장\n07 상위 노드, 지역 그룹, 지역 번호, 학생 수 입력\n08~09 입력값을 정수와 실수로 변환\n11~12 부모 노드와 자식 노드 관계 설정\n13~15 각 노드에 학생 수 데이터 저장 및 누적\n17 수행할 작업 개수 q 입력\n18 조회 결과를 저장할 리스트 선언  20~31 반복문을 이용하여 q번의 작업 수행\n21~23 작업 번호와 값을 입력받아 변환\n25~26 작업 번호가 0이면 해당 노드 값 저장\n27~28 작업 번호가 0이 아니면 변경할 값의 차이 계산\n29~31 부모 노드까지 변경된 값 누적\n33~34 저장된 결과를 소수 둘째 자리까지 출력"
 },
 "20702": {
  "name": "김도경",
  "cls": "2-07",
  "scores": [
   3,
   5,
   5,
   4
  ],
  "total": 17,
  "ev": "딕셔너리 p,e·입력 반복·부모 저장·누적·조회/갱신·while 부모 이동까지 압축 코드 전체 재현. 누적식 e.get(x,0)을 p.get(x,0)으로 잘못 씀(결과값 오류)",
  "note": "",
  "code": "p, e = {}, {}\n\nfor i in range(int(input())):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c] = a, b\n    e[c] = d\n    for x in (a, b):\n        e[x] = e.get(x, 0) + d\n\nfor i in range(int(input())):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        d = b - e[a]\n        while a:\n            e[a] += d\n            a = p.get(a, 0)\n1행: 부모 노드 번호를 저장할 딕셔너리 p와 각 노드의 신고 건수를 저장할 딕셔너리 e를 생성한다.\n3~4행: 초기 트리에 입력할 말단 노드의 개수를 입력받고, 반복문을 통해 루트, 지역, 월별 노드 번호와 1분기 신고 건수를 입력받는다.\n5~6행: 지역 노드와 월별 노드의 부모 번호를 저장하고, 월별 말단 노드에 초기 신고 건수를 저장한다.\n7~8행: 반복문으로 루트 노드와 지역 노드를 차례로 선택하여 월별 신고 건수를 누적하고, 각 노드의 초기 합계를 계산한다.\n10~11행: 조회 및 변경 작업의 총횟수를 입력받고, 반복문을 통해 조회 명령과 노드 번호 또는 변경할 노드 번호와 새로운 신고 건수를 입력받는다.\n12~14행: 첫 번째 입력값이 0이면 지정한 노드의 현재 값을 출력하고, 그렇지 않으면 노드값을 변경하는 과정으로 분기한다.\n15~16행: 새로운 신고 건수와 기존 노드값의 차이를 계산하고, 현재 노드부터 상위 노드까지 값을 갱신하기 위한 반복문을 실행한다.\n17~18행: 계산한 차이를 현재 노드에 반영한 뒤 부모 노드로 이동하는 과정을 반복하여 루트 노드까지 값을 순차적으로 갱신한다."
 },
 "20703": {
  "name": "김민주",
  "cls": "2-07",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "입력·부모/값 리스트·트리 저장·질의 처리·while 갱신까지 활동지 코드 20줄을 오류 없이 완벽 재현",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n01\n키보드로 입력받은 값을 정수로 변환해서 변수 n(사업장 수)에 저장\n02\n트리에서 부모의 정보를 저장하기 위한 리스트 p 선언 (처음엔 모두 0)\n03\n트리에서 각 노드의 질소산화물 배출량을 저장하기 위한 리스트 e 선언\n05~12\n반복문을 이용하여 n개의 사업장 정보 입력\n06\n주석: 대한민국, 도, 사업장 번호, 질소산화물 배출량 순으로 입력한다는 안내\n07\n대한민국, 도, 사업장 번호, 배출량을 공백을 기준으로 입력\n08\n도(b)가 대한민국(a)의 소속이라는 것을 부모 노드와 자식 노드로 표현\n09\n사업장(c)이 도(b)의 소속이라는 것을 부모 노드와 자식 노드로 표현\n10\n대한민국(a)의 배출량을 d만큼 누적하여 저장\n11\n도(b)의 배출량을 d만큼 누적하여 저장\n12\n사업장(c)의 배출량 d 저장\n14\n키보드로 입력받은 값을 정수로 변환해서 변수 q(작업 수)에 저장\n15~23\n반복문을 이용하여 q만큼 작업 진행\n16\n작업 번호와 작업을 수행하려는 노드 번호 입력\n17\n만약 작업 번호가 0번이라면 (조회)\n18\ne[b]값(b번 노드의 배출량) 출력\n19\n만약 작업 번호가 0번이 아니라면 (a번 노드 배출량 갱신)\n20\n새 배출량 b에서 기존 배출량 e[a]를 빼서 변화량 c 계산\n21\n최상단 노드(0)가 아니라면 반복\n22\na번 노드의 배출량을 c만큼 누적하여 저장\n23\na번 노드의 부모 노드로 이동"
 },
 "20704": {
  "name": "김민주",
  "cls": "2-07",
  "scores": [
   3,
   5,
   4,
   4
  ],
  "total": 16,
  "ev": "입력·부모/값 리스트·트리 저장·최근 연도 판정·자식 노드 최대/최소 탐색·출력까지 전체 재현. 'last = a'를 'last = 0'으로 씀(최근 연도 갱신 안 됨), for 본문 들여쓰기 일부 어긋남",
  "note": "",
  "code": "n = int(input())\np = [0] * 20\ne = [0] * 20\nlast = 0\n\nfor i in range(n):\n    a, b, c = map(int, input().split())\n    p[b] = a\n    e[a] += c\n    e[b] = c\n    if a > last:\n        last = a\n\nprint(\"최근 연도 총합:\", e[last])\n\nmax_v = 0\nmin_v = 99999\nfor i in range(1, 20):\n    if p[i] == last:\n        if e[i] > max_v:\n            max_v = e[i]\n        if e[i] < min_v:\n            min_v = e[i]\n\nprint(\"최댓값:\", max_v)\nprint(\"최솟값:\", min_v)\n\n[1~4줄] 데이터 개수(n), 부모 리스트(p), 값 리스트(e), 최근 연도 변수(last) 선언\n[6~12줄] for문으로 노드 정보를 입력받아 트리에 저장하고, if문으로 가장 큰 부모 번호(최근 연도)를 last에 저장\n[14줄] 최근 연도(last)의 충전소 총합 출력\n[16~23줄] for문과 if문으로 부모가 last인 자식 노드들을 비교해 최댓값(max_v)과 최솟값(min_v) 탐색\n[25~26줄] 최댓값과 최솟값 출력"
 },
 "20705": {
  "name": "박소희",
  "cls": "2-07",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "방향 리스트·for 입력·리스트 내포 합계·변경 전/후 출력·최대 방향 출력까지 활동지 코드 10줄 완벽 재현",
  "note": "",
  "code": "direction = [\"동\", \"서\", \"남\", \"북\"]\ntraffic = []\n\nfor i in range(4):\n    traffic.append(list(map(int, input().split())))\n\nbefore = [sum(x) for x in traffic]\nprint(\"변경 전:\", before, sum(before))\n\ntraffic[3][2] = int(input())\n\nafter = [sum(x) for x in traffic]\nprint(\"변경 후:\", after, sum(after))\n\nprint(direction[after.index(max(after))], \"방향 우선순위\")\n1-2:방향 이름과 교통량을 저장할 리스트를 만든다.\n3-4:네 방향의 좌회전·우회전·직진·유턴 교통량을 입력받는다.\n5-6:변경 전 방향별 교통량과 전체 교통량을 계산한다.\n7:북쪽 방향의 직진 교통량을 새로운 값으로 바꾼다.\n8-9:변경 후 교통량을 다시 계산한다.\n10:교통량이 가장 많은 방향을 출력한다."
 },
 "20706": {
  "name": "배수인",
  "cls": "2-07",
  "scores": [
   4,
   5,
   3,
   5
  ],
  "total": 17,
  "ev": "노드 수·부모/값 리스트, 부모 연결, while True 입력·종료 조건·부모로 올라가며 누적·총량 출력까지 전체 재현. 'p[2],[3] = 1,1'처럼 다중 대입에서 리스트명 누락(3곳)",
  "note": "",
  "code": "n = 9\np = [0] * 10\ne = [0] * 10\n\np[2], p[3] = 1, 1\np[4], p[5], p[6], p[7] = 2, 2, 2, 2\np[8], p[9] = 3, 3\n\nwhile True:\n    a, d = map(int, input(\"노드 번호와 발생량을 입력하세요 (종료는 0 0): \").split())\n\n    if a == 0:\n        break\n\n    while a > 0:\n        e[a] = e[a] + d\n        a = p[a]\n\nprint(\"전체 전자폐기물 총량:\", e[1])\n\n01: 전체 노드 개수(9개) 설정\n02: 부모 노드를 저장할 리스트 p 선언\n 03: 발생량을 누적할 리스트 e 선언 04: 2, 3번 노드의 부모를 1번으로 연결\n05: 4~7번 노드의 부모를 2번으로 연결\n06: 8, 9번 노드의 부모를 3번으로 연결\n07: 무한 반복문 시작\n08: 작업할 노드 번호(a)와 폐기량(d) 입력\n 09: 입력한 노드 번호가 0이면\n 10: 반복문 종료\n11: 루트 노드(1번)에 도달할 때까지 반복\n12: 현재 노드에 폐기량 누적 합산 13: 부모 노드로 이동하여 반복\n 14: 전체 누적 총량(1번 노드) 출력"
 },
 "20707": {
  "name": "서소이",
  "cls": "2-07",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·트리 저장·질의(result 저장)·while 갱신·천 단위 출력까지 활동지 코드 전체 재현. 마지막 'for x in range:'(result 누락) 1곳만 오류",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nresult = []\n\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        result.append(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n\nfor x in result:\n    print(f\"{x:,}\")\n수행할 작업 수 n을 입력받고, 부모 노드와 각 노드의 생산량을 저장할 리스트 p, e를 생성함.\n\n생산량 데이터를 입력받고, 각 노드의 부모 관계를 설정함. 생산량을 해당 지역과 상위 노드에 누적하여 저장함.\n\n\n이후 수행할 작업 수 q를 입력받고, 결과를 저장할 리스트를 생성함.\n\n작업 정보를 입력받고, a가 0이면 b번 노드의 생산량을 결과 리스트에 저장함.\na번 노드의 생산량을 b로 변경하고, 변경된 차이를 부모 노드로 올라가며 누적해 전체 생산량을 갱신함.\n\n저장된 결과를 천 단위 쉼표를 포함한 형태로 출력함."
 },
 "20708": {
  "name": "성예원",
  "cls": "2-07",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "float 입력 변환·부모 리스트·round 누적·조회/갱신·while 부모 이동·결과 출력까지 활동지 코드 26줄 완벽 재현. [실행 불가] 마지막 줄 'Print(res)' 대문자로 NameError",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ntp = [0.0] * 1000\nresults = []\n\nfor i in range(n):\n    a, b, c, d = map(float, input().split())\n    a, b, c = int(a), int(b), int(c)\n    p[b] = a\n    p[c] = b\n    tp[a] = round(tp[a] + d, 3)\n    tp[b] = round(tp[b] + d, 3)\n    tp[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(float, input().split())\n    a = int(a)\n    if a == 0:\n        b = int(b)\n        results.append(tp[b])\n    else:\n        c = round(b - tp[a], 3)\n        while a > 0:\n            tp[a] = round(tp[a] + c, 3)\n            a = p[a]\n\nfor res in results:\n    print(res)\n1. 측정소 개수 n 입력\n2~4. 부모 노드(p), TP수치(tp), 결과(results) 리스트 생성\n6~13. 반복문을 이용하여 n 개의 수질 정보를 입력받고 트리 구성\n7~10. 수질 정보 입력 후 부모-자식 관계(p) 저장\n11~13. 각 노드에 TP수치 누적하여 저장\n15. 작업횟수 q 입력\n16~26. q번 반복하여 수질 조회 및 실시간 갱신 수행\n17~18. 작업번호(a)와 대상 노드/수치(b) 입력\n19~21. a가 0이면 조회: b노드의 누적 총인을 results에 저장\n22~23. a가 0이 아니면 갱신: 새 수치와 기존 수치의 변동량(c) 계산\n24~26. 최상위 노드까지 거슬러 올라가며 변동량만큼 누적 갱신\n28~29. 모아둔 조회 결과 한번에 출력"
 },
 "20709": {
  "name": "윤수빈",
  "cls": "2-07",
  "scores": [
   2,
   3,
   2,
   2
  ],
  "total": 9,
  "ev": "입력·리스트 선언·for 입력·부모 저장 앞부분(8줄)만 작성. '[0]*0', 'range()' 등 값 비어 있음, p(b) 괄호 오류, 값 누적·질의 처리·while 갱신 누락",
  "note": "",
  "code": "n = int(input())\np = [0] * 10\ne = [0] * 10\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n01. 키보드로 입력받은 값을 정수로 변환해서 변수 n에 저장\n\n02. 트리에서 부모의 정보를 저장하기 위한 리스트 p 선언\n\n03. 트리에서 각 노드의 발생량을 저장하기 위한 리스트 e 선언\n\n05~11. 반복문을 이용하여 n개의 항목 정보 입력\n\n06. 전체, 구분, 항목 노드 번호와 발생량을 공백을 기준으로 입력\n\n07. 구분(b)이 전체(a)에 속한다는 것을 부모 노드로 표현\n\n08. 항목(c)이 구분(b)에 속한다는 것을 부모 노드로 표현\n\n09. 전체(a)의 발생량을 d만큼 누적하여 저장\n\n10. 구분(b)의 발생량을 d만큼 누적하여 저장\n\n11. 항목(c)의 발생량 d 저장\n\n13. 키보드로 입력받은 값을 정수로 변환해서 변수 q에 저장\n\n14~22. 반복문을 이용하여 q만큼 작업 진행\n\n15. 작업의 번호(a)와 노드 번호 또는 새 발생량(b) 입력\n\n16. 만약 작업 번호가 0번이라면 (b번 노드 출력)\n\n17. e[b]값 출력\n\n18. 만약 작업 번호가 0번이 아니라면 (a번 노드 발생량 갱신)\n\n19. 새 발생량(b)과 a번 노드의 기존 값의 차이 c 계산\n\n20~22. a번 노드부터 부모 노드를 따라 올라가며(1번 노드의 부모는 0이라 종료) 차이 c만큼 더해 발생량 갱신"
 },
 "20710": {
  "name": "윤인서",
  "cls": "2-07",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·트리 저장·조회 시 연도 노드 CPR 시행/미시행 비교 출력·while 갱신까지 활동지 코드 26줄 완벽 재현. [실행 불가] 15줄 'map(int(input()))'로 split 누락·괄호 오류, 변수명 'cpr-yes' 하이픈 사용",
  "note": "",
  "code": "n = int(input())\np = [0] * 11\ns = [0] * 11\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    s[a] += d\n    s[b] += d\n    s[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(s[b])\n        if 2 <= b <= 4:\n            cpr_yes = s[2 * b + 1]\n            cpr_no = s[2 * b + 2]\n            print(cpr_yes, cpr_no, cpr_yes - cpr_no)\n    else:\n        c = b - s[a]\n        while a > 0:\n            s[a] += c\n            a = p[a]\n\n01~03 노드 개수(n)를 입력받고, 부모 노드(p)와 생존 건수(s) 리스트를 초기화한다.\n05~11 n개의 생존 건수 데이터를 입력받아 트리 부모-자식 관계를 연결하고 상위 노드에 값을 누적한다.\n13~15 작업 횟수(q)만큼 반복하며 작업 번호(a)와 노드 번호 또는 수정할 값(b)을 입력받는다.\n16~21 a가 0이면 b번 노드의 생존 건수 합계(s[b])를 출력하고, 연도 노드(2~4번)인 경우 시행·미시행 건수와 생존 격차까지 함께 출력한다.\n22~26 a가 0이 아니면 a번 노드의 값을 b로 수정하고, 부모 노드를 따라 루트까지 합계를 실시간 갱신한다."
 },
 "20711": {
  "name": "이루미",
  "cls": "2-07",
  "scores": [
   3,
   5,
   3,
   5
  ],
  "total": 16,
  "ev": "입력·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 20줄 전체 재현. 두 번째 for문 안의 if/else/while 본문 들여쓰기가 모두 사라짐",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n01 단말 노드(거점) 개수(n) 입력\n02 부모 노드 저장 리스트(p) 초기화\n03 노드별 수거량 저장 리스트(e) 초기화\n04 n번 반복하여 거점 정보 입력\n05 시(a), 구(b), 거점(c), 수거량(d) 입력\n06 b구의 부모 노드를 a시로 기록\n07 c번 거점의 부모 노드를 b구로 기록\n08 a시 수거량에 d 누적 합산\n09 b구 수거량에 d 누적 합산\n10 c번 거점 수거량 d 저장\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n\n11 명령(조회/갱신) 횟수(q) 입력\n12 q번 반복하여 조회 및 갱신 수행\n13 명령 번호(a)와 대상 노드/변경 값(b) 입력\n14 명령 번호(a)가 0이면 (조회)\n15 b번 노드의 현재 수거량 출력\n16 명령 번호(a)가 0이 아니면 (갱신)\n17 변경 값(b)과 기존 값(e[a])의 차이(c) 계산\n18 루트 노드를 지날 때까지(a > 0) 반복\n19 현재 노드(a) 수거량에 차이(c) 누적\n20 부모 노드(p[a])로 이동"
 },
 "20712": {
  "name": "이아진",
  "cls": "2-07",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "한 줄 입력 리스트 x·인덱스 k 이동·슬라이싱 언패킹·트리 저장·조회/갱신까지 활동지 압축 코드 24줄 완벽 재현",
  "note": "",
  "code": "x = list(map(int, input().split()))\nn, k = x[0], 1\np, e = [0] * 9, [0] * 9\n\nfor i in range(n):\n    a, b, c, d = x[k:k+4]\n    k += 4\n    p[b], p[c] = a, b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq, k = x[k], k + 1\n\nfor i in range(q):\n    a, b = x[k:k+2]\n    k += 2\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\n\n01 | 입력값을 정수로 바꾸어 리스트 x에 저장\n02 | 장소 유형의 개수 n과 입력 위치 k 초기화\n03 | 부모 노드와 AED 설치 대수를 저장할 리스트 p, e 선언\n05 | 반복문으로 각 장소 유형의 AED 설치 정보 처리\n06 | 상위 노드 번호, 자식 노드 번호, AED 설치 대수 입력\n07 | 다음 입력 위치로 이동\n08 | 각 노드의 부모 노드 번호를 리스트 p에 저장\n09~11 | 각 장소 유형의 AED 설치 대수를 저장하고 상위 노드의 합계 계산\n13 | 조회 및 변경 횟수 q를 저장하고 입력 위치 이동\n15 | 반복문으로 조회 및 변경 작업 반복\n16 | 작업 구분 값과 대상 노드 번호 및 값을 입력\n17 | 다음 작업 위치로 이동\n18 | 작업 구분 값이 0인지 확인하여 조회 여부 판단\n19 | 해당 노드의 AED 설치 대수 출력\n20 | 0이 아니면 AED 설치 대수 변경 작업 수행\n21 | 새로운 AED 설치 대수와 기존 값의 차이 계산\n22~24 | 변경된 차이를 해당 노드부터 부모 노드까지 차례로 반영"
 },
 "20713": {
  "name": "이은서",
  "cls": "2-07",
  "scores": [
   2,
   5,
   4,
   4
  ],
  "total": 15,
  "ev": "지역명·부모·값 리스트, 질의 입력, 조회/갱신 분기, while로 부모 평균 재계산까지 재현. 조회부의 'if e[j] > e[b]:'와 print가 빠져 '= (name[j], round[j], 1)'로 미완성, 'k = p[b]'를 p[k]로 씀",
  "note": "",
  "code": "01 name = [\"\", \"전국\", \"대도시\", \"대도시이외\", \"서울\", \"광역시\", \"중소도시\", \"읍면지역\"]\n02 p = [0, 0, 1, 1, 2, 2, 3, 3]\n03 e = [0, 45.8, 52.4, 41.6, 66.3, 43.6, 44.8, 32.5]\n04\n05 q = int(input())\n06 for i in range(q):\n07    a, b, c = input().split()\n08    a, b, c = int(a), int(b), float(c)\n09    if a == 1:\n10        for j in range(2, 8):\n11            if e[j] > e[b]:\n12                print(name[j], e[j], round(e[j] - e[b], 1))\n13    else:\n14        e[b] = c\n15        k = p[b]\n16        while k > 0:\n17            e[k] = round((e[k * 2] + e[k * 2 + 1]) / 2, 1)\n18            k = p[k]\n\n01\n각 노드 번호(1~7번)에 해당하는 지역 이름을 저장하기 위한 리스트 name 선언\n02\n트리에서 부모의 정보를 저장하기 위한 리스트 p 선언\n03\n트리에서 각 노드의 사교육비(만 원)를 저장하기 위한 리스트 e 선언\n05\n키보드로 입력받은 값을 정수로 변환해서 변수 q에 저장\n06–18\n반복문을 이용하여 q만큼 작업 진행\n07–08\n작업 번호 a, 노드 번호 b, 변경할 값 c를 공백을 기준으로 입력\n09\n만약 작업 번호가 1번이라면 (b번 노드보다 사교육비가 높은 지역 출력)\n10–12\n2~7번 노드를 확인하며 b번 노드(전국 평균)보다 큰 지역의 이름, 사교육비, 평균과의 차이 출력\n13\n만약 작업 번호가 1번이 아니라면 (b번 노드 사교육비 갱신)\n14\nb번 노드의 사교육비를 c로 갱신\n15–16\n최상단 노드가 아니라면 반복하며 부모 노드로 이동\n17\nk번 노드의 두 자식 노드 평균을 계산해 k번 노드의 사교육비 갱신\n18\nk번 노드의 부모 노드로 이동"
 },
 "20714": {
  "name": "임정원",
  "cls": "2-07",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모·값 동시 입력, 역순 반복으로 상위 합산, 조회/갱신·while 부모 이동까지 활동지 코드 17줄 완벽 재현",
  "note": "",
  "code": "n = int(input())\np = [0] * (n + 1)\ne = [0] * (n + 1)\nfor i in range(1, n + 1):\n    p[i], e[i] = map(int, input().split())\n\nfor i in range(n, 1, -1):\n    e[p[i]] += e[i]\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n\n    if a == 0:\n        print(e[b])\n\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\n1~5:노드 개수와 각 노드의 부모 번호, 의료인력 수 입력\n6~7:하위 노드의 의료인력 수를 상위 노드에 합산\n8~10:작업 횟수와 조회 또는 변경할 노드 입력\n11~12:해당 노드의 의료인력 총인원 출력\n13~17:의료인력 수 변경 후 상위 노드의 합계 갱신"
 },
 "20715": {
  "name": "장채연",
  "cls": "2-07",
  "scores": [
   2,
   4,
   3,
   4
  ],
  "total": 13,
  "ev": "온도·식생지수 리스트, 중앙값 계산, 입력, 조건 표현식 출력 구조 재현. 리스트·입력 대입에 '=' 누락, sorted() 함수명 미완성('s  (lst)'), 출력에서 name 누락",
  "note": "",
  "code": "01 lst = [32.99, 34.70, 28.56, 30.01, 25.74, 28.65]\n02 ndvi = [0.150, 0.179, 0.390, 0.344, 0.479, 0.309]\n03\n04 lm = sum(sorted(lst)[2:4]) / 2\n05 nm = sum(sorted(ndvi)[2:4]) / 2\n06\n07 name, t, v = input(\"지역명 온도 식생지수 입력: \").split()\n08 print(name, \": 우선 검토 대상\" if float(t) >= lm and float(v) <= nm else \": 일반 분석 대상\")\n\n\n\n\n01~02: 기준값을 구하기 위한 기존 6개 지역의 온도와 식생지수 데이터 저장\n04~05: 기존 데이터를 크기순으로 나열해 각각의 중앙값(기준점) 계산\n07: 사용자가 띄어쓰기로 입력한 지역명, 온도, 식생지수를 차례대로 받아 저장\n08: 입력받은 온도가 기준 이상이고 식생지수가 기준 이하인지 판별해 최종 결과 출력"
 },
 "20716": {
  "name": "정미선",
  "cls": "2-07",
  "scores": [
   4,
   4,
   4,
   5
  ],
  "total": 17,
  "ev": "심박수 입력, if/elif/else 4단계 범위 판정·출력까지 활동지 코드 10줄 완벽 재현. [실행 불가] print를 모두 'Print'(대문자)로 써서 NameError",
  "note": "",
  "code": "01  h = int(input(\"평균 심박수: \"))\n02\n03  if h < 30 or h > 220:\n04      print(\"오류 의심\")\n05  elif 60 <= h <= 100:\n06      print(\"정상\")\n07  elif h < 60 and h >= 40 or 100 < h <= 120:\n08      print(\"주의\")\n09  else:\n10      print(\"확인 필요\")\n\n\n\n01: input()으로 사용자에게 평균 심박수를 입력받고, int()를 이용해 정수로 변환한다.\n03~04: 심박수가 30 미만이거나 220을 초과하면 측정 오류가 의심되는 값으로 판단하여 '오류 의심'을 출력한다.\n05~06: 심박수가 60 이상 100 이하이면 정상 범위로 판단하여 '정상'을 출력한다.\n07~08: 심박수가 40 이상 60 미만이거나 100 초과 120 이하이면 '주의'를 출력한다.\n09~10: 위 조건에 해당하지 않는 유효한 심박수는 '확인 필요'로 분류하여 출력한다.\n(숫자 없는 버전)\nh = int(input(\"평균 심박수: \"))\n\nif h < 30 or h > 220:\n  print(\"오류 의심\")\nelif 60 <= h <= 100:\n  print(\"정상\")\nelif h < 60 and h >= 40 or 100 < h <= 120:\n  print(\"주의\")\nelse:\n  print(\"확인 필요\")"
 },
 "20717": {
  "name": "정해린",
  "cls": "2-07",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모/값 리스트·입력·트리 저장·조회(round)/갱신·while 부모 이동까지 활동지 코드 31줄 완벽 재현",
  "note": "",
  "code": "01  p = [0] * 10\n02  e = [0] * 10\n03\n04  n = int(input())\n05\n06  for i in range(n):\n07      a, b, c, d = input().split()\n08      a, b, c = int(a), int(b), int(c)\n09      d = float(d)\n10\n11      p[b] = a\n12      p[c] = b\n13      e[a] += d\n14      e[b] += d\n15      e[c] = d\n16\n17  q = int(input())\n18\n19  for i in range(q):\n20      a, b = input().split()\n21      a = int(a)\n22\n23      if a == 0:\n24          print(round(e[int(b)], 2))\n25      else:\n26          b = float(b)\n27          c = b - e[a]\n28\n29          while a > 0:\n30              e[a] += c\n31              a = p[a]\n1~2번 부모 노드와 발생량을 저장할 리스트를 만든다.\n4번 초기 데이터 개수를 입력받는다.\n6~9번 품목별 노드 번호와 발생량을 입력받는다.\n11~12번 각 노드의 부모 노드를 저장한다.\n13~14번 하위 노드의 발생량을 상위 노드에 더한다.\n15번 하위 노드의 발생량을 저장한다.\n17번 명령 개수를 입력받는다.\n19~21번 명령을 입력받고 종류를 확인한다.\n23~24번 조회 명령이면 해당 노드의 발생량을 출력한다.\n25~26번 변경 명령이면 새로운 발생량을 입력받는다.\n27번 기존 값과 새로운 값의 차이를 구한다.\n29~31번 발생량 차이를 부모 노드까지 반영한다."
 },
 "20718": {
  "name": "조강희",
  "cls": "2-07",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "I=input 별칭·딕셔너리 D·[0]*n 반복·조회 시 가중평균 계산·조건 표현식 출력·수정 처리까지 활동지 압축 코드 10줄 완벽 재현(세미콜론·0/O 구분까지 표기)",
  "note": "",
  "code": "I=input;D={}\nfor _ in[0]*int(I()):\n p,m,l,r,a=I().split();D[l]=m,float(r),float(a)\nfor _ in[0]*int(I()):\n t=I().split();o=s=0\n if t[0]=='0':\n  for m,r,a in D.values():\n   if t[1]=='1'or m==t[1]:o+=r*a;s+=a\n  print(f'{o/s:.2f}'if s else'0.00')\n else:D[t[0]]=D[t[0]][0],float(t[1]),float(t[2])\n프로그램은 단말노드별 공공공간 비율과 지역 면적 정보를 저장한다.\n조회 요청이 들어오면 해당 부모노드에 속한 모든 단말노드의 (공공공간 비율 × 지역 면적) 값을 합산하고, 이를 전체 지역 면적의 합으로 나누어 면적 가중 평균 개방 비율을 계산한다. 최상위 부모노드(1번)를 조회할 경우에는 모든 단말노드를 대상으로 동일한 계산을 수행한다.\n수정 요청이 들어오면 해당 단말노드의 공공공간 비율과 지역 면적 정보를 새로운 값으로 갱신하며, 이후 조회 시 수정된 정보가 계산에 반영된다."
 },
 "20719": {
  "name": "조민지",
  "cls": "2-07",
  "scores": [
   3,
   3,
   3,
   3
  ],
  "total": 12,
  "ev": "의약품 튜플 리스트·안내 출력·found 플래그 등 대부분의 줄을 재현. 두 번째 for문과 'if choice == number:' 조건 누락, choice에 input 누락, for 콜론 누락, 'if found = False' 비교 오류, 반복/조건 본문 들여쓰기 없음",
  "note": "",
  "code": "medicines = [\n    (\"1\", \"가루약\", \"포장지를 개봉하지 않고 그대로 배출한다.\"),\n    (\"2\", \"알약\", \"지역별 배출 지침에 따라 포장 상태를 확인하여 배출한다.\"),\n    (\"3\", \"물약·시럽\", \"마개를 단단히 닫고 새지 않도록 밀봉하여 배출한다.\"),\n    (\"4\", \"연고\", \"마개를 닫고 용기째 배출한다.\"),\n    (\"5\", \"안약\", \"용기를 임의로 분해하지 않고 지역별 지침에 따라 배출한다.\")\n]\n\nprint(\"===== 폐의약품 분리배출 안내 =====\")\nprint(\"배출할 의약품 종류를 선택하세요.\")\n\nfor number, name, guide in medicines:\n    print(number + \". \" + name)\n\nchoice = input(\"번호 입력: \")\n\nfound = False\n\nfor number, name, guide in medicines:\n    if choice == number:\n        print(\"\\n선택한 의약품:\", name)\n        print(\"올바른 배출 방법:\", guide)\n        print(\"배출 장소: 지자체에서 지정한 폐의약품 수거함\")\n        print(\"주의: 일반 쓰레기나 하수구에 버리지 마세요.\")\n        found = True\n        break\n\nif found == False:\n    print(\"잘못된 입력입니다. 1~5 사이의 번호를 입력하세요.\")\n\nprint(\"\\n지역별 세부 배출 지침을 확인하세요.\")\n\n1. 리스트를 활용하여 가루약, 알약, 물약, 연고, 안약의 종류와 배출 방법을 저장하였다.\n2. for 반복문을 사용하여 의약품 종류를 화면에 출력하고, 사용자가 입력한 번호와 일치하는 항목을 탐색하도록 하였다.\n3. if 조건문으로 입력한 번호와 의약품 번호가 일치하는지 확인하고, 해당 의약품의 올바른 배출 방법과 수거 장소를 출력하도록 설계하였다.\n4. found 변수를 활용하여 일치하는 항목이 없을 경우 잘못된 입력이라는 안내문을 출력하도록 하였다."
 },
 "20720": {
  "name": "최아람",
  "cls": "2-07",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "9개 값 입력·지역별 합계·전체 합계, r/t 중첩 if/elif/else로 해당 노드 갱신·차이 반영·결과 출력까지 활동지 코드 42줄 전체 재현(뒷면 포함). 첫 줄 map(int(...)) 괄호 위치 오류",
  "note": "",
  "code": "a, b, c, d, e, f, g, h, i = map(int, input().split())\n\nn1 = a+b+c\nn2 = d+e+f\nn3 = g+h+i\nn0 = n1+n2+n3\n\nr, t, x = map(int, input().split())\n\nif r == 1:\n    if t == 1:\n        v = x-a\n        a = x\n    elif t == 2:\n        v = x-b\n        b = x\n    else:\n        v = x-c\n        c = x\n    n1 += v\n\nelif r == 2:\n    if t == 1:\n        v = x-d\n        d = x\n    elif t == 2:\n        v = x-e\n        e = x\n    else:\n        v = x-f\n        f = x\n    n2 += v\n\nelse:\n    if t == 1:\n        v = x-g\n        g = x\n    elif t == 2:\n        v = x-h\n        h = x\n    else:\n        v = x-i\n        i = x\n    n3 += v\n\nn0 += v\n\nprint(n0)\nprint(n1, n2, n3)\n\n\n1행: 초기 데이터 입력\n9개의 감염병 발생 건수를 입력받아 각 변수에 저장한다.\n3~6행: 트리의 초기 합계 계산\n각 지역의 감염병 발생 건수를 더해 지역별 부모 노드의 값을 계산하고, 세 지역의 합계를 더해 최상위 부모 노드의 값을 구한다.\n8행: 변경할 데이터 입력\n변경할 지역 번호, 감염병 번호, 새로운 발생 건수를 입력받는다.\n10~19행: 대구 데이터 갱신\n감염병 번호에 따라 대구의 해당 자식 노드를 수정하고, 기존 값과 새로운 값의 차이만큼 대구 부모 노드의 합계를 갱신한다.\n21~32행: 경북 데이터 갱신\n감염병 번호에 따라 경북의 해당 자식 노드를 수정하고, 발생 건수의 차이만큼 경북 부모 노드의 합계를 갱신한다.\n34~45행: 경남 데이터 갱신\n감염병 번호에 따라 경남의 해당 자식 노드를 수정하고, 발생 건수의 차이만큼 경남 부모 노드의 합계를 갱신한다.\n42행: 최상위 노드 갱신\n자식 노드의 변경량을 최상위 부모 노드에도 더하여 전체 발생 건수를 갱신한다.\n44~45행: 최종 결과 출력\n갱신된 전체 발생 건수와 세 지역의 발생 건수 합계를 출력한다."
 },
 "20801": {
  "name": "구나경",
  "cls": "2-08",
  "scores": [
   3,
   5,
   5,
   4
  ],
  "total": 17,
  "ev": "한 줄 입력 분할·7개씩 슬라이싱 반복·마찰력/필기감/내구성 점수 계산·가중 합산·while 부모 최댓값 갱신·출력까지 활동지 압축 코드 12줄 재현. while 안 다중 대입에서 ', c' 누락(c가 갱신되지 않아 무한 반복)",
  "note": "",
  "code": "p, e = [0]*9, [0]*9\nd = input().split()\nfor i in range(1, len(d), 7):\n    a, b, c = map(int, d[i:i+3])\n    u, m, h, k = map(float, d[i+3:i+7])\n    p[b], p[c], f = a, b, u * m * 3\n    s1 = 90 if 1 <= f <= 2.5 else 60\n    s2 = min(100, 0.5 * h / (k * 564840))\n    e[c] = round(0.7 * s1 + 0.3 * s2, 1)\n    while c > 0:\n        e[p[c]], c = max(e[p[c]], e[c]), p[c]\nprint(e[1:])\n\n1.부모 노드 리스트와 점수 리스트를 0으로 초기화해 생성한다.\n\n2.가로 한 줄로 입력된 전체 데이터를 공백 기준으로 분리해 리스트에 저장한다.\n\n3.첫 번째 개수를 제외하고 1번 인덱스부터 7개씩 끊어 반복한다.\n\n4각 조합의 앞 3개 값을 정수로 변환한다.\n\n5.각 조합의 뒤 4개 값을 실수로 변환한다.\n6.부모-자식 노드를 연결하고 마찰력을 계산한다.\n\n7.마찰력이 적정 범위면 필기감 점수 90점, 아니면 60점을 부여한다.\n\n8.Archard 마모 공식으로 예상 수명을 계산해 내구성 점수로 환산한다.\n\n9.필기감(0.7)과 내구성(0.3) 가중치를 합산해 현재 팁 노드에 저장한다.\n\n10~11.부모 노드를 타고 올라가며 고분자 계열별 전체 최고 점수를 갱신한다.\n\n12.1~8번 노드의 최종 점수를 출력한다."
 },
 "20802": {
  "name": "김민예",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "부모/실적 리스트·다중 대입 누적·조회/갱신·한 줄 while·제너레이터 부족 월 출력까지 활동지 압축 코드 11줄 재현. 마지막 print의 닫는 괄호 1개 누락",
  "note": "",
  "code": "01  p, e = [0]*16, [0]*16\n02  for _ in range(int(input())):\n03      a, b, c, d = map(int, input().split())\n04      p[b], p[c], e[c], e[a], e[b] = a, b, d, e[a]+d, e[b]+d\n05  for _ in range(int(input())):\n06      a, b = map(int, input().split())\n07      if a == 0: print(e[b])\n08      else:\n09          c = b - e[a]\n10          while a: e[a] += c; a = p[a]\n11  print(*(f\"{i-3}월 부족: {e[i]}\" for i in range(4, 16) if e[i] < 210000), sep=\"\\n\")\n\n\n01      부모(p)·실적(e) 리스트 초기화\n\n02-04   12개월 부모 연결 및 월·반기·전체 실적 누적 저장\n\n05-06   5회 반복하며 작업 번호(a)와 값(b) 입력\n\n07      a가 0이면 b번 노드 실적 출력\n08-10   0이 아니면 변화량(c) 계산 후 상위 노드까지 누적 갱신\n\n11      21만 건 미만 부족 월과 실적 출력"
 },
 "20803": {
  "name": "김민현",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "부모/수거량 리스트·입력 반복·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 16줄을 오류 없이 완벽 재현. [실행 불가] 두 번째 입력 'input(), split()'에서 마침표 대신 쉼표",
  "note": "",
  "code": "p, e = [0] * 100, [0] * 100\nfor _ in range(int(input())):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c] = a, b\n    e[a] += d\n    e[b] += d\n    e[c] = d\nfor _ in range(int(input())):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\n\n1.부모 노드 번호를 저장할 리스트 p와 폐건전지 수거량을 저장할 리스트 e 선언\n\n\n2.입력받은 지자체 수만큼 반복하며 광역(a), 권역(b), 지자체(c), 수거량(d) 입력\n3.부모-자식 노드 연결 관계를 p에 저장\n4.최상위(a), 권역(b), 개별 지자체(c) 노드에 폐건전지 수거량(d) 누적 저장\n\n\n5.조회·갱신 작업 횟수만큼 반복하며 작업 번호 a와 값 b 입력\n6.a가 0이면 b번 노드의 총수거량 출력\n7.a가 0이 아니면 기존 수거량과의 차이(c)를 계산해 부모 노드를 따라 최상위 노드까지 수거량 실시간 갱신"
 },
 "20804": {
  "name": "김서윤",
  "cls": "2-08",
  "scores": [
   3,
   5,
   5,
   4
  ],
  "total": 17,
  "ev": "입력·리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 22줄 전체 재현. 부모 저장을 p[b]=a, p[c]=b 대신 p[a]=b, p[b]=c로 뒤바꿔 씀",
  "note": "",
  "code": "[1]  n = int(input())\n[2]  p = [0] * 20\n[3]  e = [0] * 20\n[4]\n[5]  for i in range(n):\n[6]      a, b, c, d = map(int, input().split())\n[7]      p[b] = a\n[8]      p[c] = b\n[9]      e[a] += d\n[10]     e[b] += d\n[11]     e[c] = d\n[12]\n[13] q = int(input())\n[14] for i in range(q):\n[15]     a, b = map(int, input().split())\n[16]     if a == 0:\n[17]         print(e[b])\n[18]     else:\n[19]         c = b - e[a]\n[20]         while a > 0:\n[21]             e[a] += c\n[22]             a = p[a]\n\n[1] 입력 줄 수 n 받기\n[2~3] 부모 번호 p, 노드 값 e 리스트 만들기\n[5~6] n번 반복하며 루트 a, 도시 b, 산업 c, 발생량 d 입력\n[7~8] 부모 저장: 도시의 부모는 루트, 산업의 부모는 도시\n[9~11] 값 저장: 루트와 도시에는 발생량을 더하고, 산업(말단)에는 그대로 저장\n[13~14] 명령 개수 q를 받아 q번 반복\n[15] 명령 a, b 입력 (a가 0이면 조회, 아니면 변경)\n[16~17] 조회: 노드 b의 값 출력\n[19] 변경: 차이 = 새 값 − 기존 값\n[20~22] 말단에서 루트까지 올라가며 차이를 더함"
 },
 "20805": {
  "name": "김소윤",
  "cls": "2-08",
  "scores": [
   2,
   4,
   3,
   3
  ],
  "total": 12,
  "ev": "점수/소재 리스트, 노드 점수 입력, 가중치 입력·합계, 명령 반복과 조회/갱신 분기, 가중합 재계산 골격 재현. 'a, b ='·print 인자·zip 인자가 비어 있음, input().split() 누락, max 대신 M() 사용, 대입 '=' 누락",
  "note": "",
  "code": "e, M = [0.0] * 14, [\"TPU\", \"PC\", \"Silicone\"]\nfor _ in range(int(input())): n, _, s = input().split(); e[int(n)] = float(s)\nw = list(map(float, input().split())); S = sum(w)\nfor j in range(int(input()) + 1):\n    if j > 0:\n        a, b = map(float, input().split())\n        if a == 0: print(f\"결과: {M[e[2:5].index(e[1])]} ({e[1]:.2f}점)\")\n        else: e[int(a)] = b\n    for i, c in zip((2,3,4), (5,8,11)): e[i] = (e[c]*w[0]+e[c+1]*w[1]+e[c+2]*w[2])/S\n    e[1] = max(e[2:5])\n\n01:점수 리스트(e)와 소재 이름 리스트(M) 초기화\n02:노드 번호와 초기 점수를 입력받아 저장\n03:3개 평가 항목의 가중치를 입력받고 총합(S) 계산\n04:'명령 횟수 + 1'만큼 반복문 실행\n05~06:두 번째 루프부터 명령 번호(a)와 갱신할 값(b) 입력\n07~08:a가 0이면 최종 추천 결과 출력, 아니면 해당 자식 노드의 점수 갱신\n09:가중합 공식을 적용하여 중간 부모 노드(2~4번) 점수 재계산\n10:중간 부모 노드 중 최댓값을 최상단 루트 노드에 저장"
 },
 "20806": {
  "name": "박민서",
  "cls": "2-08",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모 리스트·입력 저장·역순 반복 상위 합산·조회/갱신·while 부모 이동까지 활동지 코드 17줄 완벽 재현",
  "note": "",
  "code": "p = [0, 0, 1, 1, 2, 2, 3, 3, 3]\ne = [0] * 9\nfor _ in range(int(input())):\n    u, v, val = map(int, input().split())\n    e[v] = val\nfor i in range(8, 0, -1):\n    if p[i] > 0:\n        e[p[i]] += e[i]\nfor _ in range(int(input())):\n    q, v = map(int, input().split())\n    if q == 0:\n        print(e[v])\n    else:\n        d = v - e[q]\n        while q > 0:\n            e[q] += d\n            q = p[q]\n\np = [0, 0, 1, 1, 2, 2, 3, 3, 3]\n# ↳ 각 노드의 부모 노드 번호를 저장하는 리스트 (인덱스 = 노드 번호, 값 = 부모 번호)\n\ne = [0] * 9\n# ↳ 각 노드의 당류(g) 합계를 저장할 리스트 (0번~8번 노드 공간을 0으로 초기화)\n\nfor _ in range(int(input())):\n# ↳ 입력할 식품 데이터의 총 개수만큼 반복문 실행\n\n    u, v, val = map(int, input().split())\n    # ↳ 한 줄에서 [부모노드(u), 자식노드(v), 당류값(val)]을 공백으로 구분해 각각 정수로 입력받음\n\n    e[v] = val\n    # ↳ 자식 노드(식품 번호 v)의 당류 저장 공간에 입력받은 당류 값(val)을 저장\n\nfor i in range(8, 0, -1):\n    # ↳ 가장 말단인 8번 노드부터 최상위 1번 노드까지 거꾸로(역순으로) 반복문 실행\n\n    if p[i] > 0:\n    # ↳ 현재 노드에 부모 노드가 존재한다면(루트인 1번 노드는 제외) 아래 코드 실행\n\n        e[p[i]] += e[i]\n        # ↳ 하위 노드의 당류 값을 상위 부모 노드의 당류 값에 더해서 누적 (자동 합산)\n\nfor _ in range(int(input())):\n    # ↳ 실행할 질의(조회 및 갱신) 명령어의 총 개수만큼 반복문 실행\n\n    q, v = map(int, input().split())\n    # ↳ 명령어 종류(q)와 대상 노드 또는 갱신값을 공백으로 구분해 입력받음\n\n    if q == 0:\n    # ↳ 만약 q가 0이라면 값을 조회하는 명령어인지 확인\n\n        print(e[v])\n        # ↳ q가 0일 때, v번 노드에 저장된 당류 합계 값을 화면에 출력\n\n    else:\n    # ↳ q가 0이 아니라면(즉, 0이 아닌 숫자가 들어오면 당류를 수정하는 갱신 명령어)\n\n        d = v - e[q]\n        # ↳ 기존 당류 값과 새로 바뀔 당류 값의 차이(변화량 d)를 계산\n\n        while q > 0:\n        # ↳ 현재 노드부터 최상위 루트 노드까지 거슬러 올라가며 상위 부모 노드들을 수정하기 위한 반복문\n\n            e[q] += d\n            # ↳ 현재 노드의 당류 값에 계산된 차이(d)를 반영하여 업데이트\n\n            q = p[q]\n            # ↳ q를 현재 노드의 부모 노드 번호로 바꾸어 위쪽 계층(부모)으로 한 단계 이동"
 },
 "20807": {
  "name": "박솔아",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·트리 저장·리스트 data로 작업 입력·조회/갱신(diff)·while 부모 이동까지 활동지 코드 21줄 재현. 'print e[data[1]]' 괄호 누락, data 줄 들여쓰기 어긋남",
  "note": "",
  "code": "코\n\nn = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    data = list(map(int, input().split()))\n    if data[0] == 0:\n        print(e[data[1]])\n    else:\n        a, b = data[1], data[2]\n        diff = b - e[a]\n        while a > 0:\n            e[a] += diff\n            a = p[a]\n데이터 개수 n을 입력받고, 부모 노드 저장 리스트 p와 재활용량 저장 리스트 e를 0으로 초기화함.\n\n\nn번 반복하며 [상위, 중간, 하위, 재활용량]을 받아 부모 노드 연결(p[b]=a, p[c]=b)을 설정하고, 상위 및 중간 노드에는 누적합을, 하위 노드에는 값을 저장함.\n\n\n작업 개수 q를 입력받은 후, q번 반복하며 작업 명령어 데이터를 리스트 형태로 입력받음.\n\n작업 번호가 0인 경우(data[0] == 0), 지정된 노드의 재활용량(e[data[1]])을 즉시 출력함.\n\n작업 번호가 1인 경우, 변경 차이값(diff)을 구한 뒤 while문으로 루트 노드까지 부모(p[a])를 따라 올라가며 상위 노드 데이터를 연쇄적으로 누적 갱신함."
 },
 "20808": {
  "name": "박솔희",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·부모 저장·while로 조상 누적, 질의 parts 리스트·조회 결과 저장·갱신 후 부모 반영·join 출력까지 활동지 코드 29줄 전체 재현(뒷면 포함). [실행 불가] 'curr:a', 'q:int(input())' 등 대입 '='를 ':'로 표기",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor _ in range(n):\n    a, b, c = map(int, input().split())\n    p[b] = a\n    e[b] = c\n\n    curr = a\n    while curr > 0:\n        e[curr] += c\n        curr = p[curr]\n\nq = int(input())\nresults = []\n\nfor _ in range(q):\n    parts = list(map(int, input().split()))\n    query_type = parts[0]\n\n    if query_type == 0:\n        target = parts[1]\n        results.append(str(e[target]))\n    else:\n        target = parts[1]\n        value = parts[2]\n\n        c = value - e[target]\n        e[target] = value\n\n        curr = p[target]\n        while curr > 0:\n            e[curr] += c\n            curr = p[curr]\n\nprint(\"/n\".join(results))\n\n1 n: 입력받을 초기 데이터 개수\n2 p: 부모 노드 번호를 저장할 배열 (p[자식] = 부모)\n3 e: 노드별 AED 대수(총합)를 저장할 배열\n\n4 ~ 7  한 줄을 읽어와서 공백으로 쪼갠 뒤, 부모(a), 자식(b), 초기 대수(c)를 각각 정수로 변환\n자식 노드 b의 부모가 a라고 배열 p에 기록\n자식 노드 b 자체의 초기 AED 대수를 배열 e에 저장\n8 ~ 11 최상단 루트(0번)에 도달할 때까지 조상 노드들을 타고 올라가는 반복문\n거쳐 지나가는 조상 노드(curr)들의 AED 총합에 방금 추가된 대수 c를 누적\n탐색 위치(curr)를 현재 노드의 부모로 바꿈\n12 앞으로 실행할 쿼리(명령)의 총 개수 q를 정수로 입력받음\n13 조회(0) 결과들을 순서대로 모아둘 빈 리스트 만듦\n14 ~ 16 쿼리 한 줄을 읽어와서 공백 기준 정수 리스트(parts)로 변환 리스트의 첫 번째 값으로 명령의 종류(조회 0 또는 변경 1)를 확인\n17 ~ 19 명령 타입이 0(조회)일 때\n조회할 대상 노드 번호를 target에 저장 해당 노드의 AED 대수를 가져와서 문자열로 바꾼 뒤 results 리스트에 저장\n20 ~ 22 명령 타입이 0이 아닐 때\n값이 바뀔 대상 노드 번호를 target에 저장 새로 변경될 목표 AED 대수를 value에 저장\n23 새 값과 기존 값의 차이(변화량)를 계산하여 c에 저장\n24 대상 노드의 값을 새로운 값(value)으로 직접 덮어씀\n25 내 부모 노드부터 위로 올라갈 준비\n26 ~ 28 조상들의 누적 총합에 전체 변화량 c만큼만 똑같이 더해줌 탐색 위치를 한 단계 위 부모로 바꿈\n29 리스트에 모아둔 모든 조회 결과들을 줄바꿈(\\n) 기준으로 묶어서 화면에 한 번에 출력"
 },
 "20809": {
  "name": "박채윤",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "세미콜론으로 이은 압축 입력·트리 저장·권역/전국 누적, 작업 종류별 출력·변화량 while 갱신까지 활동지 코드 10줄 완벽 재현. [실행 불가] 3줄 'split()):' 뒤 세미콜론 대신 콜론으로 SyntaxError",
  "note": "",
  "code": "n=int(input());p=[0]*25;e=[0]*25\nfor _ in range(n):\n          _,a,b,c=map(int,input().split());p[b]=a;e[b]=c;e[a]+=c;e[1]+=c\nfor _ in range(int(input())):\n    t,a,b,c=map(int,input().split())\n    if t==2:\n        print(e[b]);d=c-e[b]\n        while b:e[b]+=d;b=p[b]\n        print(c)\n    else:print(e[b])\n\n\n(3행 띄어쓰기가 안되어 이미지도 함께 첨부합니다.)\n\n1. 단말 노드의 개수를 입력받고, 각 노드의 부모 번호를 저장할 리스트와 사례수 및 합계를 저장할 리스트를 생성한다.\n2. 입력받은 단말 노드의 개수만큼 반복하며 부모 노드 번호, 단말 노드 번호, 사례수를 입력받는다.\n3. 입력받은 부모 노드 번호를 해당 노드의 부모 정보로 저장하고, 단말 노드에 해당 지역의 사례수를 저장한다.\n4. 입력받은 사례수를 해당 지역이 속한 권역의 합계와 최상위 노드인 전국의 합계에 각각 더한다.\n5. 이후 수행할 작업의 개수를 입력받고, 입력된 횟수만큼 작업을 반복한다.\n6. 작업 종류, 부모 노드 번호, 대상 노드 번호, 변경할 사례수를 입력받는다.\n7. 작업 종류가 2인 경우, 대상 노드에 저장된 변경 전 사례수를 출력한다.\n8. 변경할 사례수에서 기존 사례수를 빼서 변화량을 계산한다.\n9. 대상 노드부터 부모 노드를 따라 올라가며 각 노드에 변화량을 더해 해당 권역과 전국의 합계를 갱신한다. 부모 노드 번호가 0이 되면 반복을 종료한다.\n10. 변경 후 사례수를 출력한다.\n11. 작업 종류가 3인 경우, 지정한 노드에 저장된 사례수 또는 합계를 출력하여 조회를 수행한다."
 },
 "20810": {
  "name": "박하은",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "시도·흡연율 입력, 평균 계산, for+if로 평균 이상 지역 append, 결과 출력까지 활동지 코드 9줄 완벽 재현. [실행 불가] 5줄 for문 끝을 콜론 대신 세미콜론으로 씀",
  "note": "",
  "code": "sido = input(\"시·도 이름: \").split()\nrate = list(map(float, input(\"흡연율: \").split()))\navg = sum(rate) / len(rate)\nfirst = []\nfor i in range(len(sido)):\n    if rate[i] >= avg:\n        first.append(sido[i])\nprint(\"평균:\", round(avg, 1))\nprint(\"금연 교육 우선 지역:\", first)\n시·도 이름을 입력받아 리스트로 저장\n\n흡연율을 입력받아 소수 리스트로 저장\n\n흡연율의 평균 구하기\n\n우선 지역을 담을 빈 리스트 만들기\n\n시·도를 하나씩 반복해서 확인\n\n흡연율이 평균 이상인지 확인\n\n맞으면 지역 이름을 리스트에 추가\n\n평균 출력\n\n우선 지역 출력"
 },
 "20811": {
  "name": "신제의",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "부모/발전량 리스트·입력 반복·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 16줄을 오류 없이 완벽 재현. [실행 불가] 2줄 for문 끝을 콜론 대신 '='로 씀",
  "note": "",
  "code": "p, e = [0] * 100, [0] * 100\nfor _ in range(int(input())):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c] = a, b\n    e[a] += d\n    e[b] += d\n    e[c] = d\nfor _ in range(int(input())):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\n01 부모 노드 리스트 p와 누적 발전량 리스트 e를 동시에 초기화\n02 입력받은 패널 데이터 개수만큼 반복문 실행\n03 전체발전소(a), 구역(b), 패널(c), 발전량(d)을 공백 기준으로 입력받음\n04 b의 부모가 a, c의 부모가 b임을 p에 한 번에 저장\n05~07 패널 발전량(d)을 전체(a)와 구역(b)에 누적 합산하고 패널(c)에 저장\n08 입력받은 조회·갱신 작업 개수만큼 반복문 실행\n09 작업 구분(a)과 대상 노드 또는 새 발전량(b)을 입력받음\n10~11 a가 0이면 b번 노드의 현재 발전량(e[b])을 출력\n12~13 a가 0이 아니면 a번 패널의 발전량 변화량(c = 새 값 - 기존 값)을 계산\n14~16 최상단 노드에 도달할 때까지 반복하며 발전량을 c만큼 갱신하고 부모 노드(p[a])로 이동"
 },
 "20812": {
  "name": "오수빈",
  "cls": "2-08",
  "scores": [
   2,
   5,
   3,
   4
  ],
  "total": 14,
  "ev": "리스트 선언·입력·트리 연결·대체량 계산·while 부모 갱신·감축률·결과 출력 17줄 흐름 재현. 11줄 다중 대입 구분 ','를 '+'로 씀, 13줄 min_r 대신 r 사용(무한 반복), 16줄 탄소배출량 식을 red[1]로 대체, 17줄 조건 표현식 순서 오류",
  "note": "",
  "code": "n = int(input())\np, beef, cult = [0] * 100, [0.0] * 100, [0.0] * 100\nfor i in range(n):\n    a, b, c = map(float, input().split())\n    a, b = int(a), int(b)\n    p[a], p[b], beef[1], beef[a], beef[b] = 1, a, beef[1] + c, beef[a] + c, c\n\nr, min_r = int(input()), 0\nfor i in range(8, 8 + n):\n    diff, curr = beef[i] * (r / 100), i\n    while curr > 0:\n        beef[curr], cult[curr], curr = beef[curr] - diff, cult[curr] + diff, p[curr]\n\nred = (r * 85.48) / 99.48\nwhile (min_r * 85.48) / 99.48 < 28: min_r += 1\nprint(\"대체 후 총 소고기 소비량:\", round(beef[1], 2))\nprint(\"대체 후 총 배양육 소비량:\", round(cult[1], 2))\nprint(\"대체 후 총 탄소배출량:\", round(beef[1] * 99.48 + cult[1] * 14, 1))\nprint(f\"목표 달성(감축률: {round(red, 1)} %)\" if red >= 28 else f\"목표 미달(감축률: {round(red, 1)} %) / 최소 대체비율: {min_r} %\")\n\n1~2 국가 수(n) 입력 및 부모(p), 소고기(beef), 배양육(cult) 리스트 선언\n\n3~6 대륙(a), 국가(b), 소고기 소비량(c)을 입력받아 트리 연결 및 상위 노드에 합계 누적\n\n7 배양육 대체 비율(r) 입력 및 목표 미달 시 최소 대체 비율을 찾기 위한 변수(min_r)를 0으로 초기화\n\n8~11 국가별 대체량(diff)을 계산해 while 문으로 부모 노드까지 소고기·배양육 소비량 갱신\n\n12~13 현재 탄소 감축률(red) 계산 및 목표(28%) 달성을 위한 최소 대체 비율(min_r) 탐색\n\n14~17 대체 후 총 소고기·배양육 소비량, 총 탄소배출량, 목표 달성 여부(미달 시 최소 비율) 출력"
 },
 "20813": {
  "name": "이다은",
  "cls": "2-08",
  "scores": [
   3,
   5,
   4,
   4
  ],
  "total": 16,
  "ev": "입력·트리 저장·작업/노드/값 입력·조회/갱신(diff)·while 부모 이동까지 활동지 코드 20줄 재현. 두 번째 반복을 range(q) 대신 range(n)으로 씀, if 콜론 누락",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    work, node, val = map(int, input().split())\n    if work == 1:\n        print(e[node])\n    else:\n        diff = val - e[node]\n        while node > 0:\n            e[node] += diff\n            node = p[node]\n01 입력받은 값을 정수로 변환해서 변수 n에 저장\n02 트리에서 부모의 정보를 저장하기 위한 리스트 p 선언\n03 트리에서 각 노드의 태양광 발전량을 저장하기 위한 리스트 e 선언\n\n05 반복문을 이용하여 n개의 데이터를 입력받음\n06 대구시, 구·군 번호, 세부구분 번호, 발전량을 공백을 기준으로 입력\n07 b번 구·군의 부모 노드를 a(대구시)로 설정\n08 c번 세부구분의 부모 노드를 b(구·군)로 설정\n09 a번 대구시의 발전량을 d만큼 누적하여 저장\n10 b번 구·군의 발전량을 d만큼 누적하여 저장\n11 c번 세부구분의 발전량 d 저장\n\n13 입력받은 값을 정수로 변환해서 변수 q에 저장\n14 반복문을 이용하여 q만큼 작업 진행\n15 작업 번호(work), 대상 노드(node), 값(val)을 공백을 기준으로 입력\n16 만약 작업 번호가 1이라면 (발전량 조회)\n17 node번 노드의 발전량 e[node] 출력\n18 작업 번호가 1이 아니라면 (발전량 갱신)\n19 새로운 값과 기존 값의 차이인 diff 계산\n20 최상단 루트 노드까지 거슬러 올라가며 반복하는 while문 시작\n21 각 부모 노드에 차이(diff)만큼 누적하여 값 갱신\n22 상위 부모 노드로 이동하기 위해 p[node] 값을 node에 할당"
 },
 "20814": {
  "name": "이상은",
  "cls": "2-08",
  "scores": [
   2,
   5,
   4,
   4
  ],
  "total": 15,
  "ev": "입력·부모/점수 리스트·점수 저장·부모 합산·명령 반복·지역 조회/건축물 갱신 18줄 흐름 재현. 'e = [0]*0'(크기 9 누락), 부모 저장을 p[b]=a 대신 p[a]=b로 뒤바꿈, if/else 콜론 누락",
  "note": "",
  "code": "n = int(input())\np = [-1] * 9\ne = [0] * 9\n\nfor i in range(n):\n    a, b, c = input().split()\n    a, b = int(a), int(b)\n    e[b] = float(c)\n    p[b] = a\n    e[a] += e[b]\n\nq = int(input())\nfor i in range(q):\n    a, b = input().split()\n    a, b = int(a), float(b)\n\n    if a in [1, 2]:\n        print(round(e[a], 2))\n    else:\n        e[p[a]] += b - e[a]\n        e[a] = b\n# 건축물의 개수 입력\n# 각 노드의 부모 노드 번호 저장\n# 각 노드의 우선순위 점수 저장\n\n# 건축물 개수만큼 반복\n# 부모 번호, 건축물 번호, 점수 입력\n # 노드 번호를 정수로 변환\n # 건축물의 점수 저장\n # 건축물의 부모 노드 저장\n # 부모 노드에 자식 점수 합산\n\n # 명령 횟수 입력\n # 명령 횟수만큼 반복\n # 명령 종류와 노드 번호 입력\n # 입력값을 숫자로 변환\n\n # 지역 노드이면\n # 해당 지역 점수 출력\n # 건축물 노드이면\n # 점수 변화량을 부모 노드에 반영\n# 건축물의 새로운 점수 저장"
 },
 "20815": {
  "name": "이승은",
  "cls": "2-08",
  "scores": [
   2,
   5,
   4,
   4
  ],
  "total": 15,
  "ev": "입력·트리 저장·조회/갱신·while 부모 이동 19줄 흐름 재현. 'p[b], p[c] = a, d'(b를 d로 씀), 'print e[b]' 괄호 누락, while 본문 'e[a] += c'를 'c += e[a]'로 뒤바꿈",
  "note": "",
  "code": "n = int(input())\np = [0] * 20\ne = [0] * 20\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c] = a, b\n    e[a] += d\n    e[b] += d\n    e[c] = d\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n01  입력받은 값을 정수로 변환해 지역 수 n에 저장\n02  트리에서 부모 정보를 저장할 리스트 p 선언\n03  트리에서 각 노드의 설치 대수를 저장할 리스트 e 선언\n04~09  반복문으로 n개 지역 정보 입력\n05  전체, 권역, 지역 번호, 설치 대수를 공백 기준으로 입력\n06  권역(b)의 부모 노드를 전체(a)로, 지역(c)의 부모 노드를 권역(b)으로 저장\n07  전체(a)의 설치 대수를 d만큼 누적하여 저장\n08  권역(b)의 설치 대수를 d만큼 누적하여 저장\n09  지역(c)의 설치 대수 d 저장\n10  입력받은 값을 정수로 변환해 작업 수 q에 저장\n11~19  반복문으로 q번 작업 진행\n12  작업 번호 a와 노드 번호(또는 새 값) b 입력\n13~14  작업 번호가 0이면 b번 노드의 설치 대수 e[b] 출력\n15  작업 번호가 0이 아니면 a번 노드의 설치 대수를 갱신\n16  변화량 c = 새 값 − 기존 값\n17  최상위 노드가 아니라면 반복\n18  a번 노드의 설치 대수를 c만큼 누적하여 저장\n19  a번 노드의 부모 노드로 이동"
 },
 "20816": {
  "name": "이하은",
  "cls": "2-08",
  "scores": [
   3,
   5,
   3,
   5
  ],
  "total": 16,
  "ev": "세미콜론 압축 입력·딕셔너리 p/v 저장·질의 입력·제너레이터 sum 조건 조회까지 활동지 코드 6줄 전체 재현. for문 본문 들여쓰기가 모두 빠짐",
  "note": "",
  "code": "n=int(input()); p={}; v={}\nfor _ in range(n):\n a,b,c,x=input().split(); p[int(b)]=int(a); p[int(c)]=int(b); v[int(c)]=float(x)\nfor _ in range(int(input())):\n a,b=input().split(); a=int(a); b=float(b)\n if a==0: print(sum(x for k,x in v.items() if k==b or p[k]==b or p[p[k]]==b))\n\nn에 말단 노드의 개수를 입력받고, p와 v에 부모 노드와 말단 노드의 값을 저장한다.\n반복문으로 각 노드의 부모 번호와 말단 노드의 값을 입력받아 저장한다.\n명령어를 입력받아 0이면 해당 노드의 하위 값의 합계를 출력한다.\n0이 아니면 해당 말단 노드의 값을 새로운 값으로 수정한다."
 },
 "20817": {
  "name": "정유진",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·주석·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 23줄 재현. 7줄 언패킹에서 d 누락('a, b, c = map(...)')",
  "note": "",
  "code": "01  n = int(input())\n02  p = [0] * 14\n03  e = [0] * 14\n04\n05  for i in range(n):\n06      # 전체, 분기, 월의 노드 번호, 신고 건수\n07      a, b, c, d = map(int, input().split())\n08      p[b] = a\n09      p[c] = b\n10      e[a] += d\n11      e[b] += d\n12      e[c] = d\n13\n14  q = int(input())\n15  for i in range(q):\n16      a, b = map(int, input().split())\n17      if a == 0:\n18          print(e[b])\n19      else:\n20          c = b - e[a]\n21          while a > 0:\n22              e[a] += c\n23              a = p[a]\n\n01 입력할 월별 자료의 개수를 입력받는다.\n02 각 노드의 부모 번호를 저장할 리스트 p를 만든다.\n03 각 노드의 식중독 신고 건수를 저장할 리스트 e를 만든다.\n05~07 반복문을 이용해 전체 노드 번호, 분기 노드 번호, 월 노드 번호, 신고 건수를 차례로 입력받는다.\n08 분기 노드 b의 부모를 전체 노드 a로 저장한다.\n09 월 노드 c의 부모를 분기 노드 b로 저장한다.\n10 월별 신고 건수를 전체 노드에 누적한다.\n11 월별 신고 건수를 해당 분기 노드에 누적한다.\n12 해당 월 노드에 신고 건수를 저장한다.\n14 조회 또는 수정 작업의 횟수를 입력받는다.\n15~16 작업 횟수만큼 반복하며 작업 정보 a, b를 입력받는다.\n17~18 a가 0이면 b번 노드에 저장된 신고 건수를 출력한다.\n19~20 수정 작업이면 a번 월 노드의 새 값 b와 기존 값의 차이를 계산한다.\n21~22 최상위 노드의 부모인 0에 도달할 때까지 반복하며, 현재 노드의 신고 건수에 변화량을 더한다.\n23 부모 노드로 이동하여 해당 분기와 전체 합계에도 변화량이 반영되도록 한다."
 },
 "20818": {
  "name": "최예원",
  "cls": "2-08",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "lambda 입력 함수·def u 재귀 없이 while 누적 함수·초기 입력 트리 연결·조건 표현식 조회/갱신까지 활동지 압축 코드 11줄 완벽 재현",
  "note": "",
  "code": "p, e = [0] * 12, [0] * 12\nf = lambda: map(int, input().split())\ndef u(x, d):\n    while x: e[x] += d; x = p[x]\nfor _ in range(int(input())):\n    a, b, c, w = f()\n    p[b], p[c] = a, b\n    u(c, w)\nfor _ in range(int(input())):\n    a, b = f()\n    u(a, b - e[a]) if a else print(e[b])\n1. 부모 노드(p)와 누적 합계(e) 배열 초기화\n2. 공백 기준 정수 입력 함수(f) 정의\n3. 노드 x부터 루트(1)까지 올라가며 변화량(d)을 누적 합산하는 함수(u) 정의\n4. 초기 데이터(8줄)를 입력받아 부모-자식 트리 연결 및 초기값 합산\n5. 명령(2줄)을 입력받아 처리 (a가 0이면 해당 노드 값 출력, 아니면 값 수정 후 상위 노드 갱신)"
 },
 "20819": {
  "name": "최하수",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "세미콜론 압축 다중 대입·트리 저장·누적, 질의 입력과 변화량 계산·조회·한 줄 while 갱신까지 활동지 압축 코드 8줄 완벽 재현. [실행 불가] 4·6줄 문장 구분 세미콜론을 콜론으로 써서 SyntaxError",
  "note": "",
  "code": "p, e = [0]*9, [0]*9\nfor i in range(int(input())):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c], e[c] = a, b, d; e[a] += d; e[b] += d\nfor i in range(int(input())):\n    a, b = map(int, input().split()); c = b - e[a]\n    if a == 0: print(e[b])\n    while a: e[a] += c; a = p[a]\n\n\n1행: 부모(p)와 전력(e) 리스트 생성\n2~3행: for 반복문으로 충전소 정보(a, b, c, d) 입력\n4행: 부모 연결(p) 및 시·구 초기 전력 합계(e) 저장\n5~6행: for 반복문으로 명령(a, b) 입력 및 변화량 c 계산\n7행: if 조건문으로 a가 0이면 총 전력량 e[b] 출력\n8행: while 반복문으로 부모(p[a])를 따라가며 합계 갱신"
 },
 "20820": {
  "name": "태현아",
  "cls": "2-08",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·주석·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 23줄 재현. while 본문 2줄 들여쓰기 누락, 콜론 대신 마침표 표기 등 사소한 실수",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    # 전체, 기관 구분, 병원 노드 번호, 가용 병상 수 순으로 입력\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n01 입력 받은 값을 정수로 변환하여 의료 기관 수를 나타내는 변수 n에 저장\n02 트리에서 각 노드의 부모 노드 번호를 저장하기 위한 리스트 p 선언\n03 각 노드의 가용 병상 수를 저장하기 위한 리스트 e 선언\n05~12 반복문을 이용하여 n개의 의료 기관 정보를 입력하고 트리 구성\n06~07 전체 노드 번호, 기관 구분 노드 번호, 병원 노드 번호, 가용 병상 수를 공백으로 구분하여 입력\n08 기관 구분 노드 b의 부모를 전체 노드 a로 저장\n09 병원 노드 c의 부모를 기관 구분 노드 b로 저장\n10 전체 노드에 해당 병원의 가용 병상 수 d를 누적하여 저장\n11 기관 구분 노드에 해당 병원의 가용 병상 수 d를 누적하여 저장\n12 병원 노드에 해당 병원의 가용 병상 수 d를 저장\n14 입력 받은 값을 정수로 변환하여 작업 횟수를 나타내는 변수 q에 저장\n15~23 반복문을 이용하여 q번의 조회 또는 수정 작업 수행\n16 작업을 구분하는 값 a와 조회할 노드 번호 또는 수정할 병상 수 b를 입력\n17~18 a가 0이면 b번 노드의 가용 병상 수 출력\n19~20 a가 0이 아니면 a번 병원의 새로운 병상 수 b와 기존 병상 수의 차이를 c에 저장\n21 현재 노드 번호가 0보다 큰 동안 반복\n22 현재 노드의 가용 병상 수에 변화량 c를 더하여 갱신\n23 현재 노드의 부모 노드로 이동하여 최상위 노드까지 변화량 반영"
 },
 "20901": {
  "name": "김민서",
  "cls": "2-09",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모/당류 리스트·입력 반복·부모 저장·for k in [a,b,c] 누적·조회/갱신·while 부모 이동까지 활동지 코드 16줄 완벽 재현",
  "note": "",
  "code": " p = [0] * 20\n e = [0] * 20\n for i in range(int(input())):\n     a, b, c, d = map(int, input().split())\n     p[b], p[c] = a, b\n     for k in [a, b, c]:\n         e[k] += d\n for i in range(int(input())):\n     a, b = map(int, input().split())\n     if a == 0:\n         print(e[b])\n     else:\n         c = b - e[a]\n         while a > 0:\n             e[a] += c\n             a = p[a]\n01~02: 부모 노드를 저장할 리스트 p와 당류를 저장할 리스트 e 선언\n03~04: 음료 개수만큼 반복하며 편의점, 식품군, 음료 번호, 당류 입력\n05: 식품군과 음료의 부모 노드 저장\n06~07: 편의점, 식품군, 음료 노드에 당류 d 누적\n08~09: 작업 개수만큼 반복하며 작업 번호와 값 입력\n10~11: 작업 번호가 0이면 b번 노드의 당류 출력\n12~13: 0이 아니면 새 당류와 기존 당류의 차이를 c에 저장\n14~16: 최상단 노드까지 당류를 c만큼 누적하며 부모 노드로 이동"
 },
 "20902": {
  "name": "김세연",
  "cls": "2-09",
  "scores": [
   3,
   5,
   4,
   4
  ],
  "total": 16,
  "ev": "입력·실수 변환·트리 저장·조회(round)/갱신·while 부모 이동까지 활동지 코드 24줄 재현. e[int(b)]를 e[input(b)]로 씀, if 콜론 누락",
  "note": "",
  "code": "n = int(input())\np = [0] * 20\ne = [0.0] * 20\n\nfor i in range(n):\n    a, b, c, d = input().split()\n    a = int(a); b = int(b); c = int(c); d = float(d)\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = input().split()\n    a = int(a); b = float(b)\n    if a == 0:\n        print(round(e[int(b)], 1))\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n01  키보드로 입력받은 값을 정수로 변환해서 변수 n에 저장\n02  트리에서 부모의 정보를 저장하기 위한 리스트 p 선언\n03  트리에서 각 노드의 발생량을 저장하기 위한 리스트 e 선언\n05~12  반복문을 이용하여 n개의 항목 정보 입력\n06  전체, 지역, 항목 노드 번호와 발생량을 공백 기준으로 입력\n07  입력받은 값을 정수와 실수로 변환\n08  b번 지역 노드의 부모가 a번 전체 노드임을 표현\n09  c번 항목 노드의 부모가 b번 지역 노드임을 표현\n10  a번 전체 노드의 발생량을 d만큼 누적하여 저장\n11  b번 지역 노드의 발생량을 d만큼 누적하여 저장\n12  c번 항목 노드의 발생량 d 저장\n14  키보드로 입력받은 값을 정수로 변환해서 변수 q에 저장\n15~24  반복문을 이용하여 q만큼 작업 진행\n16  작업 번호와 노드 번호(또는 바꿀 값) 입력\n17  입력받은 값을 변환\n18  만약 작업 번호가 0번이라면 (b번 노드 출력)\n19  e[b] 값 출력\n20  만약 작업 번호가 0번이 아니라면 (a번 노드 발생량 갱신)\n21  바뀐 양 c를 새 값 b에서 기존 값 e[a]를 빼서 계산\n22  a가 0보다 큰 동안(루트에 도착할 때까지) 반복\n23  a번 노드의 발생량에 바뀐 양 c를 더함\n24  a를 a의 부모 노드로 변경하여 위로 이동"
 },
 "20903": {
  "name": "김수현",
  "cls": "2-09",
  "scores": [
   2,
   5,
   3,
   4
  ],
  "total": 14,
  "ev": "연도·총량·이름·2차원 배출량 리스트, 이중 for 평균·비중 계산, 최댓값 탐색, 결과 출력·판정 25줄 흐름 재현. 비중식에서 total 누락('/[j]'), 22줄 if 누락, print에서 names[i] 대신 names, 반복/조건 본문 들여쓰기 대부분 없음",
  "note": "",
  "code": "years = [2019, 2020, 2021, 2022, 2023]\ntotal = [61551, 58558, 57317, 59459, 47957]\nnames = [\"비도로이동오염원\", \"비산먼지\", \"생물성 연소\"]\nemit = [[16045, 15493, 14865, 14576, 14593], [16088, 16114, 16480, 15509, 13824], [11482, 11356, 11536, 12250, 6864]]\navg = []\nratio = []\nfor i in range(3):\n    s = 0\n    r = 0\n    for j in range(5):\n        s += emit[i][j]\n        r += emit[i][j] / total[j] * 100\n    avg.append(s / 5)\n    ratio.append(r / 5)\nmax_i = 0\nfor i in range(1, 3):\n    if avg[i] > avg[max_i]:\n        max_i = i\nfor i in range(3):\n    change = emit[i][4] - emit[i][0]\n    print(names[i], \"평균:\", round(avg[i]), \"비중:\", round(ratio[i], 1), \"%\", \"변화:\", change)\n    if i == max_i or change >= 0:\n        print(\"→ 녹지 조성으로 저감 방안 필요\")\n    else:\n        print(\"→ 현재 수준 유지\")\n01\n연도(2019~2023)를 저장하는 리스트 years 선언\n02\n연도별 총 초미세먼지 농도를 저장하는 리스트 total 선언\n03\n배출원 3개의 이름을 저장하는 리스트 names 선언\n04\n배출원별 연도별 배출량을 저장하는 리스트 emit 선언. emit[0]은 비도로이동오염원, emit[1]은 비산먼지, emit[2]는 생물성 연소의 5년치 값\n05\n배출원별 5년 평균을 저장할 빈 리스트 avg 선언\n06\n배출원별 총량 대비 평균 비중(%)을 저장할 빈 리스트 ratio 선언\n07\n반복문으로 배출원 3개를 하나씩 확인 (i는 배출원 번호)\n08~09\n현재 배출원의 5년 합계 s와 비중 합계 r을 0으로 초기화\n10\n반복문으로 연도 5개를 하나씩 확인 (j는 연도 번호)\n11\n해당 연도의 배출량을 s에 누적하여 5년 합계 계산\n12\n해당 연도의 배출량을 총 초미세먼지 농도로 나누고 100을 곱해 비중(%)을 구한 뒤 r에 누적\n13\n5년 합계를 5로 나눈 평균을 avg에 저장\n14\n비중 합계를 5로 나눈 평균 비중을 ratio에 저장\n15\n평균이 가장 큰 배출원의 번호를 저장할 변수 max_i를 0번(첫 번째 배출원)으로 시작\n16\n반복문으로 1번, 2번 배출원을 차례로 확인\n17~18\n조건문으로 현재 배출원의 평균이 max_i 배출원의 평균보다 크면 max_i를 현재 번호로 바꿈. 반복이 끝나면 평균이 가장 큰 배출원 번호가 저장됨\n19\n반복문으로 배출원 3개를 다시 하나씩 확인\n20\n2023년 배출량에서 2019년 배출량을 빼서 5년간의 변화량 change 계산\n21\n배출원 이름, 5년 평균(반올림), 평균 비중(소수 첫째 자리까지), 변화량 출력\n22~23\n조건문으로 평균이 가장 큰 배출원이거나 변화량이 0 이상(줄지 않음)이면 \"녹지 조성으로 저감 방안 필요\" 출력\n24~25\n그렇지 않으면 \"현재 수준 유지\" 출력"
 },
 "20904": {
  "name": "김예은",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·주석·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 21줄 재현. range(n)·range(q)를 대괄호로 씀(2곳), else 들여쓰기 어긋남",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    # 전체, 연도, 에너지원 노드 번호, 발전량 순으로 입력\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\n\nfor i in range(q):\n    a, b = map(int, input().split())\n\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n01 키보드로 입력받은 값을 정수로 변환하여 변수 n에 저장\n02 부모 노드의 정보를 저장하기 위한 리스트 p 선언\n03 각 노드의 발전량을 저장하기 위한 리스트 e 선언\n05~12 반복문을 이용하여 n개의 발전량 정보 입력\n06 전체, 연도, 에너지원 노드 번호와 발전량을 입력받음\n07 전체, 연도, 에너지원 노드 번호와 발전량을 공백을 기준으로 입력\n08 b번 연도 노드의 부모 노드를 a번 전체 노드로 설정\n09 c번 에너지원 노드의 부모 노드를 b번 연도 노드로 설정\n10 전체 노드의 발전량에 d를 누적하여 저장\n11 b번 연도 노드의 발전량에 d를 누적하여 저장\n12 c번 에너지원 노드의 발전량을 d로 저장\n14 키보드로 입력받은 값을 정수로 변환하여 변수 q에 저장\n16~25 반복문을 이용하여 q번의 작업 진행\n17 작업 번호와 작업 대상 노드 번호 입력\n19 작업 번호가 0인지 확인\n20 해당 노드의 발전량 출력\n21 작업 번호가 0이 아닌 경우 발전량 수정\n22 새로운 발전량과 기존 발전량의 차이 계산\n23~25 반복문을 이용하여 상위 노드의 발전량 갱신"
 },
 "20905": {
  "name": "김은송",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "부모/수용인원 리스트·다중 대입 저장·세미콜론 누적·조회/갱신·한 줄 while까지 활동지 압축 코드 13줄 완벽 재현. [실행 불가] 5줄 리스트명 cap을 'Cap'(대문자)로 써서 NameError",
  "note": "",
  "code": "p, cap = [0] * 1000, [0] * 1000\n\nfor _ in range(int(input())):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c], cap[c] = a, b, d\n    cap[a] += d; cap[b] += d\n\nfor _ in range(int(input())):\n    a, b = map(int, input().split())\n    if a == 0: print(cap[b])\n    else:\n        diff = b - cap[a]\n        while a: cap[a] += diff; a = p[a]\n01 | 부모(p), 수용인원(cap) 선언\n\n03 | 쉼터 수만큼 반복\n04 | 구, 동, 쉼터, 인원 입력\n05 | 부모 연결 + 쉼터 인원 저장\n06 | 구·동에 인원 누적\n\n08 | 명령 수만큼 반복\n09 | 명령(a, b) 입력\n10 | a가 0이면 조회·출력\n11 | 아니면 인원 변경\n12 | 변동량 diff 계산\n13 | 부모를 따라 올라가며 반영"
 },
 "20906": {
  "name": "김현지",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   4
  ],
  "total": 17,
  "ev": "7일 입력 반복·records 저장, if/elif 혈압 5단계 분류, 복약 일수 세기, 복약 판정·안내 출력까지 재현(뒷면 포함). 분류 결과 'print(r[0], r[1], level)' 줄 누락, for·if 콜론 일부 누락",
  "note": "",
  "code": "records = []\n\nfor i in range(7):\n    s = int(input(\"수축기: \"))\n    d = int(input(\"이완기: \"))\n    t = input(\"복약(O/X): \")\n    records.append([s, d, t])\n\nfor r in records:\n    if r[0] >= 160 or r[1] >= 100:\n        level = \"고혈압 2기\"\n    elif r[0] >= 140 or r[1] >= 90:\n        level = \"고혈압 1기\"\n    elif r[0] >= 130 or r[1] >= 80:\n        level = \"고혈압 전단계\"\n    elif r[0] >= 120:\n        level = \"주의혈압\"\n    else:\n        level = \"정상\"\n    print(r[0], r[1], level)\n\ntaken = 0\nfor r in records:\n    if r[2] == \"O\":\n        taken += 1\n\nprint(\"복약일수:\", taken)\nif taken == 7:\n    print(\"모두 복용했어요\")\nelif taken >= 5:\n    print(\"빠뜨린 날이 있어요\")\nelse:\n    print(\"의료진과 상담하세요\")\nprint(\"참고용이며 의료 진단이 아닙니다\")\n부분 문제 1 (입력 및 정리): 빈 리스트 records를 만들고, for문으로 7번 반복하며 수축기, 이완기, 복약 여부를 입력받는다. int()로 숫자를 정수로 바꾸고, 세 값을 하나의 리스트로 묶어 append()로 records에 추가한다. 하루치에서 r[0]은 수축기, r[1]은 이완기, r[2]는 복약 여부이다.\n부분 문제 2 (혈압 분류): for문으로 기록을 하루씩 꺼내 if-elif로 분류한다. 높은 단계부터 검사하고 처음 참인 조건에서 멈추므로 한 기록이 한 단계로만 분류된다. 수축기와 이완기 중 하나라도 기준을 넘으면 해당 단계가 되도록 or를 사용했다.\n부분 문제 3 (복약 확인): taken을 0으로 시작해 복약 “O”인 날마다 1씩 더한다. 반복이 끝나면 복약일수에 따라 7일은 \"모두 복용했어요\", 5~6일은 \"빠뜨린 날이 있어요\", 4일 이하는 \"의료진과 상담하세요\"를 출력한다. 마지막에는 참고용 안내를 출력한다."
 },
 "20907": {
  "name": "박다원",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "부모/농도/측정소 수 리스트, 트리 저장과 누적, 평균 농도 조회 저장, while 갱신, 결과 출력까지 활동지 코드 31줄 재현(뒷면 포함). split 괄호 누락, b를 float 대신 int로 변환",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\ncnt = [0] * 1000\n\nfor i in range(n):\n    a, b, c, d = input().split()\n    a, b, c = int(a), int(b), int(c)\n    d = float(d)\n\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n    cnt[a] += 1\n    cnt[b] += 1\n    cnt[c] = 1\n\nq = int(input())\nr = []\n\nfor i in range(q):\n    a, b = input().split()\n    a = int(a)\n    b = float(b)\n\n    if a == 0:\n        r.append(round(e[int(b)] / cnt[int(b)], 2))\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\nfor x in r:\n    print(x)\n1~3 노드 개수를 입력받고 부모 노드와 농도를 저장할 리스트를 만든다.\n4~6 측정소 개수를 저장할 리스트를 만들고 초기 트리 정보를 입력받는다.\n7~9 입력값의 자료형을 변환하고 부모 노드 관계를 저장한다.\n10~12 부모 노드와 자식 노드의 농도 합계를 저장한다.\n13~15 자식 노드의 농도와 측정소 개수를 저장한다.\n16~18 측정소 개수를 저장하고 작업 횟수와 결과 리스트를 준비한다.\n19~21 반복문으로 작업 내용을 입력받고 노드 번호를 변환한다.\n22~24 변경할 값을 변환하고 조회 작업이면 평균 농도를 저장한다.\n25~27 값 변경 작업이면 농도 차이를 계산하고 부모 노드로 이동한다.\n28~30 상위 노드의 농도 합계를 갱신하고 출력 반복문을 시작한다.\n31 저장된 조회 결과를 출력한다.\n\n유가읍 20 12 7 11"
 },
 "20908": {
  "name": "선유림",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "float 입력 변환·트리 저장·위험지수 3단계 판정 조회·while 갱신까지 활동지 코드 28줄 완벽 재현(뒷면 포함). [실행 불가] 첫 for문·while문 끝을 콜론 대신 세미콜론으로 씀",
  "note": "",
  "code": "n = int(input())\np = [0] * 100\ne = [0.0] * 100\n\nfor i in range(n):\n    a, b, c, d = map(float, input().split())\n    a, b, c = int(a), int(b), int(c)\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(float, input().split())\n    a = int(a)\n\n    if a == 0:\n        b = int(b)\n        if e[b] < 0.2: print(\"고위험\")\n        elif e[b] < 0.5: print(\"위험\")\n        else: print(\"정상\")\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n01 키보드로 입력받은 값을 정수로 변환해서 변수 n에 저장\n02 트리에서 부모의 정보를 저장하기 위한 리스트 p 선언\n03 트리에서 각 노드의 위험지수를 저장하기 위한 리스트 e 선언\n05~12 반복문을 이용하여 n개의 구역(동네) 정보 입력\n06 시, 구, 동 번호, 위험지수 순으로 입력\n07 노드 번호(a, b, c)를 배열의 인덱스로 사용하기 위해 정수형으로 변환\n08 b번 구(군)가 a번 시의 소속이라는 것을 부모 노드와 자식 노드로 표현\n09 c번 동(읍/면)이 b번 구(군)의 소속인지 부모 노드와 자식 노드로 표현\n10 a번 시의 지수를 d만큼 누적하여 저장\n11 b번 구(군)의 지수를 d만큼 누적하여 저장\n12 c번 동(읍/면)의 지수 d 저장\n\n14 키보드로 입력받은 값을 정수로 변환해서 변수 q에 저장\n15~28 반복문을 이용하여 q만큼 작업 진행\n16 작업의 번호와 작업을 수행하려는 노드 번호(또는 갱신할 지수) 입력\n17 명령 확인을 위해 작업 번호 a를 정수형으로 변환\n19 만약 작업 번호가 0번이라면 (상태 확인 및 판별 출력)\n20 확인할 대상인 노드 번호 b를 정수형으로 변환\n21~23 b번 노드의 지수를 확인하여, 0.2 미만이면 '고위험', 0.5 미만이면 '위험', 그 외는 '정상' 출력\n24 만약 작업 번호가 0번이 아니라면 (a번 노드 위험지수 갱신)\n25 a번 동네의 차이값(변화량) c로 갱신\n26 최상단 노드가 아니라면 반복\n27 a번 노드의 지수를 c만큼 누적하여 저장\n28 a번 노드의 부모 노드로 이동"
 },
 "20909": {
  "name": "손지윤",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "제목 출력·시간 입력·범위 검사·수면시간 계산과 자정 보정·3단계 판정 출력까지 활동지 코드 전체 재현. 'if sleep <= 0' 콜론 누락",
  "note": "",
  "code": "print(\"청소년 수면 습관 분석 프로그램\")\n\nbedtime = int(input(\"취침 시간을 입력하세요(0~23): \"))\nwaketime = int(input(\"기상 시간을 입력하세요(0~23): \"))\n\nif bedtime < 0 or bedtime > 23 or waketime < 0 or waketime > 23:\n    print(\"시간을 0부터 23 사이로 입력하세요.\")\n\nelse:\n    sleep = waketime - bedtime\n\n    if sleep <= 0:\n        sleep = sleep + 24\n\n    print(\"총 수면 시간:\", sleep, \"시간\")\n\n    if sleep < 8:\n        print(\"수면 시간이 권장 범위보다 부족합니다.\")\n    elif sleep <= 10:\n        print(\"권장 수면 시간 범위에 해당합니다.\")\n    else:\n        print(\"권장 수면 시간 범위보다 깁니다.\")\n\n1. 프로그램을 실행하면 화면에 '청소년 수면 습관 분석 프로그램'이라는 제목이 출력된다.\n2. 사용자에게 취침 시간과 기상 시간을 입력받고, 입력한 값을 정수로 변환하여 각각 변수에 저장한다.\n3. 입력한 취침 시간과 기상 시간이 0부터 23 사이인지 확인하고, 범위를 벗어나면 오류 안내 문구를 출력한다.\n4. 입력한 시간이 올바르면 기상 시간에서 취침 시간을 빼서 총 수면 시간을 계산한다.\n5. 계산 결과가 0 이하이면 자정을 넘어 다음 날 기상한 경우이므로 24를 더해 수면 시간을 계산한다.\n6. 계산된 총 수면 시간을 화면에 출력한다.\n7. 총 수면 시간이 8시간 미만이면 수면 시간이 부족하다는 안내 문구를 출력한다.\n8. 총 수면 시간이 8시간 이상 10시간 이하이면 권장 수면 시간 범위에 해당한다는 안내 문구를 출력한다.\n9. 총 수면 시간이 10시간을 초과하면 권장 수면 시간 범위보다 길다는 안내 문구를 출력한다."
 },
 "20910": {
  "name": "안수현",
  "cls": "2-09",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "입력·리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 22줄을 오류 없이 완벽 재현",
  "note": "",
  "code": "n=int(input())\np=[0]*1000\ne=[0]*1000\n\nfor i in range(n):\n  a, b, c, d = map(int, input().split())\n  p[b] = a\n  p[c] = b\n  e[a] += d\n  e[b] += d\n  e[c] = d\n\nq = int(input())\nfor i in range(q):\n  a, b = map(int, input().split())\n  if a ==0:\n    print(e[b])\n  else:\n    c=b - e[a]\n    while(a>0):\n      e[a] = e[a] + c\n      a = p[a]\n입력받은 값을 정수로 바꿔 n에 저장\n\n부모 노드 정보를 저장할 리스트 p 선언\n\n각 노드의 물 사용량을 저장할 리스트 e 선언\n\n반복문으로 n개의 항목 정보 입력\n\n집, 공간, 항목 번호, 사용량을 공백 기준으로 입력\n\nb번 공간이 a번 집에 속함을 부모·자식 노드로 표현\n\nc번 항목이 b번 공간에 속함을 부모·자식 노드로 표현\n\n집 전체 사용량을 d만큼 누적하여 저장\n\nb번 공간의 사용량을 d만큼 누적하여 저장\n\nc번 항목의 사용량 d 저장\n\n입력받은 값을 정수로 바꿔 q(작업 횟수)에 저장\n\n반복문으로 q번만큼 작업 진행\n\n작업 번호가 0이면 b번 노드의 사용량 e[b] 출력\n아니면 새 사용량과 기존 사용량의 차이를 c에 저장\n\na번 노드의 사용량을 c만큼 누적하여 저장\n\na번 노드의 부모 노드로 이동"
 },
 "20911": {
  "name": "안은수",
  "cls": "2-09",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모·BOD 합계·측정소 수 리스트, while로 조상 누적, 명령 리스트 내포, 언패킹 *v, 평균 조회·갱신까지 활동지 코드 22줄 완벽 재현",
  "note": "",
  "code": "p = [0]*10\ns = [0.0]*10\ncnt = [0]*10\nfor _ in range(int(input())):\n    a,b,c,d = map(float,input().split())\n    a,b,c = int(a),int(b),int(c)\n    p[b],p[c] = a,b\n    while c:\n        s[c] += d\n        cnt[c] += 1\n        c = p[c]\nq = [input() for _ in range(int(input()))]\nfor x in q:\n    cmd,t,*v = map(float,x.split())\n    t = int(t)\n    if cmd == 0:\n        print(round(s[t]/cnt[t],2))\n    else:\n        d = v[0]-s[t]\n        while t:\n            s[t] += d\n            t = p[t]\n01 부모 노드 정보를 저장할 리스트 p 준비\n02 BOD 합계를 저장할 리스트 s 준비\n03 측정소 개수를 저장할 리스트 cnt 준비\n04 입력받을 측정소 데이터 개수만큼 반복\n05 대권역, 중권역, 측정소, BOD 수치를 공백을 기준으로 입력\n06 노드 번호를 정수형으로 변환\n07 부모-자식 노드 관계를 p에 저장\n08 루트 노드까지 반복\n09 각 노드의 BOD 합계 누적\n10 각 노드의 측정소 개수 누적\n11 부모 노드로 이동\n12 실행할 명령어들을 입력받아 리스트에 저장\n13 저장된 명령어를 하나씩 반복\n14 명령어\n15 명령 번호와 대상 노드 번호 및 추가 값 저장\n16 명령 번호가 0인지 확인\n17 BOD 합계를 측정소 개수로 나누어 평균 출력\n18 명령 번호가 0이 아니면 실행\n19 변경 전후 BOD 값의 차이 계산\n20 루트 노드까지 반복\n21 각 노드의 BOD 합계 갱신\n22 부모 노드로 이동"
 },
 "20912": {
  "name": "이서정",
  "cls": "2-09",
  "scores": [
   2,
   4,
   4,
   4
  ],
  "total": 14,
  "ev": "입력·리스트·트리 저장·조회(round 출력)·while 부모 이동 흐름 재현. else 줄이 빠져 갱신부가 조회 조건 안에 들어감, 'c = b - e[a]'를 'b = c - e[a]'로 뒤바꿔 while 안에 씀, round 괄호 누락",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    # 최상위 노드, 중간 노드, 하위 노드, 생산성 순으로 입력\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\n\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(round(e[b] / 1000, 3))\n    else:\n        c = b - e[a]\n        while (a > 0):\n            e[a] = e[a] + c\n            a = p[a]\n01 키보드로 입력받은 데이터 개수를 정수로 변환하여 변수 n에 저장\n02 트리에서 각 노드의 부모 정보를 저장하기 위한 리스트 p 선언\n03 트리에서 각 노드의 생물량 생산성 값을 저장하기 위한 리스트 e 선언\n05~12 반복문을 이용하여 노드의 계층 관계와 생산성 데이터 입력\n07 최상위 노드, 중간 노드, 하위 노드, 생산성 값을 공백으로 구분하여 입력\n08 중간 노드의 부모 노드 번호 저장\n09 하위 노드의 부모 노드 번호 저장\n10 생산성 값을 최상위 노드에 누적하여 저장\n11 생산성 값을 중간 노드에 누적하여 저장\n12 하위 노드의 생산성 값 저장\n14 조회할 작업의 개수를 정수로 변환하여 변수 q에 저장\n15~16 반복문을 이용하여 조회할 노드 번호 입력\n17~18 입력한 작업 번호가 0이면 해당 노드의 생산성 합계 출력\n19~22 작업 번호가 0이 아니면 변경된 생산성 값을 부모 노드에 반영"
 },
 "20913": {
  "name": "이서하",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·주석·부모 저장·부모/조부모 누적 조건·조회/갱신·while 부모 이동까지 활동지 코드 23줄 완벽 재현. [실행 불가] 'Print(e[b])' 대문자로 NameError",
  "note": "",
  "code": "01 n = int(input())\n02 p = [0] * 1000\n03 e = [0] * 1000\n04\n05 for i in range(n):\n06     # 지역 번호, 부모 노드 번호, 공공심야약국 수 입력\n07     a, b, c = map(int, input().split())\n08     p[a] = b\n09     e[a] = c\n10     e[b] += c\n11     if p[b] > 0:\n12         e[p[b]] += c\n13\n14 q = int(input())\n15 for i in range(q):\n16     a, b = map(int, input().split())\n17     if a == 0:\n18         print(e[b])\n19     else:\n20         c = b - e[a]\n21         while a > 0:\n22             e[a] += c\n23             a = p[a]\n01 키보드로 입력받은 값을 정수로 변환해서 변수 n에 저장\n02 트리에서 각 노드의 부모 정보를 저장하기 위한 리스트 p 선언\n03 트리에서 각 노드의 공공심야약국 수를 저장하기 위한 리스트 e 선언\n05~12 반복문을 이용하여 n개의 지역 정보 입력\n06 지역 번호, 부모 노드 번호, 공공심야약국 수를 입력\n07 입력받은 지역 번호, 부모 노드 번호, 공공심야약국 수를 각각 a, b, c에 저장\n08 a번 지역의 부모 노드 번호를 p[a]에 저장\n09 a번 지역의 공공심야약국 수를 e[a]에 저장\n10 b번 부모 지역의 공공심야약국 수에 c만큼 누적하여 저장\n11 b번 지역의 부모 노드가 존재하는지 확인\n12 부모 노드가 존재하면 해당 지역의 공공심야약국 수에 c만큼 누적하여 저장\n14 키보드로 입력받은 값을 정수로 변환해서 변수 q에 저장\n15~23 반복문을 이용하여 q만큼 작업 진행\n16 작업 번호와 작업을 수행하려는 노드 번호 입력\n17 만약 작업 번호가 0번이라면\n18 b번 지역의 공공심야약국 수인 e[b]값 출력\n19 작업 번호가 0번이 아니라면\n20 b번 지역의 공공심야약국 수와 기존 a번 지역의 공공심야약국 수의 차이를 c에 저장\n21 a번 지역이 최상위 지역이 아닐 때까지 반복\n22 a번 지역의 공공심야약국 수에 c만큼 누적하여 저장\n23 a번 지역의 부모 노드로 이동"
 },
 "20914": {
  "name": "이세원",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 22줄 재현. 'c = b - e[a]'의 e를 c로 표기(오타 의심), else 들여쓰기 어긋남",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n  a, b, c, d = map(int, input().split())\n  p[b] = a\n  p[c] = b\n  e[a] += d\n  e[b] += d\n  e[c] = d\n\nq = int(input())\nfor i in range(q):\n  a, b = map(int, input().split())\n  if a == 0:\n    print(e[b])\n  else:\n    c = b - e[a]\n    while a > 0:\n      e[a] = e[a] + c\n      a = p[a]\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n입력받을 데이터의 개수를 정수로 변환하여 저장한다\n트리의 부모노드관계를 저장할 리스트와 노드의 태양광 생산량 숫자를 저장할 리스트를 선언하고 0으로 초기화한다\n\n\n반복문을 통해 n개의 기초지자체 정보를 차례대로 입력받는다\n상위노드, 중간권역 노드, 기초지자체 정보, 태양광 생산량을 각각 변수에 담는다.\n\n부모 리스트에 자식 노드의 부모 정보를 기록하고, 생산량을 중간 권역과 최상위 루트 노드까지 모두 누적하여 초기 트리를 완성한다.\n\n\n수행할 작업 횟수를 입력받고, 반복문을 통해 작업 번호와 대상 노드(또는 변경 값)를 입력받는다.\n\n\n작업 번호가 0이면 b번 노드의 현재 태양광 생산량(e[b])을 출력한다.\n\n작업 번호가 0이 아니면 생산량 변동 차이를 계산한 뒤, 최상위 루트 노드까지 거슬러 올라가며 부모 노드들의 값을 실시간으로 갱신한다."
 },
 "20915": {
  "name": "이은서",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 20줄을 오류 없이 완벽 재현. [실행 불가] else·while문 끝을 콜론 대신 마침표로 씀",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while( a > 0 ):\n            e[a] = e[a] + c\n            a = p[a]\n\n1~3줄- 데이터 개수(n)를 입력받고, 부모 노드(상위 지역)를 저장할 리스트 p와 미세먼지 수치를 저장할 리스트 e를 만듦.\n\n5~12줄 -(대구), 구, 동 번호와 미세먼지 값을 입력받아 동 → 구 → 대구 순서로 부모-자식 관계를 연결하고, 각 지역의 합계를 누적해 저장\n\n14~18줄 작업 횟수(q)만큼 반복하면서, 앞 숫자가 0이면 해당 지역(b)의 현재 미세먼지 합계를 출력"
 },
 "20916": {
  "name": "이지원",
  "cls": "2-09",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "입력·리스트(크기 26)·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 22줄을 오류 없이 완벽 재현",
  "note": "",
  "code": "n = int(input())\np = [0] * 26\ne = [0] * 26\n\nfor i in range(n):\n   a, b, c, d = map(int, input().split())\n   p[b] = a\n   p[c] = b\n   e[a] += d\n   e[b] += d\n   e[c] = d\n\nq = int(input())\nfor i in range(q):\n   a, b = map(int, input().split())\n   if a == 0:\n       print(e[b])\n   else:\n       c = b - e[a]\n       while a > 0:\n           e[a] += c\n           a = p[a]\n01  입력할 관측값의 개수를 정수로 받아 n에 저장한다.\n02~03  부모 노드 번호는 p에, 폭염일수는 e에 저장한다. 0~25번을 쓸 수 있도록 각각 26칸을 만든다.\n05~06  n줄을 읽는다. 한 줄은 전체 노드 번호, 월 노드 번호, 기록 노드 번호, 폭염일수 순이다.\n07~08  월 노드의 부모를 전체 노드로, 기록 노드의 부모를 월 노드로 지정한다.\n09~11  폭염일수를 전체와 월 합계에 더하고, 해당 기록 노드에 저장한다.\n13~15  명령 개수 q를 입력받고, 명령마다 정수 두 개를 읽는다.\n16~17  첫 값이 0이면 두 번째 값에 해당하는 노드의 폭염일수를 출력한다.\n18~19  첫 값이 기록 노드 번호이면 새 값에서 기존 값을 빼 차이 c를 구한다.\n20~22  기록 노드부터 차이 c를 더한다. a = p[a]로 월과 전체 노드에 차례로 이동하며, a가 0이면 멈춘다."
 },
 "20917": {
  "name": "전서현",
  "cls": "2-09",
  "scores": [
   4,
   5,
   5,
   5
  ],
  "total": 19,
  "ev": "입력·트리 저장·조회 시 농도 출력과 좋음/보통/나쁨 3단계 판정·while 갱신까지 활동지 코드 26줄 재현. 'e[c] = d'를 'e[c] += d'로 씀(초기값 0이라 결과 동일)",
  "note": "",
  "code": "n = int(input())\np = [0] * 20\ne = [0] * 20\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(\"초미세먼지 농도:\", e[b])\n        if e[b] <= 15:\n            print(\"등급: 좋음 - 실외활동이 가능합니다.\")\n        elif e[b] <= 35:\n            print(\"등급: 보통 - 호흡기 민감군은 마스크 착용을 권장합니다.\")\n        else:\n            print(\"등급: 나쁨 - 야외 체육활동을 자제하고 보건용 마스크(KF80 이상)를 착용하세요.\")\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n01: 입력받을 시간대 데이터 개수 n을 정수로 저장\n02: 트리에서 부모 노드 번호를 저장하기 위한 리스트 p 선언\n03: 트리에서 각 노드의 초미세먼지 농도를 저장하기 위한 리스트 e 선언\n05~11: 반복문을 이용하여 n개의 시간대별 초미세먼지 정보 입력 및 트리 구성\n06: 전체(a), 지역(b), 시간대(c) 노드 번호와 초미세먼지 농도(d)를 공백 기준으로 입력\n07: 지역 노드(b)가 전체 노드(a) 소속임을 부모 노드와 자식 노드로 표현\n08: 시간대 노드(c)가 지역 노드(b) 소속임을 부모 노드와 자식 노드로 표현\n09: 전체 노드(a)의 누적 농도에 d만큼 더하여 저장\n10: 지역 노드(b)의 누적 농도에 d만큼 더하여 저장\n11: 시간대 노드(c)의 초미세먼지 농도 d 저장\n13: 수행할 작업(조회 및 갱신) 횟수 q를 정수로 저장\n14~28: 반복문을 이용하여 q번만큼 작업 진행\n15: 작업 종류(a)와 작업을 수행할 노드 번호 또는 변경 값(b) 입력\n16~17: 만약 작업 번호(a)가 0이면 b번 노드의 초미세먼지 농도 e[b] 출력\n18~23: 조건문을 이용해 농도(e[b])에 따른 대기질 등급(좋음/보통/나쁨)과 건강 보호 수칙 출력\n24~25: 만약 작업 번호(a)가 0이 아니면 변경된 농도 차이 계산\n26~28: 최상단 노드(a > 0)까지 부모 노드로 이동(a = p[a])하며 누적 농도에 c만큼 더하여 자동 갱신"
 },
 "20918": {
  "name": "천지민",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 20줄을 오류 없이 완벽 재현. [실행 불가] 6~7줄 리스트 p를 'P'(대문자)로 써서 NameError",
  "note": "",
  "code": "n = int(input())\np = [0] * 30\ne = [0] * 30\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\n\n01: 입력받은 값을 정수로 바꿔 데이터 개수 n에 저장\n02~03: 각 노드의 부모 번호를 저장하는 리스트 p와 배출량을 저장하는 리스트 e를 선언\n04~05: n번 반복하며 전체, 지역, 물질의 노드 번호와 배출량을 입력받아 변수 a, b, c, d에 저장\n06~07: 지역 노드 b의 부모는 전체 노드 a로, 물질 노드 c의 부모는 지역 노드 b로 저장\n08~10: 배출량 d를 전체 노드와 지역 노드에 누적하고, 물질 노드에는 그대로 저장\n11: 작업의 개수 q를 입력받아 저장\n12~13: q번 반복하며 작업 번호 a와 값 b를 입력받음\n14~15: a가 0이면 조회 작업이므로 b번 노드의 배출량을 출력\n16~17: a가 0이 아니면 갱신 작업이므로 새 배출량 b에서 현재 배출량 e[a]를 뺀 변화량 c를 계산\n18~20: a번 노드부터 부모 노드를 따라 올라가며 최상위 노드까지 변화량 c를 더해 갱신, a가 0이 되면 반복 종료"
 },
 "20919": {
  "name": "최연아",
  "cls": "2-09",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "고정 부모 리스트·while로 조상 누적 입력·명령별 추가 누적/조회까지 활동지 코드 15줄 완벽 재현",
  "note": "",
  "code": "p = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3]\ne = [0] * 10\n\n\nfor _ in range(int(input())):\n    u, c = map(int, input().split())\n    while u:\n        e[u] += c\n        u = p[u]\n\nfor _ in range(int(input())):\n    cmd, u, c = map(int, input().split())\n    if cmd:\n        while u:\n            e[u] += c\n            u = p[u]\n    else:\n        print(e[u])\n각 노드의 부모 번호를 담은 리스트p와 발생자 수를 저장할 리스트 e를 생성\n\n\n\n세부 질환 개수만큼 반복하면서 질환 번호u와 발생자수c를 입력받음.\n현재 노드u에 발생자수 c를 더한 뒤 부모노드를 따라 맨위까지 올라가며 차례대로 더함\n\n\n\n\n작업 횟수만큼 반복하면서 작업 종류cmd,노드 번호u,추가 환자 수c를 입력받음.\ncmd가 1이면 부모 노드를 따라 올라가며 새 환자 수 c를 더하고 0이면 해당 노드의 발생자 수를 출력한다."
 },
 "20920": {
  "name": "최정원",
  "cls": "2-09",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "리스트 연산으로 부모 배열 생성·단말 입력과 부모/루트 누적·조회/갱신·while 부모 이동까지 활동지 코드 15줄 재현. 'input.split()' 괄호 누락",
  "note": "",
  "code": "p = [0,0,1,1]+[2]*5+[3]*5\ne = [0]*14\n\nfor i in range(4,14):\n    e[i] = int(input())\n    e[p[i]] += e[i]\n    e[1] += e[i]\n\nfor i in range(int(input())):\n    a,b = map(int,input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b-e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n① 리스트 p에 각 노드의 부모 노드 번호를 저장하고, 리스트 e에 14개의 저장 공간을 생성한다.\n② for 반복문으로 10개의 단말 노드에 감염병 발생 수를 입력받고, 해당 학교급의 부모 노드와 전체 발생량에 누적하여 저장한다.\n③ 수행할 작업 횟수를 입력받고, for 반복문으로 조회 또는 갱신 작업을 반복한다.\n④ 작업할 노드 번호 a와 조회 또는 변경할 값 b를 입력받는다.\n⑤ a가 0이면 b번 노드에 저장된 발생 수를 출력한다.\n⑥ a가 0이 아니면 새로운 발생 수 b에서 기존 발생 수를 빼 변화량 c를 계산한다.\n⑦ while 반복문으로 변경한 노드부터 부모 노드를 따라 이동하며 변화량을 더해 최상위 노드까지 갱신한다."
 },
 "21001": {
  "name": "김가민",
  "cls": "2-10",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·부모 저장·curr while로 조상 누적, op/node/val 질의·조회/갱신(diff)·while 부모 이동까지 활동지 코드 22줄 전체 재현. 'int(input)'·'split' 괄호 누락",
  "note": "",
  "code": "n = int(input())\np = [0] * 100\ne = [0] * 100\n\nfor i in range(n):\n    a, b, c = map(int, input().split())\n    p[b] = a\n    e[b] = c\n    curr = a\n    while curr != 0:\n        e[curr] += c\n        curr = p[curr]\n\nq = int(input())\nfor i in range(q):\n    op, node, val = map(int, input().split())\n    if op == 0:\n        print(e[node])\n    else:\n        diff = val - e[node]\n        curr = node\n        while curr != 0:\n            e[curr] += diff\n            curr = p[curr]\n\n입력 개수(n) 지정\n부모 노드 저장용 리스트(p) 선언\n배출량 저장용 리스트(e) 선언\n\n\n데이터 입력: 부모(a), 자식(b), 배출량(c)\n자식의 부모 연결 및 배출량 저장 누적 합산: 반복문을 돌며 위쪽(부모)으로 올라가며 총배출량 더하기\n\n\n쿼리(q) 실행: 조회(0) 또는 갱신(1)\nop가 0: 해당 노드 배출량 출력\nop가 1: 배출량 변경 후, 위로 올라가며 부모들의 총배출량 재계산(갱신)"
 },
 "21002": {
  "name": "김민주",
  "cls": "2-10",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모/배출량 리스트·16개 입력 트리 연결·지역 합산·루트 합계·조회/갱신·while 부모 이동까지 활동지 코드 17줄 완벽 재현",
  "note": "",
  "code": "p = [0] * 22\ne = [0] * 22\nfor i in range(16):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c] = a, b\n    e[b] += d\n    e[c] = d\ne[1] = e[2] + e[3] + e[4] + e[5]\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0: print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\n01-02. 부모 노드 정보(p)와 노드별 오염물질 배출량(e)을 저장할 리스트 선언\n03-08. 16개 데이터를 입력받아 부모-자식 트리를 연결하고, 지역별/전체 배출량 합산\n09-11. 작업 횟수(q)만큼 반복하며 명령 종류(a)와 대상 노드 또는 변경값(b) 입력\n12. a가 0이면(조회) 지정한 b번 노드의 현재 배출량 출력\n13-17.a가 0이 아니면(갱신) 변화량(c)을 구한 뒤, 루트까지 부모 노드를 따라 올라가며 배출량 자동 수정"
 },
 "21003": {
  "name": "김은서",
  "cls": "2-10",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·부모 저장(p[a]=1, p[b]=a)·루트/중간 누적·조회/갱신·while 부모 이동까지 활동지 코드 22줄을 오류 없이 완벽 재현. [실행 불가] 7~8줄 리스트 p를 'P'(대문자)로 써서 NameError",
  "note": "",
  "code": "n = int(input())\np = [0] * 100\ne = [0] * 100\n\nfor i in range(n):\n    a, b, d = map(int, input().split())\n    p[a] = 1\n    p[b] = a\n    e[1] += d\n    e[a] += d\n    e[b] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\n1~3 : 데이터 개수 n, 부모 리스트 p, 처리량 리스트 e 생성\n\n5~11 : n개 데이터 입력받아 부모 연결 및 상위 노드 합산\n\n13~17 : q번 반복하며 a ==0이면 b번 노드 출력\n\n18~22 : 아니면 a번 값을 b로 수정 후 부모 노드까지 차이(c) 누적"
 },
 "21004": {
  "name": "김정현",
  "cls": "2-10",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·부모 저장·while 조상 누적·기준값 old 저장·조회/갱신·변화율 계산·목표 달성 4단계 판정까지 활동지 코드 32줄 완벽 재현. [실행 불가] 리스트를 'P'로 선언하고 'p[a]'로 사용(대소문자 불일치), 'Print' 대문자",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n  # 노드 번호, 부모 노드 번호, 배출량 입력\n  a, b, d = map(int, input().split())\n  p[a] = b\n  while a > 0:\n    e[a] += d\n    a = p[a]\n\nold = e[1]\nq = int(input())\nfor i in range(q):\n  a, b = map(int, input().split())\n  if a == 0:\n    print(e[b])\n  else:\n    c = b - e[a]\n    while a > 0:\n      e[a] = e[a] + c\n      a = p[a]\n\nt = int(input())\nr = (e[1] - old) / old * 100\nprint(round(r, 1))\nif r <= -t:\n  print(\"목표 달성\")\nelif r < 0:\n  print(\"개선\")\nelif r == 0:\n  print(\"변화 없음\")\nelse:\n  print(\"악화\")\n    01    키보드로 입력받은 값을 정수로 변환해서 변수 n에 저장 (n은 노드의 수)\n    02    트리에서 부모의 정보를 저장하기 위한 리스트 p 선언\n    03    트리에서 각 노드의 배출량을 저장하기 위한 리스트 e 선언\n    05~11    반복문을 이용하여 n개의 노드 정보 입력\n    06    노드 번호, 부모 노드 번호, 배출량을 공백을 기준으로 입력 (말단이 아닌 노드의 배출량은 0)\n    07    입력받은 값을 정수로 변환해서 a, b, d에 저장\n    08    a번 노드의 부모 노드가 b번이라는 것을 표현 (0은 부모 없음)\n    09~11    a번 노드에서 최상단 노드까지 올라가며 반복\n    10    a번 노드의 배출량을 d만큼 누적하여 저장\n    11    a번 노드의 부모 노드로 이동\n    13    갱신하기 전 전사(1번 노드)의 배출량을 변수 old에 저장\n    14    키보드로 입력받은 값을 정수로 변환해서 변수 q에 저장\n    15~23    반복문을 이용하여 q만큼 작업 진행\n    16    a와 b 입력 (a가 0이면 b번 노드 출력, 0이 아니면 a번 노드의 새 배출량이 b)\n    17    만약 a가 0이라면 (b번 노드 출력)\n    18    e[b]값 출력\n    19    만약 a가 0이 아니라면 (a번 노드 배출량 갱신)\n    20    새 배출량 b와 기존 값 e[a]의 차이 c 계산\n    21    최상단 노드가 아니라면 반복\n    22    a번 노드의 배출량을 c만큼 누적하여 저장\n    23    a번 노드의 부모 노드로 이동\n    25    키보드로 입력받은 목표 감축률(%)을 정수로 변환해서 변수 t에 저장\n    26    전사 배출량의 변화율 r(%) 계산\n    27    변화율 r을 소수 첫째 자리까지 출력\n    28~35    r ≤ −t 이면 '목표 달성', r < 0 이면 '개선', r이 0이면 '변화 없음', 그 외에는 '악화' 출력"
 },
 "21005": {
  "name": "김지은",
  "cls": "2-10",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "getpass 입력 리스트, enumerate(x[:-2], 8) 반복과 조건 표현식으로 부모 노드 계산·누적, 마지막 두 값으로 갱신 후 상위 노드 반영·출력까지 활동지 압축 코드 15줄 완벽 재현. [실행 불가] 'Import'·'Print' 대문자로 SyntaxError/NameError",
  "note": "",
  "code": "from getpass import getpass\n\nx=list(map(int,getpass(\"\").split()))\ne=[0]*62\n입력한 값이 화면에 보이지 않도록 getpass를 사용하고, 입력값을 정수 리스트 x에 저장한다. e는 각 노드의 값을 저장하기 위한 리스트이다.\nfor i,v in enumerate(x[:-2],8):\n    g=2 if i<12 else (i-12)//10+3\n    e[i]=v\n    e[g]+=v\n    e[1]+=v\n3단계 노드의 값을 8번 노드부터 차례대로 저장한다. 각 3단계 노드가 속한 2단계 부모 노드 g를 찾고, 입력값을 2단계 노드와 1단계 노드에 더해 합계를 계산한다.\na,b=x[-2:]\ng=2 if a<12 else (a-12)//10+3\nd=b-e[a]\ne[a]=b\n마지막 두 입력값을 변경할 노드 번호 a와 새로운 값 b로 저장한다. 변경할 노드의 부모 노드를 찾고, 새로운 값과 기존 값의 차이 d를 구한 뒤 3단계 노드의 값을 변경한다.\ne[g]+=d\ne[1]+=d\n\nprint(e[a],e[g],e[1],sep=\"\\n\")\n변화량 d를 2단계 부모 노드와 1단계 전체 노드에 반영한다. 마지막으로 변경된 3단계 노드, 2단계 노드, 1단계 노드의 값을 순서대로 출력한다."
 },
 "21006": {
  "name": "박나은",
  "cls": "2-10",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "입력·리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 20줄을 오류 없이 완벽 재현",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\n\nfor i in range(q):\n    a, b = map(int, input().split())\n\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n노드 정보 개수 입력\n부모 노드 저장\n노드 값 저장\n\n노드 정보 입력\nb의 부모 a\nc의 부모 b\na에 d 더하기\nb에 d 더하기\nc에 d 저장\n\n질의 개수 입력\n\n질의 입력\n\nb의 값 출력\n\n변경할 값의 차이 계산\n\n현재 노드 값 변경\n부모 노드로 이동"
 },
 "21007": {
  "name": "서호영",
  "cls": "2-10",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "입력·리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 22줄 재현. 'input.spilt()'(괄호 누락·철자), 'nange' 오타 등 사소한 실수",
  "note": "",
  "code": "n = int(input())\np = [0] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n01  입력값을 정수로 바꿔 n에 저장\n02  부모 노드를 저장할 리스트 p 선언\n03  노드별 사용량을 저장할 리스트 e 선언\n05~11 반복문으로 n개의 사용량 정보 입력\n06  합계, 구, 용도 노드 번호와 사용량 입력, a는 합계, b는 구, c는 용도, d는 사용량\n07  b구는 a합계의 자식 노드\n08  c용도는 b구의 자식 노드\n09  a합계에 d만큼 누적\n10 b구에 d만큼 누적\n11 c용도에 d 저장\n13 입력값을 정수로 바꿔 q에 저장\n14~22  반복문으로 q개의 작업 진행\n15  작업 번호와 노드 번호 입력\n16~17  작업 번호가 0이면, b번 노드 값 출력\n18  0이 아니면 (a번 노드 갱신)\n19 새 값과 현재 값의 차이 c 계산\n20  최상위 노드가 아니면 반복\n21  a번 노드에 c만큼 누적\n22  부모 노드로 이동"
 },
 "21008": {
  "name": "우정원",
  "cls": "2-10",
  "scores": [
   4,
   5,
   5,
   4
  ],
  "total": 18,
  "ev": "제품 리스트·딕셔너리 내포 입력·대형/소형 분류 합산·변화량 딕셔너리·min/max(key)·f-string 변화율 출력까지 활동지 코드 11줄 재현. 두 번째 출력의 분모 d[inc]를 d[dec]로 씀",
  "note": "",
  "code": "p = ['에틸렌', '프로필렌', '벤젠', '부타디엔', '톨루엔', '자일렌']\nd = {x: [float(input()), float(input())] for x in p}\n\nlarge = small = 0\nfor x in p:\n    if d[x][0] >= 5000: large += d[x][0]\n    else: small += d[x][0]\n\nch = {x: d[x][1] - d[x][0] for x in p}\ndec, inc = min(ch, key=ch.get), max(ch, key=ch.get)\n\nprint(f\"\\n최대 감소: {dec} (2021년: {d[dec][0]:,.0f}, 변화율: {ch[dec]/d[dec][0]*100:.1f}%)\")\nprint(f\"최대 증가: {inc} (2021년: {d[inc][0]:,.0f}, 변화율: {ch[inc]/d[inc][0]*100:.1f}%)\")\n\n1. 데이터 입력 및 구조화\n분석 대상인 기초유분 6개 제품명을 리스트 p에 저장하고, 딕셔너리 컴프리헨션을 통해 각 제품의 2021년·2023년 생산량을 순서대로 입력받아 딕셔너리 d에 쌍으로 구조화한다.\n\n2. 3층 트리 노드 분류 및 합산\n반복문과 조건문(if-else)을 활용해 2021년 생산량이 5,000천 톤 이상인 대형 제품군(large)과 미만인 소형 제품군(small)으로 중간 노드를 분류하여 각 그룹의 합계를 산출한다.\n\n3. 변화량 계산 및 최대·최소 탐색\n딕셔너리 컴프리헨션으로 '2023년 생산량 - 2021년 생산량'을 계산해 변화량 딕셔너리(ch)를 생성하고, 내장 함수 min()과 max()로 최대 감소 제품(dec)과 최대 증가 제품(inc)을 탐색한다.\n\n4. 결과 및 변화율 출력\n탐색된 두 제품의 이름, 2021년 원래 생산량, '(변화량 ÷ 2021년 생산량) × 100' 공식으로 계산한 소수점 첫째 자리 변화율(%)을 출력한다."
 },
 "21009": {
  "name": "이정원",
  "cls": "2-10",
  "scores": [
   3,
   5,
   3,
   5
  ],
  "total": 16,
  "ev": "입력·리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 20줄을 그대로 재현. [실행 불가] 'p = [ ]*1000'(빈 리스트라 p[b] 대입 시 IndexError, 활동지 코드의 오류 그대로), 'Print' 대문자, 20줄 'a = p[a]'를 'q = P[a]'로 씀",
  "note": "",
  "code": "n = int(input())\np = [ ] * 1000\ne = [0] * 1000\n\nfor i in range(n):\n    # 부모 노드, 대륙 노드, 국가 노드, 배출량 순서로 입력\n    a, b, c, d = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    e[a] += d\n    e[b] += d\n    e[c] = d\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while(a > 0):\n            e[a] = e[a] + c\n            a = p[a]\n\n\np는 각 노드의 부모 노드 번호를, e는 각 노드의 온실가스 배출량을 저장함. 반복문을 이용해 국가별 배출량을 입력받고, 부모 노드와 자식 노드의 관계를 설정하여 대륙별·전체 배출량을 누적함.\n작업 번호가 0이면 해당 노드에 저장된 온실가스 배출량을 출력함.\n국가의 배출량이 변경되면 기존 값과 새로운 값의 차이를 계산함. while 반복문으로 부모 노드를 따라 이동하며 대륙별·전체 배출량을 갱신함."
 },
 "21010": {
  "name": "이채은",
  "cls": "2-10",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모/회수량 리스트, 다중 대입 트리 연결·누적, 질의 입력·변화량 계산·조회, 한 줄 while 상위 갱신까지 활동지 압축 코드 10줄 완벽 재현",
  "note": "",
  "code": "p, e = [0] * 1000, [0] * 1000\nfor _ in range(int(input())):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c] = a, b\n    e[a], e[b], e[c] = e[a] + d, e[b] + d, e[c] + d\nfor _ in range(int(input())):\n    a, b = map(int, input().split())\n    c = b - e[a]\n    if a == 0: print(e[b])\n    while a > 0: e[a], a = e[a] + c, p[a]\n\n01~02\n부모 노드와 회수량을 저장할 리스트를 만들고, 지역 수만큼 반복한다\n03~05\n부모·자식 관계를 연결하고 초기 회수량을 누적 저장한다\n06~08\n 작업 횟수만큼 반복하며 작업 번호와 값을 입력받고 변화량을 계산한다\n09~10\n 작업 번호가 0이면 해당 노드의 총 회수량을 출력하고, 아니면 최상위 부모 노드까지 변화량을 더해 갱신한다"
 },
 "21011": {
  "name": "이혜은",
  "cls": "2-10",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "iter/next 입력·부모/값 리스트·트리 저장·조회/갱신·while 부모 이동까지 활동지 코드 21줄 재현. 'e [0]*7'에서 '=' 누락",
  "note": "",
  "code": "data = iter(map(int, input().split()))\n\nn = next(data)\np = [0] * 7\ne = [0] * 7\nfor i in range(n):\n    a, b, c = next(data), next(data), next(data)\n    p[b] = a\n    e[a] += c\n    e[b] = c\n\nq = next(data)\nfor i in range(q):\n    a, b = next(data), next(data)\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] += c\n            a = p[a]\n\n1줄 입력된 숫자를 정수로 변환해 순서대로 저장한다.\n3~5줄 노드 개수 n과 부모 노드 리스트 p, 노드 값 리스트 e를 만든다.\n6~7줄 반복문으로 경로와 노드 값을 입력받는다.\n8~10줄 부모 노드를 저장하고 자식 노드의 값을 부모 노드에 더한다.\n12~14줄 명령 개수를 입력받고 명령을 하나씩 읽는다.\n15~16줄 명령이 0이면 해당 노드의 값을 출력한다.\n17~19줄 노드 값의 변경량을 계산하고 부모 노드로 이동할 준비를 한다.\n20~21줄 변경량을 현재 노드에 더하고 부모 노드로 이동하며 합계를 갱신한다."
 },
 "21012": {
  "name": "장서우",
  "cls": "2-10",
  "scores": [
   2,
   5,
   4,
   4
  ],
  "total": 15,
  "ev": "부모/생산량 리스트·입력·트리 저장·조회/갱신·부모·조부모 직접 갱신 20줄 흐름 재현. 부모 저장·값 누적에서 b와 c를 혼동(p[c]=b를 p[a]=b, e[c]=d를 e[b]=d 등), if/else가 for 본문 밖으로 들여쓰기 어긋남",
  "note": "",
  "code": "p = [0] * 10\ne = [0] * 10\n\nn = int(input())\n\nfor i in range(n):\n    a, b, c, d = map(int, input().split())\n    p[c] = b\n    p[b] = a\n    e[c] = d\n    e[b] += d\n    e[a] += d\n\nq = int(input())\n\nfor i in range(q):\n    a, b = map(int, input().split())\n\n    if a == 0:\n        print(e[b])\n    else:\n        c = b - e[a]\n        e[a] += c\n        e[p[a]] += c\n        e[p[p[a]]] += c\n\n부모 노드를 저장할 리스트 생성\n생산량을 저장할 리스트 생성\n에너지원 개수 입력\n입력한 개수만큼 반복\n부모 노드, 중간 노드, 자식 노드, 생산량 입력\n자식 노드의 부모 노드 저장\n중간 노드의 부모 노드 저장\n자식 노드의 생산량 저장\n중간 노드 생산량에 더하기\n최상위 노드 생산량에 더하기\n작업 횟수 입력\n작업 횟수만큼 반복\n작업 종류와 노드 번호 또는 새 생산량 입력\n조회 작업인지 확인\n해당 노드의 생산량 출력\n생산량 변경 작업 실행\n생산량 변화량 계산\n해당 노드의 생산량 변경\n부모 노드의 생산량 갱신\n최상위 노드의 생산량 갱신"
 },
 "21013": {
  "name": "장윤영",
  "cls": "2-10",
  "scores": [
   4,
   5,
   4,
   5
  ],
  "total": 18,
  "ev": "경로·부모·거리·그늘·햇빛 리스트, 구간 입력·append·부모 누적, lambda 기반 최단/최소 노출 경로, 허용 시간 내 추천·결과 출력까지 활동지 코드 37줄 재현(뒷면 포함). 26줄에서 'recommended = shortest'와 for문을 한 줄로 합쳐 씀",
  "note": "",
  "code": "routes = [\"\", \"\", \"A\", \"B\", \"C\"]\nparents = [0, 0, 1, 1, 1]\ndistance = [0] * 5\nshade = [0] * 5\nsun = [0] * 5\n\n# 구간을 추가하고 부모 경로에 구간 값을 누적한다.\nfor _ in range(int(input())):\n route, segment, meters, shade_s, sun_s = input().split()\n parents.append(routes.index(route))\n distance.append(int(meters))\n shade.append(int(shade_s))\n sun.append(int(sun_s))\n node = len(parents) - 1\n parent = parents[node]\n distance[parent] += distance[node]\n shade[parent] += shade[node]\n sun[parent] += sun[node]\n\nroute_nodes = range(2, 5)\ntime = [shade[i] + sun[i] for i in range(len(parents))]\nshortest = min(route_nodes, key=lambda i: (distance[i], time[i]))\nleast_sun = min(route_nodes, key=lambda i: (sun[i], time[i]))\n\nlimit = time[shortest] + 60\nrecommended = shortest\nfor i in route_nodes:\n if time[i] <= limit:\n  if (sun[i], time[i]) < (sun[recommended], time[recommended]):\n   recommended = i\n\nfor i in route_nodes:\n print(f\"{routes[i]}: {distance[i]}m, 소요 {time[i]}초, 노출 {sun[i]}초\")\nprint(\"최단거리 경로:\", routes[shortest])\nprint(\"최소 노출 경로:\", routes[least_sun])\nprint(f\"허용 소요 시간: {limit}초\")\nprint(\"추천 경로:\", routes[recommended])\nprint(f\"추가 소요 시간: {time[recommended] - time[shortest]}초\")\nprint(f\"감소한 노출 시간: {sun[shortest] - sun[recommended]}초\")\n부모 노드에 값을 누적: 부모 번호를 리스트에 저장한다. 1번은 뿌리, 2~4번은 A, B, C, 5번부터는 입력 순서대로 구간이다. 구간을 추가할 때 부모 경로의 합계를 갱신한다.\n\n경로 비교와 추천: 거리와 노출 시간이 같으면 총소요 시간으로 비교한다. 허용 소요 시간과 같은 경우도 추천 후보에 포함된다."
 },
 "21014": {
  "name": "정윤서",
  "cls": "2-10",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모/발생량 리스트·float 입력·다중 대입 트리 저장·세미콜론 누적·조회(round)/갱신·한 줄 while까지 활동지 압축 코드 13줄 완벽 재현",
  "note": "",
  "code": "p, e = [0] * 30, [0.0] * 30\n\nfor _ in range(int(input())):\n    a, b, c, d = map(float, input().split())\n    a, b, c = int(a), int(b), int(c)\n    p[b], p[c], e[c] = a, b, d\n    e[a] += d; e[b] += d\n\nfor _ in range(int(input())):\n    a, b = map(float, input().split())\n    a = int(a)\n    if a == 0: print(round(e[int(b)], 1))\n    else:\n        c = b - e[a]\n        while a: e[a] += c; a = p[a]\n01: 부모 노드 번호(p)와 폐기물 발생량(e)을 저장할 리스트를 초기화한다.\n02~06: 입력받은 개수만큼 반복하며 전체(a)-지역(b)-배출 유형(c)의 부모-자식 관계를 연결하고, 각 노드에 폐기물 발생량(d)을 저장 및 누적한다.\n07~09: 수행할 작업 횟수만큼 반복하며 작업 번호(a)와 대상 값(b)을 입력받는다.\n10: a가 0이면 조회 명령이므로 b번 노드의 폐기물 발생량을 출력한다.\n11~13: a가 0이 아니면 갱신 명령이므로 증감량(c)을 계산한 뒤, 최상단 전체 노드까지 부모를 따라 올라가며 발생량을 갱신한다."
 },
 "21015": {
  "name": "정현지",
  "cls": "2-10",
  "scores": [
   2,
   4,
   4,
   4
  ],
  "total": 14,
  "ev": "구·군/용도 리스트, 이중 for 부모 설정, 구·군 합계, 노드 갱신 while, 결과 출력 흐름 재현. 활동지의 CSV 읽기(import csv·with open·DictReader) 대신 input 반복으로 바꿔 씀, 17줄 'e[1] += e[i+2]'를 'e[i+2] += 1'로, 23줄 'e[a] += c'를 'e[a] = c'로 씀",
  "note": "",
  "code": "import csv\n\ng = [\"군위군\", \"남구\", \"달서구\", \"달성군\", \"동구\", \"북구\", \"서구\", \"수성구\", \"중구\"]\nu = [\"관용\", \"자가용\", \"영업용\"]\np, e = [0]*38, [0]*38\n\nfor i in range(9):\n    p[i+2] = 1\n    for j in range(3):\n        p[11+i*3+j] = i+2\n\nwith open(\"대구광역시_행정동별 전기차 등록대수_20251031 (2)(1).csv\",\n          encoding=\"cp949\") as f:\n    for r in csv.DictReader(f):\n        i = g.index(r[\"행정동\"].split()[0])\n        for j in range(3):\n            for v in [\"승용\", \"승합\", \"화물\", \"특수\"]:\n                e[11+i*3+j] += int(r.get(u[j]+\"_\"+v, 0) or 0)\n\nfor i in range(9):\n    e[i+2] = sum(e[11+i*3:14+i*3])\n    e[1] += e[i+2]\n\na = 11+3*g.index(input(\"구·군: \"))+u.index(input(\"용도: \"))\nc = int(input(\"변경 대수: \"))\nwhile a > 0:\n    e[a] += c\n    a = p[a]\n\nprint(e[g.index(input(\"확인할 구·군: \"))+2])\n\n\nCSV 자료를 처리하기 위한 모듈을 불러오고, 부모 노드 번호와 등록 대수를 저장할 리스트를 만든다. (1=3)\n구·군 노드와 용도별 자식 노드의 부모 관계를 설정한다. (4-6)\nCSV 자료를 읽고 같은 구·군에 속한 행정동의 등록 대수를 용도별로 합산하여 자식 노드에 저장한다. (7-14)\n자식 노드의 등록 대수를 합산하여 구·군 노드와 대구광역시 노드에 전체 등록 대수를 저장한다. (14-16)\n입력한 구·군과 용도에 해당하는 노드를 찾아 등록 대수를 변경하고, 부모 노드의 값도 갱신한다. (17-19)\n입력한 구·군 노드의 전체 등록 대수를 출력한다. (22)"
 },
 "21016": {
  "name": "조선재",
  "cls": "2-10",
  "scores": [
   4,
   5,
   5,
   5
  ],
  "total": 19,
  "ev": "노드 수·부모 리스트 입력, 단말 값 입력, 역순 반복 상위 누적, 조회 결과 저장·갱신·while 부모 이동·한꺼번에 출력까지 활동지 코드 22줄 재현. 'r = []'를 'r = [0]'으로 씀",
  "note": "",
  "code": "n = int(input())\np = list(map(int, input().split()))\ne = [0] * (n+1)\n\nfor i in range(5, n+1):\n    e[i] = int(input())\n\nfor i in range(n, 1, -1):\n    e[p[i]] += e[i]\n\nr = []\nfor _ in range(int(input())):\n    a, b = map(int, input().split())\n    if a == 0:\n        r.append(e[b])\n    else:\n        c = b - e[a]\n        while a:\n            e[a] += c\n            a = p[a]\n\nprint(*r, sep=\"\\n\")\n1~3: 노드 개수 입력 및 부모 노드와 검출량을 저장할 리스트 생성\n\n5~6: 반복문을 이용하여 단말 노드의 검출량 입력 및 저장\n\n8~9:반복문을 이용하여 하위 노드의 검출량을 부모 노드에 누적하여 저장\n\n11~12: 조회 및 수정 작업 횟수 입력, 조회 결과를 저장할 리스트 생성\n\n13~17: 반복문을 이용하여 노드 조회 또는 검출량 수정 수행\n\n18~20: 수정된 검출량을 부모 노드까지 누적하여 갱신\n\n22: 저장된 조회 결과를 줄바꿈하여 한꺼번에 출력"
 },
 "21017": {
  "name": "조예나",
  "cls": "2-10",
  "scores": [
   3,
   5,
   5,
   4
  ],
  "total": 17,
  "ev": "4단계 트리 부모/합계/개수 저장, 평균 조회(round), 갱신·while 부모 이동까지 활동지 코드 29줄 재현. while 본문 'e[a] = e[a] + c'를 'p[a] = e[a] + c'로 씀",
  "note": "",
  "code": "n = int(input())\np = [0] * 28\ne = [0] * 28\ncnt = [0] * 28\n\nfor i in range(n):\n    a, b, c, d, v = map(int, input().split())\n    p[b] = a\n    p[c] = b\n    p[d] = c\n    e[a] += v\n    e[b] += v\n    e[c] += v\n    e[d] = v\n    cnt[a] += 1\n    cnt[b] += 1\n    cnt[c] += 1\n    cnt[d] = 1\n\nq = int(input())\nfor i in range(q):\n    a, b = map(int, input().split())\n    if a == 0:\n        print(round(e[b] / cnt[b], 2))\n    else:\n        c = b - e[a]\n        while a > 0:\n            e[a] = e[a] + c\n            a = p[a]\n\n[1~4줄]\n자료 개수 n을 입력받고, 부모 노드 번호(p), 값의 합계(e), 값의 개수(cnt)를 저장할 배열을 만든다. (노드 27개, 0번은 끝 표시)\n\n[6~7줄]\nn번 반복하며 한 줄에 정수 5개를 입력받는다. a는 전체, b는 성별, c는 지역, d는 나이 구간 노드 번호이고, v는 평균 혈당이다.\n\n[8~10줄]\n부모 관계를 저장한다. (b의 부모는 a, c의 부모는 b, d의 부모는 c)\n\n[11~18줄]\n전체, 성별, 지역 노드의 합계에 v를 더하고 개수를 1 늘린다. 개별 노드 d에는 v와 개수 1을 저장한다.\n\n[20~22줄]\n질문 개수 q를 입력받고, q번 반복하며 숫자 두 개 a, b를 입력받는다.\n\n[23~24줄]\na가 0이면 노드 b의 합계 ÷ 개수를 소수 둘째 자리까지 반올림해 평균으로 출력한다.\n\n[25~29줄]\na가 0이 아니면 개별 노드 a의 측정값을 b로 변경한다. 변화량(새 값 − 기존 값)을 계산하고, 해당 노드부터 부모 노드를 따라 올라가며 각 노드의 합계를 갱신한다. 이를 통해 평균 혈당을 다시 계산할 수 있다."
 },
 "21018": {
  "name": "하지우",
  "cls": "2-10",
  "scores": [
   2,
   4,
   3,
   3
  ],
  "total": 12,
  "ev": "입력·부모/BOD 저장, 공정 단계 리스트·조합 내포, 월별 BOD 리스트, 지점 반복과 등급 조건 표현식까지 앞부분 재현. 월평균 출력문이 반복문 안으로 들어가고 'months.split(...)'로 오기, 'b = e[i]+2' 오류, 필요 제거량·후보 공정·추천·지점별 출력(15~18줄) 누락",
  "note": "",
  "code": "n = int(input())\np, e = [0] * 20, [0] * 20\nfor _ in range(n):\n    a, b, c, d = map(int, input().split())\n    p[b], p[c] = a, b\n    e[c] = d\nstage2 = [(\"모래여과\", 8), (\"막여과\", 10)]\nstage3 = [(\"소독\", 0), (\"활성탄\", 9)]\ncomb = [(16+x+y, f\"응집·침전→{s}→{t}\") for s,x in stage2 for t,y in stage3]\nmonths = [2.1, 3.4, 3.3, 3.3, 2.9, 2.8, 2.4, 2.2, 1.8, 1.8, 1.7, 1.8]\nprint(\"월평균 BOD:\", round(sum(months)/12, 2), \"최고:\", months.index(max(months))+1, \"월\")\nfor i in range(5, 13):\n    b = e[i] / 10\n    grade = \"매우 좋음\" if b <= 1 else \"좋음\" if b <= 2 else \"약간 좋음\" if b <= 3 else \"보통\" if b <= 5 else \"나쁨 이하\"\n    need = e[i] - 10\n    cand = [x for x in comb if x[0] >= need] if need > 0 else [(0, \"추가 처리 불필요\")]\n    result = min(cand, key=lambda x: x[0])[1] if cand else \"현재 공정으로 불가\"\n    print(i, \"BOD:\", b, grade, \"추천:\", result)\n\n아아 이제 정확히 알겠어! 코드의 몇 번째 줄부터 몇 번째 줄까지인지 표시하고, 해당 부분의 기능을 설명해 줄게.\n\n### 코드 설명\n\n1~2줄: 입력 횟수를 받고 부모 노드와 BOD 값을 저장할 리스트를 생성한다.\n\n3~6줄: 반복문으로 트리의 부모·자식 관계를 설정하고 각 지점의 BOD 값을 저장한다.\n\n7~8줄: 정수 공정의 종류와 단계별 BOD 제거량을 리스트에 저장한다.\n\n9줄: 반복문을 이용해 가능한 모든 정수 공정 조합을 생성하고 조합별 총 BOD 제거량을 계산한다.\n\n10~11줄: 월별 BOD 자료를 저장하고 월평균 BOD와 BOD가 가장 높은 달을 계산하여 출력한다.\n\n12~13줄: 각 지점을 반복하여 확인하고 BOD 값을 계산한다.\n\n14줄: 조건문을 이용해 BOD 수치에 따른 수질 등급을 판정한다.\n\n15줄: 목표 BOD인 1.0mg/L를 기준으로 필요한 BOD 제거량을 계산한다.\n\n16줄: 필요 제거량 이상을 제거할 수 있는 공정 조합만 후보로 선정한다.\n\n17줄: 후보 중 총 제거량이 가장 작은 공정을 추천하고, 조건을 만족하는 조합이 없으면 처리 불가를 표시한다.\n\n18줄: 지점별 BOD, 수질 등급 및 추천 정수 공정을 출력한다."
 },
 "21019": {
  "name": "허윤서",
  "cls": "2-10",
  "scores": [
   5,
   5,
   5,
   5
  ],
  "total": 20,
  "ev": "부모/값 리스트, 다중 대입 트리 연결·누적, 조회 결과 리스트 저장, 갱신 while 부모 이동, 한꺼번에 출력까지 활동지 코드 19줄 완벽 재현",
  "note": "",
  "code": "n = int(input())\np, e = [0] * 1000, [0] * 1000\nfor i in range(n):\n  a, b, c, d = map(int, input().split())\n  p[b], p[c] = a, b\n  e[a], e[b], e[c] = e[a] + d, e[b] + d, d\n\nres = []\nfor i in range(int(input())):\n  a, b = map(int, input().split())\n  if a == 0:\n    res.append(e[b])\n  else:\n    c = b - e[a]\n    while a:\n      e[a] += c\n      a = p[a]\n\nprint(*res, sep=\"\\n\")\n\n\n\n01~02: 노드 개수(n)를 입력받고, 부모 노드 번호(p)와 값(e)을 저장할 리스트를 초기화한다.\n\n03~06: 입력 횟수만큼 반복하며 부모-자식 관계를 연결하고, 각 노드와 상위 노드에 값(d)을 누적한다.\n\n07~10: 쿼리(작업) 개수를 입력받고, 작업 번호(a)와 대상(b)을 입력받아 조건에 따라 다르게 처리한다.\n\n11~12: a가 0이면 조회 명령이므로 해당 노드의 값(e[b])을 결과 리스트에 저장한다.\n\n13~17: a가 0이 아니면 갱신 명령이므로 변화량(c)을 계산한 뒤, 루트 노드까지 거슬러 올라가며 값을 연쇄 갱신한다.\n\n18~19: 결과 리스트에 모인 값들을 줄바꿈 기준으로 한 번에 출력한다."
 }
};
