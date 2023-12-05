'use strict'

// new RegExp('pattern', 'flags');
//
// /pattern/f;

// const ans = prompt('Введите ваше имя');
// const reg = /\d/g; //Шаблон того что мы ищем, паттерн
// console.log(`+7${ans.match(reg).join('')}`); //true либо false

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/ig));

const str1 = 'My name is R2D2';
console.log(str1.match(/\D/gi));

// \D - не числа
// \W - не буквы

// console.log(ans.search(reg));
// console.log(ans.match(reg));
// i - вне зависимости от регистра
// g - когда несколько вхождений
// m - многострочный режим
//классы
// \d - ищем цифры
// \w - ищем слова, буквы
// \s - ищем все пробелы
// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

