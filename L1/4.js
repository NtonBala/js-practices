// Bad practice to use var, let in for...in or for...of loops.
// In this case it's possible to perform reassignment inside a loop:
const obj = {
  name: 'Anton',
  age: 36,
};

for (let item in obj) {
  item = 1;
  console.log(item);
}
// 1
// 1

// Use const instead to avoid reassignment inside loop.
// In this case you'll get TypeError: Assignment to constant variable:
for (const item in obj) {
  item = 1;
  console.log(item);
}
