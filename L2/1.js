'use strict';

// Bad practice is to use loose equal as due to its implicit casting
// such code produces inevitable bugs hard to catch.
var a = 10;

if (typeof a != 'number') {
  // error
}

// Always use strict equal:
if (typeof a !== 'number') {
  // error
}

// If there's a situation when you have to use loose equal (which is hard to imagine),
// do first explicit casting and then comparison:
var a = Number('10');

if (typeof a != 'number') {
  // error
}
