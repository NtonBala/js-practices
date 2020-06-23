"use strict";

// Creation of custom error classes is very convenient,
// it allows clearly identify different types of potential issues.
// Using ES6 syntax:
class LoginFormError extends Error {
  constructor(fieldName) {
    super();

    this.name = 'LoginFormError';
    this.message = `form field validation failed: ${fieldName}`;
  }
}

throw new LoginFormError('password');

// Using ES5 syntax:
function PropertyError(property) {
  Error.call(this, property);

  this.name = 'PropertyError';

  this.property = property;
  this.message = "error in property: " + property;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, PropertyError);
  } else {
    this.stack = new Error().stack;
  }
}

PropertyError.prototype = Object.create(Error.prototype);

throw new PropertyError('password');
