"use strict";

/*
  Стрелочные функции берут контекст из лексического окружения.
  Если стрелочная функция находится внутри метода объекта, получится,
  что в момент ее создания в ее лексическом окружении this === объект.
  В данном случае, лексическое окружение функции в момент ее создания - весь файл,
  соответственно в нем this === window | {}.
*/

const user = {
  name: 'Walter',
  sayHi: () => {
    console.log(`Hi, my name is ${this.name} )`);
  },
  sayBy () {
    console.log('Good by');
  },
};

user.sayHi();

(user.name === 'Walter' ? user.sayHi : user.sayBy)();

// 'Hi, my name is undefined )'
// 'Hi, my name is undefined )'
