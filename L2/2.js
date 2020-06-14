'use strict';

const age = 18;

// Bad practice to use nesting ternary operators as it's hard to read:
// In 90% cases there's should be no nesting, in 10% left - max 1 nesting level.
let message = (age < 12) ? 'child' :
  (age < 19) ? 'teenager' :
  (age < 100) ? 'adult' :
  'Wow!';

console.log(message);

// Good practice is to substitute such code with if...else (better to read) or switch statement
if (age < 12) {
  message = 'child';
} else if (age < 19) {
  message = 'teenager';
} else if (age < 100) {
  message = 'adult';
} else {
  message = 'Wow!';
}

console.log(message);

// When using switch don't forget about break,
// or it won't work as expected:
const dayNumber = 1;
let day = null;

switch(dayNumber) {
  case 0:
    day = 'Sunday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'working day';
}
