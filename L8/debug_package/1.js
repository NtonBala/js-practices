"use strict";
// To make debug work we should create special variable, in this environment
// it will work by running file with "DEBUG=marker node 1" in terminal

// Import debug package
const debug = require('debug');

// Create logger
const log = debug('marker');

// Launch logger
log('Message 1: debug');

console.log('Message 2: console.log');

log('Message 3: debug');
// ->
//   marker Message 1: debug +0ms
// Message 2: console.log
//   marker Message 3: debug +2ms
