// =================================
// Assignment: Max, min, and average
// --------------------------------- [ Objectives ]
// <>  Create a function that shall takes an array
//     of numbers as a parameter.
// <>  This function shall:
//     o   find the max, min, and avg number of a given array
//     o   return these values in a string.
// ==========================================================

function MinMaxAvg (array) {

   // Find the min.
   var min = function (array) {
      var smallest=array[0];
      for (var k=0; k < array.length; k++) {
         if (smallest > array[k]) { smallest = array[k]; }
      }  return smallest;
   };
   // Find the min.
   var max = function (array) {
      var largest=array[0];
      for (var k=0; k < array.length; k++) {
         if (largest < array[k]) { largest = array[k]; }
      }  return largest;
   };
   // Find the min.
   var avg = function (array) {
      var sum=0;
      for (var k=0; k < array.length; k++) {
         sum += array[k];
      }  return sum/array.length;
   };
   return   '\nFrom the Given the array: [' + array + ']'+
            '\n=> The minimum number is:  ' + min(array) +
            '\n=> The minimum number is:  ' + max(array) +
            '\n=> The minimum number is:  ' + avg(array);
}
console.log(MinMaxAvg([6,3,8,5,2,7,1,4]));
