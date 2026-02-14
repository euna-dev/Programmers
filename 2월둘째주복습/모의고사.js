// [복습] 모의고사 - 완전탐색
// 핵심: 각 수포자의 찍기 패턴을 배열로 만들고, 나머지 연산(%)으로 패턴을 반복 비교

function solution(answers) {
    // 수포자 1: 1,2,3,4,5 반복 (주기 5)
    // 수포자 2: 2,1,2,3,2,4,2,5 반복 (주기 8)
    // 수포자 3: 3,3,1,1,2,2,4,4,5,5 반복 (주기 10)
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    // 각 수포자의 맞힌 개수를 카운트
    const scores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < 3; j++) {
            // i % 패턴길이 → 패턴을 무한 반복하는 효과
            if (answers[i] === patterns[j][i % patterns[j].length]) {
                scores[j]++;
            }
        }
    }

    // 가장 많이 맞힌 점수
    const maxScore = Math.max(...scores);

    // 최고 점수를 받은 수포자 번호 배열 (1-indexed)
    const result = [];
    for (let i = 0; i < 3; i++) {
        if (scores[i] === maxScore) {
            result.push(i + 1);
        }
    }

    return result;
}
