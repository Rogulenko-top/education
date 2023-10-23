'use strict';

console.log('arr' + ' - object');
console.log(4 + +'5');

let incr = 10, 
	decr = 10;

incr++; // инкремент
decr--; // декримент

console.log(incr);
console.log(decr);

++incr; // перфиксная форма
decr--; // постфиксная форма

console.log(incr--);
console.log(decr--);

console.log(5 % 2); // остаток от деления, оператор %

console.log(2 * 4 === +'8');

const isChecked = true,
		isClose = true;

console.log(isChecked && isClose); // результат true если обе переменные имеют true
console.log(isChecked || isClose); // результат true , если одна из переменных имеет true
console.log(isChecked || !isClose); // резльтат true, при том что !isClose имеет значение false
