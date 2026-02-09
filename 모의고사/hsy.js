// 문제 조건: 최대 10000문제 & 3명 => O(N) 가능
/**
* 1. 수포자 3명 찍는 주기가 정해짐 -> 별도 상수로 관리
* 2. answers를 loop돌리면서 수포자가 정답을 맞췄는지 확인
* 3. 정답을 많이 맞춘 사람 리턴
    -> 가장 높은 점수를 받은 사람이 여럿일 경우, 학생 오름차순 정렬
**/

const s1 = [1,2,3,4,5]; // 주기 5
const s2 = [2,1,2,3,2,4,2,5]; // 주기 8
const s3 = [3,3,1,1,2,2,4,4,5,5]; // 주기 10

function solution(answers) {
    const arr = [0,0,0];
    for (let i=0; i<answers.length; i++) {
        if (s1[i%5] === answers[i]) arr[0] += 1;
        if (s2[i%8] === answers[i]) arr[1] += 1;
        if (s3[i%10] === answers[i]) arr[2] += 1;
    }
    
    const max = Math.max(...arr);
    const answer = [];
    for (let i=0; i<arr.length; i++) {
        if (max === arr[i]) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}
