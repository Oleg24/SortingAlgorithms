// insert will insert the value at the proper index before the provided rightIndex.
// It will do this by copying each item over, starting at the right index until it reaches the
// beginning of the array or an item whose value  is less than or equal to the given value.
// At this point it will copy the given value in.


var insert = function(array, rightIndex, value) {
  var i;
  for(i = rightIndex; array[i] > value && i >= 0; i--){
    array[i+1] = array[i];
  }
  array[i+1] = value;
  return array;
};

// insertionSort loops over items in the array, inserting each new item into the
// subarray before the new item.

var insertionSort = function(array){
  for(var i = 0; i < array.length; i++){
    insert(array, i-1, array[i]);
  }
  return array;
};
