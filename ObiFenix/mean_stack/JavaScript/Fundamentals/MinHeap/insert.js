// =================
// MIN HEAP - Insert
// ------------------------------- [ Objectives ]
// <>  Implement a min heap ( or MH ))
// <>  Shall be able to insert values into the MH
// ==============================================

function insertIntoMH(heap, val) {
   // If Empty List
   if(heap.length < 1) {
      heap.length = 2;
      heap[1] = val;
   }
   // List Not Empty
   else {
      heap.push(val);
      var childIndex = heap.length-1;
      var parentIndex = Math.floor(childIndex / 2);

      while (heap[childIndex] < heap[parentIndex]) {
         if (childIndex > 0) {
            [heap[childIndex], heap[parentIndex]] = [heap[parentIndex], heap[childIndex]]
            childIndex /= 2; parentIndex = Math.floor(childIndex/2);
         }
      }
   } return heap;
}

// Testing the fcuntion for insertion operations
console.log(insertIntoMH ([], 13));                             // shall alert "[undefine, 13]" if the array is empty
console.log(insertIntoMH ([undefined, 3,8,10,11,9,20,14], 7));  // shall alert "[undefine, 3,7,10,11,9,20,14], 7);"
