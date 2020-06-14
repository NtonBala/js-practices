'use strict';

// Bad practice to use post- or pre-increment as they are not obvious:
let n = 1;
n++;

// Good practice is to use one or another:
n = n + 1;
n += 1; // preferably as this is obvious & shortcut
