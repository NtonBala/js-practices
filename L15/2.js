"use strict";

function Entity () {
  this.id = 1;
}

Entity.prototype.getId = function () {
  return this.id;
};

function Person () {
  Entity.apply(this, arguments);
}

Person.prototype = Object.create(Entity.prototype);
Person.prototype.constructor = Person;

Person.prototype.getId = function () {
  var id = Entity.prototype.getId.call();
  console.log(this.id);
};



new Person().getId();