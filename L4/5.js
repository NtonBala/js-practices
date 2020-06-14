'use strict';

// Bad practice to access nested object property without validation:
const data = {};

const prop = data.type.title; // TypeError: cannot read property 'title' of undefined

// Good practice is to use entry validation:
const title = data && data.type && data.type.title;

console.log(title); // undefined
