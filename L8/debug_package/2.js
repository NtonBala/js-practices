"use strict";
// To make debug work, we need to create special variable DEBUG=marker
// To do this run "DEBUG=worker:* node 2" command in terminal from this folder.
// We also can run each worker separately by "DEBUG=worker:a node 2" command.

// PRODUCTION EXAMPLE OF LOGGING

// import debug package
const debug = require('debug');

// create 3 logger channels
const logA = debug('worker:a');
const logB = debug('worker:b');
const logC = debug('worker:c');

console.log('-> START');

function createWorkerA() {
  // log smth with first logger
  logA('logA...');

  setTimeout(createWorkerA, Math.random() * 1000);
}

createWorkerA();

function createWorkerB() {
  // log smth with second logger
  logB('logB...');

  setTimeout(createWorkerB, Math.random() * 1000);
}

createWorkerB();

function createWorkerC() {
  // log smth with third logger
  logC('logC...');

  setTimeout(createWorkerC, Math.random() * 1000);
}

createWorkerC();
