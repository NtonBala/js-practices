'use strict';

// As for...in loop is very slow (actually the slowest loop),
// use this approach to loop through:
const person = {
  name: 'John',
};

Object.keys(person).map((key) => {});
