/*
 * [문제 요약]
 * - 보트 1대에 최대 2명
 * - 두 사람 합 <= limit
 * - 보트 개수 최소화
 *
 * 1) 입력 크기
 * - N = people.length (1 ~ 50,000)
 * - 사람 무게: 40 ~ 240
 * - limit: 40 ~ 240
 *
 * 2) 자료구조
 * - 정렬된 배열 (people)
 * - 투 포인터: i(가벼운 쪽), j(무거운 쪽)
 *
 * 3) 아이디어
 * - 가장 무거운 사람(j)을 반드시 태워야 함.
 * - j와 i를 같이 태울 수 있으면 (people[i] + people[j] <= limit):
 *     -> "j를 살릴 수 있는 가장 가벼운 사람" i와 함께 태우는 게 이득
 *        (가벼운 사람을 아껴봐야 더 무거운 사람과는 더 못 탄다)
 * - 같이 못 타면:
 *     -> people[i]가 가장 가벼운 사람인데도 limit을 넘으므로
 *        j는 누구와도 같이 못 탄다 => 혼자 타야 함
 */
function solution(people, limit) {
  // TC: O(N log N)
  people.sort((a, b) => a - b);

  let i = 0;
  let j = people.length - 1;
  let boats = 0;

  // TC: O(N)
  while (i <= j) {
    // j(가장 무거운 사람) + i(가장 가벼운 사람) 조합이 되면 같이 태움
    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      // 가장 가벼운 사람과도 못 타면 j는 누구와도 못 탐 -> 혼자
      j--;
    }
    boats++;
  }

  return boats;
}
// TC: O(N log N)
// SC: O(N)
