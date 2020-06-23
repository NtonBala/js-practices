"use strict";

// Bad practice, loose of context on line 16:
const user = {
  name: 'Walter',
  sayHi () {
    console.log(`Hi, my name is ${this.name} )`);
  },
  sayBy () {
    console.log('Good by');
  },
};

user.sayHi();

(user.name === 'Walter' ? user.sayHi : user.sayBy)();

// 'Hi, my name is undefined )'
// TypeError: Cannot read property 'name' of undefined
