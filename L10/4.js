"use strict";

// ES5 default parameters:
function print (param) {
  param = typeof param !== 'undefined' ? param : 'Good morning!';

  console.log(param);
}

print();
print(undefined);
print('Hello!');
print(0);
print('');
print(NaN);
print(false);
print(null);

// Good morning!
// Good morning!
// Hello!
// 0
//
// NaN
// false
// null
