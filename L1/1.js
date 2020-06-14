// Bad practice, this used to be done in order to 'save' some file space
var a, b, c;

a = 'A';
b = 'B';
c = 'C';

// Another bad variation:
var d = 'D',
  e = 'E',
  f = 'F';

// Problem is that such code is not obvious.
// Besides, each peace above consists of 3 separate instructions, that are mixed together.
// To refactor do this:
var a = 'A';
var b = 'B';
var c = 'C';

// Now it's very easy to add/remove a variable into such code,
// and semicolon is another good practice to close each instruction.

// This refactoring example demonstrates use of KISS principle (keep it short and simple).
// Code must be written as simple as possible, it's a bad practice to write too smart.
// Code must be obvious.
