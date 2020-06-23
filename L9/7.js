"use strict";

// Bad practice to delete array elements:
const arr = [1, 2 ,3];

delete arr[1];

console.log(arr); // [1,, 3]

// Good practice is to use filter instead:
// in this case we don't mutate original array and don't create empty elements
const newArr = arr.filter((_, i) => i !== 1);

console.log(newArr); // [1, 3]
