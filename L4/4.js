'use strict';

// Bad practice: to use hyphen naming notation and use [] in order to get key value:
// It's recommended to distinguish . and [] to understand when code is working with 
// objects and when with arrays. 
let user = {
  'first-name': 'John',
};

console.log(user['first-name']); // 'John'

// Good practice:
user = {
  firstName: 'John',
};

console.log(user.firstName); // 'John'
