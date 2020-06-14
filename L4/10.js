'use strict';

// Good practice how to serialize and deserialize NaN, Infinity, -Infinity:
const array1 = [-Infinity, -1, 0, 1, 2, NaN, 4, 5, Infinity];

const json = JSON.stringify(array1, (_, value) => {
  if (value !== value) {
    return 'NaN';
  }

  if (value === Infinity) {
    return 'Infinity';
  }

  if (value === -Infinity) {
    return '-Infinity';
  }

  return value;
});

console.log(json);
// '["-Infinity",-1,0,1,2,"NaN",4,5,"Infinity"]'

const array2 = JSON.parse(json, (_, value) => {
  if (value === 'NaN') {
    return NaN;
  }

  if (value === 'Infinity') {
    return Infinity;
  }

  if (value === '-Infinity') {
    return -Infinity;
  }

  return value;
});

console.log(array2);
// [ -Infinity, -1, 0, 1, 2, NaN, 4, 5, Infinity ]
