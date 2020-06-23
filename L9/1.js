"use strict";

// To get all object own enumerable properties use recursion:
const user = {
  name: 'Peter',
  job: 'developer',
  address: {
    country: 'Ukraine',
    city: 'Kyiv',
  },
};

function collectKeys (obj) {
  const result = [];

  const collect = function (target) {
    for (const item in target) {
      result.push(item);

      if (typeof target[item] === 'object') {
        collect(target[item]);
      }
    }
  };

  collect(obj);

  return result;
}

console.log(collectKeys(user));
// [ 'name', 'job', 'address', 'country', 'city' ]
