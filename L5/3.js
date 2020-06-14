'use strict';

// Module pattern using IIFE.
// This allows to create protected variables that can be changed only through
// provided interface.
// Now, this pattern is used not so often due to native module systems (e.g. Common.js).
const user = (function () {
  let name = 'Peter';

  return {
    setName (val) {
      name = val;
    },

    getName () {
      return name;
    },
  };
})();

console.log(user);
// { setName: [Function: setName], getName: [Function: getName] }

user.setName('Oliver');
console.log(user.getName()); // 'Oliver'
