'use strict';

// Bad practice is to initialize variable as undefined:
// This is because when testing code it will be difficult to make difference 
// when it was system initialization
// and when it was initialized programmatically.
var a;
var a = undefined;
var a = void 0;

// Good practice is to use null instead:
var a = null;
