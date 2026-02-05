function solution(numbers) {
    // 1. 숫자를 문자열로 변환
    const strNumbers = numbers.map(String);
    // [6, 10, 2] -> ["6", "10", "2"]
    
    // 2. 커스텀 정렬
    strNumbers.sort((a, b) => {
        const case1 = b + a;  // "106"
        const case2 = a + b;  // "610"
        return case1.localeCompare(case2);
        // "106" < "610" -> 음수 -> a가 뒤로
    });
    // ["6", "2", "10"]
    
    // 3. 문자열로 합치기
    const answer = strNumbers.join('');
    // "6210"
    
    // 4. 모든 숫자가 0인 경우 처리
    return answer[0] === '0' ? '0' : answer;
}