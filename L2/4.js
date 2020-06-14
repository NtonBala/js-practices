'use strict';

const name = 'Peter';

// Good practice is use max 1 level of nesting in if statements:
// Don't use more than 1 level of nesting as it's hard to read.
// Linter is used to track this rule.
if (name) {
  if (name === 'Peter') {
    console.log(`Hello, ${name}!`);
  } else {
    console.log('Hello, Guest!');
  }
} else {
  console.log('Error');
}

// Nesting can be refactored with return or && operator.
if (name && name === 'Peter') {
  console.log(`Hello, ${name}!`);
} else if (name) {
  console.log('Hello, Guest!');
} else {
  console.log('Error');
}
