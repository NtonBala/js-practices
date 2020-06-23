"use strict";

const obj = {};

// Check if object is not empty (doesn't have own enumerable properties):
if (!Object.keys(obj).length) {
  throw new Error('Object is empty');
}
