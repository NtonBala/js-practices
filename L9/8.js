"use strict";

// Overriding toString():
const user = {
  name: 'Oliver',
  job: 'developer',
  toString() {
    const entries = Object.entries(this);

    let representaion = 'The object has been converted to string:\n{\n';

    for (const entry of entries) {
      representaion += `\t-> ${entry[0]}: ${entry[1]}\n`; 
    }

    representaion += '}';

    return representaion;
  },
};

// Set method to be enumerable as original toString 
Object.defineProperty(user, 'toString', {
  enumerable: false,
});

console.log(user.toString());
// The object has been converted to string:
// {
//   -> name: Oliver
//   -> job: developer
// }
