function insertIntoHeap(heap, val){
    if(heap.length < 1){
        heap.length = 2;
        heap[1] = val;
    }
    else{
        var hold;
        heap.push(val);
        i = heap.length -1
        while(heap[i] < heap[Math.floor(i / 2)]){
            hold = heap[i]
            heap[i] = heap[Math.floor(i / 2)]
            heap[Math.floor(i / 2)] = hold
            i /= 2
        }
    }
    return heap
}