'use strict'

// const now = new Date();
const now = new Date('2023-11-05');
// const tm = Date.parse('2023-11-05');
//Ниже используются методы геттеры, мы получаем значения
//console.log(now.getFullYear()); // год
//console.log(now.getMonth()); // месяц
//console.log(now.getDate()); // число дня
//console.log(now.getHours()); // часы
//console.log('Часы по часовому поясу ' + now.getUTCHours()); // часы по часовому поясу
//console.log(now.getMinutes()); // минуты
//console.log(now.getSeconds()); // секунды

//console.log(now.getTimezoneOffset()); // разница между часовым поясом и UTC
//console.log(now);
//console.log(now.getTime()); // кол-во миллисекунд со дня 1970.01.01

//Методы сетторы
//console.log(now.setHours(8));
//console.log(now);
// console.log(tm);

let start = new Date();

for (let i = 0; i < 10000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`); //бенчмарк, базовый подход