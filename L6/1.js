'use strict';

// Bad practice to use compound validation functions,
// such function is harder to reuse and its logic is not so obvious:
const check = function (arr, cb) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }

  if (typeof cb !== 'function') {
      throw new Error('Second argument must be a callback function');
  }
};

const func = function (arr, cb) {
  // Also try catch block doesn't belong here,
  // this function must throw argument errors and not process them:
  try {
    check(arr, cb);
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);

    return;
  }

  // ...
};

func([], '');

// Good practice is to use single argument validation functions,
// in this case such function can be easily reused and its logic is obvious:
const checkForArray = function (arg) {
  if (!Array.isArray(arg)) {
    throw new Error('Argument must be an array');
  }
};

const checkForFunction = function (arg) {
  if (typeof cb !== 'function') {
    throw new Error('Argument must be a callback function');
  }
};

const refactoredFunc = function (arr, cb) {
  checkForArray(arr);
  checkForFunction(cb);

  // ...
};

// try catch block belongs were function throwing errors is used.
// Because these are separate logic domains:
// one is function inner logic
// (if this logic is abused function throw appropriate error)
// and another is error handling
// (how and where we handle errors)
// and they should not be mixed.
try {
  refactoredFunc([], '');
} catch (err) {
  console.error(`${err.name}: ${err.message}`);
}
