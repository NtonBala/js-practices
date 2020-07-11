'use strict';

// Bad practice: to mix variables and functions,
// it's hard to read due to hoisting, lexical environments and scope rules
function f () {
  var say = function () {
    console.log(hello);
  };

  var hello = 'Hello, World!';

  return say;
}

var func = f();

func();

// Good practice: variables should go at top (before functions).
// In this case (when variables that are used in functions go before functions themselves)
// it's easy to understand what actual value will be used inside a function:
function f () {
  var hello = 'Hello, World!!!';

  return function () {
    console.log(hello);
  };
}
