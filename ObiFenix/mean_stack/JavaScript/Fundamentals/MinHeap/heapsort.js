// ====================
// MIN HEAP - Heap Sort
// -------------------- [ Objectives ]
// <>  Implement a min heap ( or MH ))
// <>  Shall be able to sort all elem. in a given MH
// =================================================

function swap(array, index1, index2) {
   // Swap first and last items in the array... using "unpackeging"
   [ array[index1], array[index2] ] = [ array[index2], array[index1] ];
   return array;
}

function max_heapify(a, i, length) {
    while (true) {
        var left = i*2 + 1;
        var right = i*2 + 2;
        var largest = i;

        if (left < length && a[left] > a[largest])    { largest = left; }
        if (right < length && a[right] > a[largest])  { largest = right; }
        if (i == largest)                             { break; }
        swap(a, i, largest);
        i = largest;
    }
}

function heapify(a, length) {
    for (var i = 0; i < Math.floor(length/2); i++) {
        max_heapify(a, i, length);
    }
}

function heapsort(a) {
    heapify(a, a.length);

    for (var i = a.length - 1; i > 0; i--) {
        swap(a, i, 0);
        max_heapify(a, 0, i-1);
    }   return a;
}

// heapsort(a);


// Testing the fcuntion
console.log('\n -> You Passed in the folloing array:  [ '+ [] +' ]');
console.log('    The heapify version of your array:', heapsort([]));   // alters the array to []
console.log('\n -> You Passed in the folloing array: ', [20, 3, 8, 14, 9, 6, 2]);
console.log('    The heapify version of your array:', heapsort([20, 3, 8, 14, 9, 6, 2]));   // alters the array to [undefined, 2, 6, 3, 9, 8, 14, 20]
