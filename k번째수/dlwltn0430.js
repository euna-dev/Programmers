function solution(array, commands) {
   let answer = []

   for (let i = 0; i < commands.length; i++) {
      start = commands[i][0]
      end = commands[i][1]
      index = commands[i][2]

      let sliced = array.slice(start - 1, end).sort((a, b) => a - b)
      answer.push(sliced[index - 1])
   }

   return answer
}
