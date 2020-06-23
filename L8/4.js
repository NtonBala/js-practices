"use strict";

// Fixing production error with the help of try...catch block:
try {
  // server request returns 404 error - data not found
} catch (err) {
  // create data and send it to server
  // server request for data and reading returned data
}

// Another example:
// According to technical requirements needed data should exist on server,
// but at midnight some back-end work may occur
// (e. g. auto cleaning server data).
// So we check if data exists and if doesn't - we create that data and read it,
// if it exists - we simply read it.
