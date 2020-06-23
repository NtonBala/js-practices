"use strict";

// try...catch can be nested, 2 levels is OK, more is bad practice.
// But it's better to divide code into separate function in order to use 1 level - 
// it's better to read and understand.
console.log('Script start');

try {
  throw new Error('level 1 catch');
} catch (err) {
  try {
    // another try ...

    throw err;
  } catch {
    // process another try error
    console.log('level 2 catch');
  }

  console.log('level 1 catch');
}

console.log('Script end');
