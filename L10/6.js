"use strict";

// We can use HOF when we need to partially execute a function:

function log (logLevel, message) {
  console.log(`[${new Date().toLocaleString()}] [${logLevel}]: ${message}`);
}

log('INFO', 'info message'); // [6/26/2020, 8:30:06 PM] [INFO]: info message

log = function (logLevel) {
  return function (message) {
    console.log(`[${new Date().toLocaleString()}] [${logLevel}]: ${message}`);
  };
}

const debug = log('DEBUG');
const error = log('ERROR');

debug('debug message'); // [6/26/2020, 8:30:06 PM] [DEBUG]: debug message
error('error message'); // [6/26/2020, 8:30:06 PM] [ERROR]: error message
