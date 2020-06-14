'use strict';

const j = 'i';
const i = 'i';
const k = 'k';

// Bad practice is to use shortcut form:
// This code is difficult to read as in this case indentation should make sense,
// besides that it's very easy to break just by adding some lines.
if (i == j)
  if (i == k) console.log('i = k');
  else console.log('i != k');

// Instead, always use curly braces:
if (i == j) {
  if (i == k) {
    console.log('i = k');
  } else {
    console.log('i != k');
  }
}
