// Bad practice to provide same name to variables from different scopes:
let n = 12;

for (let n = 0; n < 10; n++) {
  console.log('for -> ', n);
}

console.log(n); // 12

// To avoid this bad practice - set linter.
