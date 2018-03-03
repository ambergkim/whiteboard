function remove(arr, index) {
  arr[index] = null;
  for(var i = index; i < arr.length; i++) {
    arr[i] = arr[i+1];
  };
  arr.length = arr.length - 1;
  return arr;
}

// Test in the console.
console.log("Expected:", [23, 75, 76]);
console.log("Actual:", remove([23, 45, 75, 76], 1));