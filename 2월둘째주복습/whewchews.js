// 1. 소수찾기
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const digits = numbers.split("");
  const N = digits.length;
  const used = Array(N).fill(false);
  const candidates = new Set();

  function dfs(curStr) {
    if (curStr.length > 0) {
      candidates.add(Number(curStr));
    }
    if (curStr.length === N) return;

    const tried = new Set();

    for (let i = 0; i < N; i++) {
      if (used[i]) continue;
      if (tried.has(digits[i])) continue;
      tried.add(digits[i]);

      used[i] = true;
      dfs(curStr + digits[i]);
      used[i] = false;
    }
  }

  dfs("");

  let count = 0;
  for (const num of candidates) {
    if (isPrime(num)) count++;
  }
  return count;
}

// 2. 모의고사
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const counts = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    const a = answers[i];
    for (let p = 0; p < 3; p++) {
      const pattern = patterns[p];
      if (pattern[i % pattern.length] === a) counts[p]++;
    }
  }

  const max = counts.reduce((m, v) => (v > m ? v : m), -Infinity);
  const res = [];
  for (let i = 0; i < 3; i++) if (counts[i] === max) res.push(i + 1);
  return res;
}
