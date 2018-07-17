// ==================
// MIN HEAP - Heapify
// ------------------------------- [ Objectives ]
// <>  Implement a function that Heapify an array
// <>  Shall turn any array into a min-heam tree
// ==============================================

function swap(array, index1, index2) {
   // Swap first and last items in the array... using "unpackeging"
   [ array[index1], array[index2] ] = [ array[index2], array[index1] ];
   return array;
}

// Heapfying...
function min_heapify(heap, index, range) {
   while (true) {
      var smallest    = index;                        // holds the position of the assumed 'min'
      var lchildIndex = (2 * index) + 1;              // holds the structure of last left child
      var rchildIndex = (2 * index) + 2;              // holds the structure of the last right child
      var parentIndex = Math.floor(rchildIndex / 2);  // holds the structure of the last parent

      if (heap[lchildIndex] < heap[smallest] && lchildIndex < range)   { smallest = lchildIndex; }
      if (heap[rchildIndex] < heap[smallest] && rchildIndex < range)   { smallest = rchildIndex; }
      if (index != smallest)                                           { break; }
      swap(heap, index, smallest);
   }  return heap;
}

function heapify(array, length) {
   // If Empty List
   if(array.length < 1) { return array; }

   // Else -> List in not Empty
   for (var index = 0; index < Math.floor(length/2); index++) {
      min_heapify(array, index, length);
   }
   return array;
}

// Testing the fcuntion
console.log('\n -> You Passed in the folloing array:  [ '+ [] +' ]');
console.log('    The heapify version of your array:', heapify([]));   // alters the array to []
console.log('\n -> You Passed in the folloing array: ', [20, 3, 8, 14, 9, 6, 2]);
console.log('    The heapify version of your array:', heapify([20, 3, 8, 14, 9, 6, 2]));   // alters the array to [undefined, 2, 6, 3, 9, 8, 14, 20]
