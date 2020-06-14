// 'use strict';

// Good practice is use freezed objects of constants
// (those values that won't be changed).
// This will level up code security and stability.
const routes = Object.freeze({
  home: '/home',
  profile: '/profile',
});
