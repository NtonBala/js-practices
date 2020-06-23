"use strict";

// It's a bad practice to throw primitive values.
// In this case only primitive value will be thrown,
// not a special object:
throw 'Error!!!';

console.log('Unreachable code...');


// Create errors and throw them,
// this is a good practice as you use functionality developed exactly for this case,
// a special error object that includes stack trace and special props as name, message and others:
throw new Error('error message...');
