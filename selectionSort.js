// Create a generic swap function that takes an array and 2 indexes as arguments
// This swap function will be able to swap any 2 elements within the array

var swap = function(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Next we create a function that takes an array and a start index and finds
// the index of the minimum value within that subarray.  If you make the
// startIndex 0 then it will operate on the entire array.

var findIndexOfMinimum = function(array, startIndex){
  var min = array[startIndex];
  var minIndex = startIndex;

  for(var i = startIndex+1; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}

// So here is the final implementation.
// We create a temporary variable to act as our minimum index for each iteration.
// As we iterate through the array we call findIndexOfMinimum to give us the
// index of the minimum value from the remaining array.
// When we find the minimum index swapping the elements at that index with the
// element at our current i.
// In the end we return the newly sorted array.

function selectionSort(array){
  var minIndex;
  for(var i = 0; i < array.length; i++){
    minIndex = findIndexOfMinimum(array, i);
    swap(array, i, minIndex);
  }
  return array;
}
