function solution(citations) {
    // 내림차순 정렬
    citations.sort((a, b) => b - a);
    
    let hIndex = 0;
    
    for (let i = 0; i < citations.length; i++) {
        // i+1편의 논문이 있고, 각각 citations[i]번 인용됨
        // h의 후보는 min(i+1, citations[i])
        const h = Math.min(i + 1, citations[i]);
        
        // h-index는 증가하다가 감소하므로 최댓값 갱신
        if (h > hIndex) {
            hIndex = h;
        } else {
            break; // 더 이상 증가하지 않으므로 종료
        }
    }
    
    return hIndex;
}