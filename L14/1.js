// Bad:
// In this case we passed to Entity.apply call whole arguments object.
// This code is not obvious, and also in this case Entity will receive all the arguments,
// even those which it really doesn't need.
// Another cons is that using arguments gives no flexibility, e.g. parent constructor may have 
// its own parameters order.
function Entity (id) {
  this.id = id;
}

function Person () {
  Entity.apply(this, arguments);
}

console.log(new Person(1)); // Person { id: 1 }
 
// Good:
// It's better to modify Person and pass all the arguments Entity needs explicitly:
function Person (id) {
  Entity.apply(this, [id]);
}
