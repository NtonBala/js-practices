'use strict';

const color = 'red';

// Bad practice is to use return inside a function, though it's possible:
function f() {
  switch (color) {
    case 'red':
      return 'STOP';
    case 'yellow':
      return '1 MIN';
    case 'green':
      return 'START';
    default:
      return "I don't know this color!";
  }
}

// Good practice is to use break for switch and return one value, 
// as in this case you don't have to investigate all switch statement 
// to understand what is return value of a function.
function f() {
  let message = null;

  switch (color) {
    case 'red':
      message = 'STOP';
      break;
    case 'yellow':
      message = '1 MIN';
      break;
    case 'green':
      message = 'START';
      break;
    default:
      message = "I don't know this color!";
  }

  return message;
}

console.log(f());
