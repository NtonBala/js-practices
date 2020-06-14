'use strict';

// Bad practice
// Common rounding problem with float numbers:

const price1 = 0.1; // 0.20$
const price2 = 0.2; // 0.70$

let sum = price1 + price2;

console.log(sum); // 0.30000000000000004

// Solution:
// Convert float to integer
// Perform math operation
// Convert integer to float
sum = (price1 * 100 + price2 * 100) / 100;

console.log(sum); // 0.3
