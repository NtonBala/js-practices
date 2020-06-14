"use strict";

// Filtering array for only unique values:

const set = new Set(['a', 1, 1, 1, {name: 'Oscar'}]);
const array = Array.from(set);

console.log(set); // Set { 'a', 1, { name: 'Oscar' } }
console.log(array); // [ 'a', 1, { name: 'Oscar' } ]
