// =================
// MIN HEAP - Remove
// ------------------------------- [ Objectives ]
// <>  Implement a min heap ( or MH ))
// <>  Shall be able to remove values from the MH
// ==============================================

function remove(heap){
   var min   = heap[1]; // The 1st was selected since it's a min-heap
   var index = 1;

   // Base case
   // -------------------------------------------------------------------
   [ heap[index], heap[heap.length -1] ] = [ heap[heap.length -1], heap[index] ];
   // -------------------------------------------------------------------

   // remove target item...
   heap.pop();

   // Left
   while(heap[index] > heap[Math.floor(index * 2)]) {
      [ heap[index], heap[Math.floor(index * 2)] ] =
      [ heap[Math.floor(index * 2)], heap[index] ];
      index *= 2;
   }
   // Right
   while(heap[index] > heap[Math.floor(index * 2)+1]) {
      [ heap[index], heap[Math.floor(index * 2)+1] ] =
      [ heap[Math.floor(index * 2)+1], heap[index] ];
      index *= 2;
   }
   console.log(heap);
   return min;
}

// Testing the fcuntion for insertion operations
console.log(remove([undefined, 3, 12, 8, 17, 13, 15, 10]));   // changes the heap to [undefined, 8, 12, 10, 17, 13, 15] and returns 3
console.log(remove([undefined, 8]));                          // changes the heap to [undefined] and returns 8
