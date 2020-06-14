'use strict';

// Bad practice it to let JS swap arguments in substring method (though its native behavior):
const string = 'Hello World!';

// Good:
console.log(string.substring(2, 7)); // 'llo W'

// Bad:
console.log(string.substring(7, 2)); // 'llo W'

// Also bad practice to let substring convert negative numbers to 0:
console.log(string.substring(-2, 7)); // 'Hello W'
