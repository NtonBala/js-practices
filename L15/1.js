"use strict";

// ES5 inheritance:
function Robot (model, energy) {
  this.model = model;
  this.energy = energy;
}

Robot.prototype.getModel = function () {
  return this.model;
};

Robot.prototype.getEnergy = function () {
  return this.energy;
};

function CleanerRobot () {
  Robot.apply(this, arguments);

  this.isCleaning = false;
}

CleanerRobot.prototype = Object.create(Robot.prototype);
CleanerRobot.prototype.constructor = CleanerRobot;

CleanerRobot.prototype.clean = function () {
  this.isCleaning = true;
  console.log(`${this.model} has started cleaning`);
};

CleanerRobot.prototype.stop = function () {
  this.isCleaning = false;
  console.log(`${this.model} has stopped cleaning`);
};

const cleanerRobot = new CleanerRobot('Mark II', 50);

console.log(cleanerRobot);
cleanerRobot.clean();
cleanerRobot.stop();
// CleanerRobot { model: 'Mark II', energy: 50, isCleaning: false }
// Mark II has started cleaning
// Mark II has stopped cleaning

console.log(cleanerRobot instanceof CleanerRobot);
console.log(cleanerRobot instanceof Robot);
// true
// true

console.log(Robot.prototype.isPrototypeOf(cleanerRobot));
// true
