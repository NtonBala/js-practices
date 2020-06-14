'use strict';

let n = 0;

// Bad practice to experiment with switch, e.g. use default as fist statement,
// it leads to unpredictable results:
switch (4) {
  default:
    console.log("I'll test this number...");
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
} // 4

switch (4) {
  default:
    console.log("I'll test this number...");
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
} // I'll test this number...
  // 1
