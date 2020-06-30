"use strict";

// Using MAX_SAFE_INTEGER when processing arbitrary levels of nesting:
const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
const array2 = [[[[[1, 2]]]]];
const array3 = [[[[[1, 2]]], 2], 1];
const array4 = [[[[[]]]]];
const array5 = [[[[[], 3]]]];

console.log(array1.flat(Number.MAX_SAFE_INTEGER)); // [ 1, 2, 1, 2, 2, 1, 1, 2 ]
console.log(array2.flat(Number.MAX_SAFE_INTEGER)); // [ 1, 2 ]
console.log(array3.flat(Number.MAX_SAFE_INTEGER)); // [ 1, 2, 2, 1 ]
console.log(array4.flat(Number.MAX_SAFE_INTEGER)); // []
console.log(array5.flat(Number.MAX_SAFE_INTEGER)); // [ 3 ]
