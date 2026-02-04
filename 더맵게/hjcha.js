class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap[0];
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            
            if (this.heap[parentIndex] <= this.heap[index]) break;
            
            [this.heap[parentIndex], this.heap[index]] = 
            [this.heap[index], this.heap[parentIndex]];
            
            index = parentIndex;
        }
    }
    
    bubbleDown() {
        let index = 0;
        
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;
            
            if (leftChild < this.size() && 
                this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            
            if (rightChild < this.size() && 
                this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            
            if (smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] = 
            [this.heap[smallest], this.heap[index]];
            
            index = smallest;
        }
    }
}

function solution(scoville, K) {
    let answer = 0;
    const minHeap = new MinHeap();
    
    // 모든 스코빌 지수를 힙에 삽입
    for (const s of scoville) {
        minHeap.push(s);
    }
    
    // 최솟값이 K 이상이 될 때까지 반복
    while (minHeap.peek() < K) {
        // 음식이 1개 이하면 더 이상 섞을 수 없음
        if (minHeap.size() < 2) {
            return -1;
        }
        
        // 가장 맵지 않은 음식과 두 번째로 맵지 않은 음식을 꺼냄
        const first = minHeap.pop();
        const second = minHeap.pop();
        
        // 새로운 음식의 스코빌 지수å 계산
        const mixed = first + (second * 2);
        
        // 새로운 음식을 힙에 추가
        minHeap.push(mixed);
        
        answer++;
    }
    
    return answer;
}