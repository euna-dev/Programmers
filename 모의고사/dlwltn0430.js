function solution(answers) {
   const answer = []
   const one = [1, 2, 3, 4, 5]
   const two = [2, 1, 2, 3, 2, 4, 2, 5]
   const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

   const onec = answers.filter((a, i) => a === one[i % one.length]).length
   const twoc = answers.filter((a, i) => a === two[i % two.length]).length
   const threec = answers.filter((a, i) => a === three[i % three.length]).length

   const max = Math.max(onec, twoc, threec)

   if (onec === max) {
      answer.push(1)
   }
   if (twoc === max) {
      answer.push(2)
   }
   if (threec === max) {
      answer.push(3)
   }

   return answer
}
