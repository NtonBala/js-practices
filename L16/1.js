"use strict";

// Singleton
const cleanerRobot = new (class {
  constructor (model) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }
})('Mark II');

console.log(cleanerRobot.getModel()); // Mark II
