"use strict";

// Create array from iterable object:
const numbers = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

// Array.from calls special method of iterable object - iterator (created as generator with *)
// and creates array from values returned by yield.
const array = Array.from(numbers);

console.log(array); // [ 1, 2, 3 ]
