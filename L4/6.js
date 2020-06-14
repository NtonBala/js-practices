'use strict';

// More correct object prop validation:
// But it's longer and often developers omit this type of validation 
// in favour of entry validation.
const data = {};

if (data && Date.hasOwnProperty('type')) {
  // code
}

if (data && data.hasOwnProperty('type') && data.type.hasOwnProperty('title')) {
  // code
  console.log(data.type.title);
}
