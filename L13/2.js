"use strict";

// Destructoring and reassignment:
// (same with array)
const user = {
  name: 'Carl', 
  city: 'New York'
};

let name = 'Jane';
let city = 'Bergen';

console.log(name); // Jane
console.log(city); // Bergen

({name, city} = user);

console.log(name); // Walter
console.log(city); // Berlin
