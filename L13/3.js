"use strict";

// This behaviour is connected with previous example:
// (same with array)
const user = {
  name: 'Walter',
  city: 'Berlin',
};

const getUser = (param) => {
  console.log('param:', param);
  console.log(param === user);
};

let name = 'Jane';
let city = 'Bergen';

console.log(name); // Jane
console.log(city); // Bergen

getUser({ name, city } = user);

console.log(name); // Walter
console.log(city); // Berlin

// Jane
// Bergen
// param: { name: 'Walter', city: 'Berlin' }
// true
// Walter
// Berlin
