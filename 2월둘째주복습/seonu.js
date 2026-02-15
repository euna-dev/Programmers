// (1) 소수찾기

function solution(numbers) {
    const arr = numbers.split('')
    const result = new Set()
    const visited = new Array(numbers.length).fill(false)

    // 1)
    // 문자열로 만들수 있는 수 배열로 만들기 > DFS
    // 2)
    // set() 써서 중복 없애기
    // '011' 은 Number('011') 써서 앞에 없애기
    function combination(currentNum) {
        if (currentNum.length > 0) {
            result.add(Number(currentNum))
        }

        for(let i=0; i < arr.length; i++) {
            if (!visited[i]) {
                visited[i] = true
                result.add(Number(currentNum))
                combination(currentNum + arr[i])
                visited[i] = false
            }

        }

    }

    // 2)
    // 소수찾기
    // 에라토스테네스의 채 사용하기
    function isPrime(num) {
        if (num < 2) return false
        for (let i=2; i*i <= num ; i++) {
            if (num % i == 0) return false
        }
        return true
    }

    combination('')

    return Array.from(result).filter(isPrime).length
}


// (2) 조이스틱

function solution(name) {
    // 알파벳 올리기 -> Min(정방향, 역방향)
    // 연속된 A가 많은 쪽 피하기
    // 이동하기 -> Min(정방향 완전탐색, 처음위치 + 정방향 + 다시돌아오기 + 역방향, 처음위치 + 역방향 + 다시돌아오기 + 정방향)
    var ans = 0
    var nameArr = name.split('')
    var rightLeftSum = name.length - 1
    
    
    nameArr.map((v,i) => {
        let upMove = name[i].charCodeAt() - "A".charCodeAt()
        let downMove = 26 - upMove
        let upDownSum = Math.min(upMove, downMove)
        ans += upDownSum
    
        let idx = i + 1
        
        while (idx < name.length && name[idx] === 'A') {
            idx++
        }
        
        let straightMove = name.length - 1
        let rightMove = i * 2 + (name.length -idx)
        let leftMove = i + (name.length - idx) * 2
        
        rightLeftSum = Math.min(rightLeftSum, rightMove, leftMove)
        
    })
    
    ans += rightLeftSum
    return ans
}
