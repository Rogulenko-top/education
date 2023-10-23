'use strict'

const arr = [1, 2, 3, 4, 5 ,6]
arr.sort(compareNum);
console.log(arr);
function compareNum (a, b) {
	return a - b;
}


// arr[99] = 0;
// console.log(arr.length);

// console.log(arr);

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// arr.pop();  // удалить последний элемент массива

// arr.push(10); //добавляте
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

const str = prompt('', '');
const products = str.split('. '); // разделение на элементы массива через точку
products.sort();
console.log(products);
console.log(products.join('; ')); // объединение элементов в одну строчку чезер ;

