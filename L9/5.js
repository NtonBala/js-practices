"use strict";

// In order to create full shallow copy of an object (with prototype and descriptors),
// use function like shallowClone below:
function shallowClone (obj) {
  return Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
}
