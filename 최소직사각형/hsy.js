/**
* - 각 명함은 회전 가능하므로, (긴 변, 짧은 변) 형태로 통일해 둔다.
* - 그 뒤 전체 명함 중
*   - 긴 변의 최댓값 = 지갑의 가로
*   - 짧은 변의 최댓값 = 지갑의 세로
* - 정답 = (긴 변 최댓값) * (짧은 변 최댓값)
**/
function solution(sizes) {
    const rotated = sizes.map(([w,h]) => w < h ? [h,w] : [w,h]);
    
    const maxSize = rotated.reduce((acc, [w,h]) => {
        if (acc[0] < w) acc[0] = w;
        if (acc[1] < h) acc[1] = h;
        return acc;
    }, [0,0]);
    
    return maxSize[0] * maxSize[1];
}
