"use strict";

// How to create stab array?
// Using ArrayIterator object returned by arrayInstance.keys()
// and then apply to iterator object spread operator or Array.from method.
// They both will call special method (iterator) of iterable object and one (spread operator)
// will spread values returned by yield and other (Array.from) will form array from them:
const stabLength = 10;

const stabArr1 = [...new Array(stabLength).keys()];

console.log(stabArr1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const stabArr2 = Array.from(new Array(stabLength).keys()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(stabArr2);
