'use strict';

// Bad practice to mix && and ||:
// It's hard to read this code and it's easy to get confused with it.
let result = 0 || 1 && 5; // 5

// It's better to divide them into separate operations on separate levels:
const preStep = 1 && 5; // 5
result = 0 || preStep; // 5
