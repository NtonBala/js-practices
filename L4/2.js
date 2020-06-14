'use strict';

// Good practice of 'number' type validation:
// It handles NaN, Infinity and -Infinity.
const num = 2;

if (typeof num !== 'number' || isNaN(num) || num <= Number.MIN_SAFE_INTEGER || num >= Number.MAX_SAFE_INTEGER) {
  console.log('Error');
}
