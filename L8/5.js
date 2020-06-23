"use strict";

// How to work with custom errors?
// Create different error types to handle different errors differently
class ValidationError extends Error {
  constructor(message) {
    super();

    this.name = 'ValidationError';
    this.message = message;
  }
}

try {
  throw new ValidationError('the username property contains an invalid character');
} catch (error) {
  // Use if or switch statements checking error.name:
  if (error.name === 'ValidationError') {
    // custom processing of ValidationError
    console.log(error.message);
  } else if (error.name === 'Error') {
    // custom logic for another Error type
    console.log(error.message);
  }
}

console.log('Script end');
