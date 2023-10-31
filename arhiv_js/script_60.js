"use strict"

const arr = [1, 2, 3, 3, 4, 5, 6, 7, 7, 'Anton', "Anton", 'Sergey'];

arr.find(item => {
	console.log(item === 'Anton');
});

function unique(arr) {
	return Array.from(new Set(arr));
}

console.log(unique(arr));
// const set = new Set(arr);

// set.add('Ivan')
// 	.add('Gennadiy')
// 	.add('Anton');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);

// set.forEach((value, valueAgaing, set) => {
// 	console.log(value, valueAgaing);
// })

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

