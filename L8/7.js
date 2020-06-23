"use strict";

const INFO_CODE = 'INFO';
const WARNING_CODE = 'WARNING';
const ERROR_CODE = 'ERROR';

// We can throw errors according status:
// This function is used to throw errors.
function notifier(status, message) {
  if (status === WARNING_CODE) {
    throw new Error('Warning!');
  }

  if (status === ERROR_CODE) {
    throw new Error('Error!');
  }

  console.log(message);
}

try {
  // Here we use another function that or code performing some task,
  // if something goes wrong we call notifier
  // (e.g. we check argument types inside another function and if they fails we call notifier)
  notifier(INFO_CODE, 'New event added');
} catch (error) {
  // Here we process errors thrown by notifier.
  // We can process errors according error.name or error.text:
  if (error.message !== '911') {
    console.log(error.message);
  } else {
    throw error;
  }
}

console.log('Script end');
