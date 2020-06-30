"use strict";

// Отложенные функции в JS:
function defer (cb, ms) {
  return function () { // выполняет асинхронный код?
    setTimeout(() => {
      cb.apply(this, arguments); // выполняет бизнес логику?
    }, ms);
  };
}

// бизнес логика?
// имеет общий контекст
function getMessage (message) {
  console.log(this);
  console.log(message);
}

// выполняют асинхронный код?
// имеют общий контекст
const getMessageDeferred1 = defer(getMessage, 2000);
const getMessageDeferred2 = defer(getMessage, 4000);
const getMessageDeferred3 = defer(getMessage, 6000);

getMessageDeferred1('Hello!');
// in 2000 ms:
// undefined
// Hello!

getMessageDeferred2('Buy!');
// in 4000ms:
// undefined
// Buy!

getMessageDeferred3.call({ type: 'user' }, 'Message!');
// in 6000ms:
// { type: 'user' }
// Message!
