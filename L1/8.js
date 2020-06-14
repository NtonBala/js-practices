'use strict';

// Bad practice - to use undefined as is:
let unknown = undefined;

// Good practice is to leave undefined as system value and use void 0 instead:
unknown = void 0;

console.log(unknown); // undefined
