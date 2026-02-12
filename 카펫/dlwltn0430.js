function solution(brown, yellow) {
   let answer = []
   let h = 1

   for (let w = 3; w < yellow + brown; w++) {
      h = (brown + yellow) / w

      if ((w - 2) * (h - 2) === yellow) {
         answer.push(w)
         answer.push(h)
         break
      }
   }

   return answer.reverse()
}
