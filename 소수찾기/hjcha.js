function solution(numbers) {
    const nums = numbers.split(''); // 문자열을 개별 숫자 배열로 분리
    const set = new Set(); // 중복 제거를 위한 Set

    // 순열을 만들어 가능한 모든 숫자 조합 생성
    function permute(arr, current) {
        if (current.length > 0) {
            set.add(Number(current)); // 문자열을 숫자로 변환하여 저장 (011 → 11 중복 처리)
        }
        for (let i = 0; i < arr.length; i++) {
            // 현재 숫자를 선택하고 나머지로 재귀 호출
            permute([...arr.slice(0, i), ...arr.slice(i + 1)], current + arr[i]);
        }
    }

    permute(nums, '');

    // 만들어진 숫자 중 소수 개수 카운트
    let answer = 0;
    for (const num of set) {
        if (isPrime(num)) answer++;
    }
    return answer;
}

// 소수 판별 함수
function isPrime(n) {
    if (n < 2) return false; // 0, 1은 소수가 아님
    for (let i = 2; i <= Math.sqrt(n); i++) { // 제곱근까지만 확인하면 충분
        if (n % i === 0) return false; // 나누어지면 소수 아님
    }
    return true;
}