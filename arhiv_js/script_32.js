'use strict';

// const obj = new Object();

const options = {
	name: 'test',
	width: 1024,
	heigtht: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	},
	makeTest: function() {
		console.log('Test');
	}
}

options.makeTest();

const {border, bg} = options['colors']; // деструктуризация
console.log(border, bg);
//delete options.name; //удаляем в объекте свойство name

console.log(options);

let counter = 0;
for(let key in options) {
	if(typeof(options[key]) === 'object'){
		for (let i in (options[key])) {
			console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
			counter ++;
		}
	} else {
		console.log(`Свойство ${key}, имеет значение ${options[key]}`);
		counter ++;
	}
	
}
console.log(counter);

console.log(Object.keys(options).length);


let opt = {
	title: 'Menu',
	width: 100,
	height: 200,
}

// let {width: w, height: h, title: t, length: l = 300} = opt;

// console.log(`Ширина: ${w}\nВысота: ${h}\nНаименование: ${t}\nДлина: ${l}`);

let {title, ...size} = opt;
// let {width, height} = size;
console.log(size['width']);
let H = 'hello';
size[H] = 'Привет';
console.log(size[H]);