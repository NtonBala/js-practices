'use strict';

// Bad practice, cause it's visually difficult to read as validation and code goes together:
function f(params) {
  if (typeof params === 'string') {
    // code...
  }

  throw new Error('Error');
}

// Good practice: validation is separated from code:
function f(params) {
  if (typeof params !== 'string') {
    throw new Error('Error');
  }

  // code...
}
