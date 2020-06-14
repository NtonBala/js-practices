'use strict';

// Bad practice to mix validations of several parameters and throw general Error
// for all of them:
function sum (a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    throw new Error('All parameters should have \'number\' type');
  }

  const result = a + b;

  return result;
}

// Good practice is to validate each parameter separately and throw individual Errors:
function sum (a, b) {
  if (typeof a !== 'number') {
    throw new Error('First parameter should have \'number\' type');
  }

  if (typeof b !== 'number') {
    throw new Error('Second parameter should have \'number\' type');
  }

  const result = a + b;

  return result;
}
