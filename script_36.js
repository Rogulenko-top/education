"use strict"

let str = 'some';
let str_obj = new String(str);

// console.log(typeof(str));
// console.log(typeof(str_obj));

console.dir([1, 2, 3]);

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('Hello');
	}
};

const john = Object.create(soldier); // создаем переменную которая наследует от soldier

// const john = {
// 	health: 100
// };

//john.__proto__ = soldier; // устаревший способ применения протатипа

// Object.setPrototypeOf(john, soldier); // правильный способ применения протатипа
//john наследует от soldier

// console.log(john.armor); 

john.sayHello();