"use strict";

function User() {
  const counter = {
    0: 0,
    length: 1,
  };

  setInterval(function () {
    counter[0] = counter[0] + 1;
  }, 1000);

  function getCount () {
    return counter[0];
  };

  const publicAPI = {
    counter, // Хранит ссылку на объект counter, counter.count будет обновляться
    // Хранит ссылку на ячейку памяти хранящую примитивное значение,
    // высчитаное на момент срабатывания counter[0],
    // обновляться не будет
    count: counter[0],
    getCount, // Хранит ссылку на scope истанса User, будет возвращать обновленное значение
  };

  return publicAPI;
}

const fred = User();

console.log(fred, fred.getCount());
// {
//   counter: { '0': 0, length: 1 },
//   count: 0,
//   getCount: [Function: getCount]
// } 0

setInterval(() => {
  console.log(fred, fred.getCount());
}, 3000);
// {
//   counter: { '0': 3, length: 1 },
//   count: 0,
//   getCount: [Function: getCount]
// } 3
