'use strict';

// Bad practice is to use !! to convert value to boolean type:
const value = 5; // number

let result = !!value; // true

// Good practice is to use Boolean wrapper object:
result = Boolean(value); // true
