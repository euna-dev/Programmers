function solution(n, lost, reserve) {
   const commonElements = reserve.filter((ele) => lost.includes(ele))
   let realLost = lost.filter((l) => !commonElements.includes(l)).sort((a, b) => a - b)
   let realReserve = reserve.filter((r) => !commonElements.includes(r)).sort((a, b) => a - b)

   let answer = n - realLost.length

   for (let i = 0; i < realReserve.length; i++) {
      if (realLost.includes(realReserve[i] - 1)) {
         answer++
         realLost = realLost.filter((ele) => ele !== realReserve[i] - 1)
      } else if (realLost.includes(realReserve[i] + 1)) {
         answer++
         realLost = realLost.filter((ele) => ele !== realReserve[i] + 1)
      }
   }

   return answer
}
