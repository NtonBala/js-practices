'use strict';

// Bad practice to put in the first place value that probably will be false:
const n = 0 || 1;

// Put in the first place value that probably will be true - this will save some resources
// as second part will not be fulfilled.
const n = 1 || 0;
