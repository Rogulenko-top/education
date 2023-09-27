"use strict"

let num = 20;

function showFirstMessage(text, arg1, arg2, arg3) {
	console.log(text);
	let num = 60;
	console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
	return (a+ b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
	let num = 60;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
	console.log("Hello");
};

logger();

const calc = (a, b) => a + b; 