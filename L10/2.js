"use strict";

// Как хендлить отложенный запрос данных на ввод в search input:
const defer = (cb, ms) => {
  let timestamp = null;
  let timer = null;

  return function (...args) {
    if (timestamp) {
      if (new Date().getTime() - timestamp < ms) {
        return;
      }
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      cb.apply(this, args);
    }, ms);
  };
}

function foo () {
  console.log('do some asynchronous work...');
}

const handleKeyPress = defer(foo, 2000);

handleKeyPress();
