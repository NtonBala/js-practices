'use strict';

const name = 'Peter';

// Bad practice is not to avoid inversion:
if (!name) {
  console.log('Error');
} else {
  console.log(name);  
}

// Good practice is to avoid it if possible:
if (name) {
  console.log(name);
} else {
  console.log('Error');
}
