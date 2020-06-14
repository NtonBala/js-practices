'use string';

// Bad practice to make code look complicated:
// Here we use in template string what could be calculated outside.
const name = null;
let template = `Hello, ${name ? name : 'Guest'}!`;

// Good practice:
// This makes code visually easier to analyze and more readable.
const addressName = name ? name : 'Guest';
template = `Hello, ${addressName}!`
