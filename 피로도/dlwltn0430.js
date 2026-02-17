function solution(k, dungeons) {
   let answer = 0
   let visited = new Array(dungeons.length).fill(false)

   const DFS = (fp, count) => {
      for (let i = 0; i < dungeons.length; i++) {
         if (!visited[i] && dungeons[i][0] <= fp) {
            visited[i] = true
            DFS(fp - dungeons[i][1], count + 1)
            visited[i] = false
         }
         answer = Math.max(answer, count)
      }
   }

   DFS(k, 0)

   return answer
}
