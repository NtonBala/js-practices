"use strict";

// To know if number is even you can use % operator:
const arr = [1, -1, 2, -2, 3];

const filteredArr = arr.filter((el) => {
  return el % 2 === 0;
});

console.log(filteredArr); // [ 2, -2 ]
