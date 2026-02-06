function solution(sizes) {
   let s = []
   let l = []

   for (let i = 0; i < sizes.length; i++) {
      if (sizes[i][0] < sizes[i][1]) {
         s.push(sizes[i][0])
         l.push(sizes[i][1])
      } else {
         s.push(sizes[i][1])
         l.push(sizes[i][0])
      }
   }

   return Math.max(...s) * Math.max(...l)
}
