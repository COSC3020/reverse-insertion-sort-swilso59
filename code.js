function insertionSortReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var val = arr[i];
    var j;
    for (j = i; j < arr.length && arr[j + 1] < val; j++) {
      arr[j] = arr[j + 1];
    }
    arr[j] = val;
  }
  return arr;
}

// Example usage:
var arr = [5, 2, 9, 3, 6];
insertionSortReverse(arr);
console.log(arr); // Output: [9, 6, 5, 3, 2] \

// Changes made. The first for loop had arr.length -2. I think I just mistyped. The second for loop had a.length -1 and a greater than. I believe this was what was making the test fail. 
// I think was trying to sort the array into reverse order as well as starting from the end. I beielve it should work know. I recieved help form the TA. 
