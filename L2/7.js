'use strict';

// Bad practice to use computations as switch argument or case:
switch (3 + 2) {
  case 3:
    console.log('three');
    break;
  case 4 + 1:
    console.log('five');
    break;
  default:
    console.log("I don't know this number!");
}
