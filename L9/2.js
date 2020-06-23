"use strict";

// Пример того, как сравнить объекты:
function shallowEqual(objA, objB) {
  if (typeof objA !== 'object') {
    throw new Error('First argument must be an object');
  }

  if (typeof objB !== 'object') {
    throw new Error('Second argument must be an object');
  }

  // Sanity check - проверка на здравый смысл,
  // если по ссылке оба объекта одинаковы - это один и тоже объект.
  if (objA === objB) {
    return true;
  }

  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (const key of aKeys) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}
