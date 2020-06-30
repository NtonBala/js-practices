"use strict";

// use ES6 function.name for debugging and throwing errors:
function foo (a) {
  if (typeof a !== 'string') {
    throw new Error(`First argument must be of string type: in function "${foo.name}"`);
  }
}

foo();

// Error: First argument must be of string type: in function "foo"
