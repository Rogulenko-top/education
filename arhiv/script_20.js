'use strict'

if (4 == 9) {
	console.log('OK!');
} else {
	console.log('Error!');
}

const num = 50;

if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Много');
} else {
	console.log('Ok!');
}

(num === 50 ) ? console.log('Ok!') : console.log('Error');

const numb = 60;

switch (numb) {
	case 59: 
		console.log("Неверно");
		break;
	case 100:
		console.log("Неверно");
		break;
	case 60:
		console.log("В точку!");
		break;
	default:
		console.log("Не в этот раз!");
		break;
}

