'use strict';

// Very bad practice is to mutate compared value:
// It's hard to understand and not predictable code
let n = 0;

switch (2) {
  case n + 1:
    n = 1;
    console.log(n);
    break;
  case n + 2:
    n = 2;
    console.log(n);
    break;
  case n + 3:
    n = 3;
    console.log(n);
    break;
  default:
    console.log("I don't know this number!");
} // 2

// That's why it's a good practice to use const as it protects us from such situations:
const m = 0;

switch (2) {
  case m + 1:
    m = 1;
    console.log(m);
    break;
  case m + 2:
    m = 2; // TypeError: Assignment to constant variable
    console.log(m);
    break;
  case m + 3:
    m = 3;
    console.log(m);
    break;
  default:
    console.log("I don't know this number!");
}
