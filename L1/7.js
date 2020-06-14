'use strict';

// Bad practice:
const name = null;

console.log(typeof name); // object

// Good practice:
if (name === null) {
  console.log(null);
}
