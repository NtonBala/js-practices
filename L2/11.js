'use strict';

// Bad practice - (!()) makes it harder to understand
for (let count = 0; count < 10; count++) {
  if (!(count % 2 === 0)) { // search for odd numbers
    console.log(count);
  }
}

// Good practice:
for (let count = 0; count < 10; count++) {
  if (count % 2 !== 0) {
    console.log(count);
  }
}
