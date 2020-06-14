'use strict';

// Bad practice is to use implicit operations - in this case casting:
const a = 10;
const b = '20';

let sum = a * b; // 200

// Good practice is to perform operations explicitly,
// in this case using appropriate wrapper object:
const bNum = Number(b);
sum = a * bNum; // 200


// Another implicit operation:
let x;
console.log(x); // undefined

const c = (x = 1) || true;
console.log(c); // 1
console.log(x); // 1
