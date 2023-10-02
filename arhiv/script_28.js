"use strict"

const str = "test";
const arr = [1 , 2, 4]

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fruit = "Same fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(7, 11));


const num = 12.2;
console.log(Math.round(num));

const tst = '12.8px';
console.log(parseInt(tst));
console.log(parseFloat(tst));

console.log(Math.sign(5) !== -1);

console.log(String(10).includes('.') === false);

console.log(Math.ceil(5 / 4));