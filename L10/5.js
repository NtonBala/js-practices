"use strict";

// curry function implementation:

function curry(f) {
  return function curried (...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    }

    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

function log (date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log = curry(log);

// can be called as log:
log(new Date(), 'DEBUG', 'Message 1'); // [19:52] [DEBUG] Message 1


// can be called one by one:
log(new Date())('DEBUG')('Message 2'); // [19:52] [DEBUG] Message 2

// can be called as partial function (used partially):
const logNow = log(new Date());

logNow('INFO', 'Message 3'); // [19:52] [INFO] Message 3

const debugNow = log(new Date(), 'DEBUG');

debugNow('Message 4'); // [19:52] [DEBUG] Message 4
