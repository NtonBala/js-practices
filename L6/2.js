"use strict";

// Task is from https://www.codewars.com/

// How to split numbers?
// E.g. the task is to convert number 9119 to 811181:
const initial = 9119;

const convertNum = function (num) {
  return Number(
    String(num)
      .split('')
      .map(char => char**2) // Math operators except + implicitly converts strings to number type
      .join('')
  );
};

const result = convertNum(9119) === 811181;
console.log(result);
