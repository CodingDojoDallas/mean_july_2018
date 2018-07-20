
function removeFromMinHeap(heap){
    var remove = heap[1];
    var hold;
    hold = heap[1];
    heap[1] = heap[heap.length -1];
    heap[heap.length -1] = hold;
    heap.pop()
    var i = 1;
    if (heap[i] > heap[Math.floor(i * 2)]){        
        while(heap[i] > heap[Math.floor(i * 2)]){
            hold = heap[i]
            heap[i] = heap[Math.floor(i * 2)]
            heap[Math.floor(i * 2)] = hold
            i *= 2
        }
    }
    else if(heap[i] > heap[Math.floor(i * 2)+1]){
        while(heap[i] > heap[Math.floor(i * 2)+1]){
            hold = heap[i]
            heap[i] = heap[Math.floor(i * 2)+1]
            heap[Math.floor(i * 2)+1] = hold
            i *= 2
        }
    }
    console.log(heap);
    
return remove
}