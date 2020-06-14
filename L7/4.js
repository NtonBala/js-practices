"use strict";

// We may have our data stored in several data structures, e.g. two arrays.
// We can easily combine them using map:
const animals = ['dog', 'cat', 'lamb'];
const noises = ['bow', 'meow', 'baa'];

const mappedOnly = animals.map((animal, i) => {
  return {
    name: animal,
    noise: noises[i]
  };
});

console.log(mappedOnly);
// [
//   { name: 'dog', noise: 'bow' },
//   { name: 'cat', noise: 'meow' },
//   { name: 'lamb', noise: 'baa' }
// ]

// Another case is that we can easily create .csv file from our data
// stored in separate data structures:
const csv = animals
  .map((animal, i) => [animal, noises[i]])
  .join('\n');

console.log(csv);
// dog,bow
// cat,meow
// lamb,baa
