function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];

  for (let i = 0; i <= answers.length - 1; i++) {
    const cur = answers[i];
    if (cur === first[i % first.length]) score[0]++;
    if (cur === second[i % second.length]) score[1]++;
    if (cur === third[i % third.length]) score[2]++;
  }

  const max = Math.max(score[0], score[1], score[2]);
  const answer = [];

  score.forEach((score, idx) => {
    if (score >= max) answer.push(idx + 1);
  });

  return answer;
}
