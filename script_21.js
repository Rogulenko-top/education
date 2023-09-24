// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
// 	console.log('Я сыт!');
// }


const hamburger = 3; 
const fries = 3;
const cola = 0;
const nuggets = 4;

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

if (hamburger || fries || cola) {
	console.log('Все довольны!');
} else {
	console.log('Уходим отсюда!');
}

console.log(1 && 0);
console.log(1 && 6);
console.log(null && 7);
console.log(0 && 'fsdfsdfsdfdsf');

if (hamburger === 3 && cola && fries) {
	console.log('Все сыты!');
} else {
	console.log('Мы уходим');
}

let jhonReport, alexReport, samReport, mariaReport = 'done';

console.log(jhonReport || alexReport || samReport || mariaReport);




