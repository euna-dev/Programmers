/*
 * 1. 입력 크기
 * N = name.length (1 ~ 20)
 *
 * 2. 아이디어
 * - 목표: "A"로만 이루어진 초기 상태에서 name을 만들 때 필요한 조이스틱 최소 조작 횟수.
 *
 * (1) 세로 조작(위/아래): 각 글자는 독립적으로 최소 비용을 계산해서 합산 가능
 *  - A -> c 를 위로 올리는 횟수: (c - 'A')
 *  - A -> c 를 아래(Z 방향)로 내리는 횟수: ('Z' - c + 1)
 *  - 글자별 비용 = min(up, down)
 *
 * (2) 가로 조작(좌/우): 커서 이동의 최소값을 찾아야 함
 *  - 기본값: 오른쪽으로만 끝까지 가면 이동 = N - 1
 *  - 하지만 중간에 'A'가 연속으로 길게 있는 구간은 "갔다가 되돌아오기" 또는 "끝쪽부터 먼저 처리"가 더 이득일 수 있음.
 *  - i 지점에서 방향을 꺾는다고 가정하고,
 *    i+1부터 연속된 'A'가 끝나는 지점을 j라 하면 (j는 'A'가 아닌 첫 인덱스, 없으면 N)
 *
 *    1) 오른쪽으로 i까지 갔다가 되돌아간 뒤, 끝쪽(뒤) 남은 부분 처리
 *      이동 = 2*i + (N - j)
 *
 *    2) 뒤쪽을 먼저 처리하는 형태(왼쪽 이동을 더 활용)
 *      이동 = i + 2*(N - j)
 *
 *  - 모든 i에 대해 위 두 값을 비교해 가로 이동 최소값을 갱신
 *
 * 3. 자료구조
 * - 정수 누적 변수(vertical, move)
 *
 * 4. 반례/체크 포인트
 * - 전부 'A'인 경우: 세로 비용 0, 가로 이동도 사실상 0이 최소
 *   (move의 기본값 N-1이지만, i=0에서 j가 N이 되어 move가 0으로 갱신됨)
 * - 뒤쪽에만 수정할 글자가 있는 경우: 왼쪽으로 먼저 가는 게 이득
 * - 중간에 'A'가 길게 연속된 경우: 그 구간을 건너뛰기 위해 방향 전환이 유리
 *
 * 5. 시간/공간 복잡도
 * - TC: O(N^2) (각 i마다 j를 while로 전진시키는 구현은 최악 N번 * N)
 *   N <= 20 이라 충분히 작음.
 * - SC: O(1)
 */

function solution(name) {
  const n = name.length;

  // 세로
  // SC: O(1)
  let vertical = 0;
  const A = "A".charCodeAt(0);
  const Z = "Z".charCodeAt(0);

  for (let i = 0; i < n; i++) {
    const c = name.charCodeAt(i);
    const up = c - A;
    const down = Z - c + 1;
    vertical += Math.min(up, down);
  }

  // 가로
  // SC: O(1)
  let move = n - 1;

  // TC: O(N^2)
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    while (j < n && name[j] === "A") j++;

    move = Math.min(move, 2 * i + (n - j), i + 2 * (n - j));
  }

  return vertical + move;
}
