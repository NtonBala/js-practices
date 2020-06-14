'use strict';

const user = {
  name: 'Peter',
  job: 'Developer'
};

// Bad practice to use delete operation as it involves mutation:
delete user.job;

// Good practice is to create new object without properties you don't need:
const person = {
  name: user.name
};
