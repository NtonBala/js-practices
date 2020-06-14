'use strict';

// Bad practice is to use template strings without js expressions:
let string = `Hello, World!`;

// Good practice is to use template strings only with js expressions,
// and for common strings use project standard for strings:
string = 'Hello, World!';
// or:
string = "Hello, World!";
