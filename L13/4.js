"use strict";

// If function takes more than 3 parameters,
// it's recommended to pass them as an object.

// Bad:
function func(a, b, c, d) {};

func(1, 2, 3, 4);

// Good:
function func(options) {};

func({ a: 1, b: 2, c: 3, d: 4 });
