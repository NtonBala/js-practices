'use strict';

const str = 'Hi!';

// Bad practice to use array syntax working with strings:
let lastChar = str[str.length - 1];

// Good practice - to use special string methods instead:
lastChar = str.charAt(str.length - 1);
