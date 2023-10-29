"use strict";

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/1993',
	showMyPublicData: function() {
		console.log(`${this.name} ${this.surname}`);
	}
}

const userMap = new Map(Object.entries(user));

// userMap.forEach((value, key) => {
// 	console.log(key);
// });

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj.showMyPublicData());
// console.log(typeof(Object.keys(user)[0]));

const shops = [
	{rice: 500},
	{oil: 200},
	{bread: 50},
];

const budget = [5000, 15000, 25000]

const map = new Map(
	[[{paper: 400}, 8000]]
);

shops.forEach((shop, i) =>{
	map.set(shop, budget[i]);
});

// console.log(map); 

// map.forEach((item, i) => {
// 	console.log(item, i);
// });
// console.log(map.get(shops[0]));

// const goods = [];
for (item of map.values()){
	console.log(item);
	// console.log(item[1]);
	// goods.push(Object.values(item[0]).join(''));
	// goods.push(Object.keys(item[0]).join(''));
	// goods.push(item[1]);

	
}
// console.log(goods);

// const goods = [];
// for (item of map.keys()){
// 	goods.push(Object.keys(item)[0])
// }

// console.log(goods);

console.log(map.has(shops[1]));
console.log(map.get(shops[2]));
// map.delete(key);
// map.clear();
// map.size;


const obj = [{
	price: 1000,
	age: 53,
	tall: 180,
}];

// Object.entries(obj).forEach(item => {
// 	console.log(item[1]);
// });

const goods = new Map();

obj.forEach(() => {
	goods.set(obj, 9000);
});


for (let [prop, val] of goods.entries()){
	console.log(prop, val);
}