// Bad practice.
// Such style makes code complicated and adds space for bugs.
var name;

function f() {
  name = 'John';  
}

f();

console.log(name);

// Refactoring:
var name;

function f() {
  return 'Jane';
}

name = f();

console.log(name);
