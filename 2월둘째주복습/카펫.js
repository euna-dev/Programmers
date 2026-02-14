// [복습] 카펫 - 완전탐색
// 핵심: 전체 격자 수(brown + yellow)의 약수 쌍을 찾고,
//       안쪽 노란 영역 = (가로-2) * (세로-2) 가 yellow와 같은지 확인

function solution(brown, yellow) {
    const total = brown + yellow;

    // 세로(h)는 3부터 시작 (테두리 위아래 1줄씩 + 노란색 최소 1줄)
    // h <= sqrt(total): 가로 >= 세로 조건을 유지하기 위해
    for (let h = 3; h <= Math.sqrt(total); h++) {
        if (total % h === 0) {
            const w = total / h;

            // 테두리를 제외한 안쪽 영역이 yellow와 일치하는지 확인
            if ((w - 2) * (h - 2) === yellow) {
                return [w, h];
            }
        }
    }
}
