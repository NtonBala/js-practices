'use strict';

// So-so practice:
// Because if you'll have to add some code, or console result,
// you'll have to create variable for holding result and return variable.
function sum (a, b) {
  return a + b;
}

// Better practice:
// This way it's easier to debug and add some code.
function sum (a, b) {
  const result = a + b;
  //console.log(result);

  return result;
}
