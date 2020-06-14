'use strict';

// Good practice is to validate callbacks:
function invoke (cb) {
  if (typeof cb !== 'function') {
    throw new Error('Argument is not a function');
  }

  cb();
}
