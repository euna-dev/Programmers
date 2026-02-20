/*
 * 1) 입력 크기
 * - n = number.length  (2 <= n <= 1,000,000)
 * - k (1 <= k < n)
 *
 * 2) 자료구조
 * - 스택
 *
 * 3) 아이디어
 * - 가장 큰 수를 만들려면 왼쪽 자리부터 최대한 크게 만들어야 함
 * - number를 왼쪽부터 한 자리씩 보면서 digit를 stack에 넣는다.
 * - stack의 마지막이 digit보다 작고, 아직 제거 횟수가 남아 있으면:
 *     -> top을 제거해서 digit이 더 왼쪽으로 오게 만든다.
 *   이 과정을 더 이상 못 지울 때까지 반복한다.
 * - 끝까지 순회했는데도 remove가 남아 있으면:
 *     -> 이미 스택은 내림차순에 가까운 형태,
 *        뒤에서 지우는 게 최선이므로 stack의 끝에서 remove를 잘라낸다.
 */
function solution(number, k) {
  const stack = [];
  let remove = k;

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];

    while (remove > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      remove--;
    }
    stack.push(digit);
  }

  if (remove > 0) stack.length -= remove;

  return stack.join("");
}
// TC: O(n)
// SC: O(n)
