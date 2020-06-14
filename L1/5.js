'use strict';

// Never write to global object:

// Node.js code:
global.n = 1;
console.log(n); // 1

// Browser code:
window.n = 1;
console.log(n); // 1
