'use strict';

// Bad practice is to use eval() method:
let message = 'Good morning!';

eval('message = "Good evening!";');

console.log(message); // 'Good evening!'
