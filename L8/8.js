"use strict";

// Bad practice - complicated handling errors logic due to nested try...catch blocks:
// Here would be better to extend sendEmail, sendSMS logic for handling their errors
// (with if or other conditions), preserving separate concerns for business logic and 
// error handle logic.
function sum(operand1, operand2) {
  if (typeof operand1 !== 'number') {
    throw new Error('first argument must be a number type');
  }

  if (typeof operand2 !== 'number') {
    throw new Error('second argument must be a number type');
  }

  const result = operand1 + operand2;

  console.log(result);
}

try {
  sum('1', 7);
} catch (error1) {
  console.log('Error1: ', error1.message);

  try {
    sendEmail('admin@testmail.com', error1.message);
  } catch (error2) {
    console.log('Error2: ', error2.message);

    try {
      sendSMS('+380', error2.message);
    } catch (error3) {
      // send dove
      console.log('Error3: ', error3.message);

      throw new Error('Final error');
    }
  }
}

console.log('Script ends');
