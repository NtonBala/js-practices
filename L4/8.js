'use strict';

// Good practice is to avoid preserving data that can be computed,
// you may use modifiable (getter/setter) property instead:
const user = {
  birthday: null,
  
  get age () {
    if (!this.birthday) {
      return null;
    }

    const today = new Date();

    const yearDelta = today.getFullYear() - this.birthday.getFullYear();

    return yearDelta;
  },
};

user.birthday = new Date(1983, 9, 17);

console.log(user.age); // 37

// Note, that getters/setters do not spread,
// modifiable property is computed instead:
console.log({...user}); // { birthday: 1983-10-16T21:00:00.000Z, age: 37 }
