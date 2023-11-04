'use script'

// const bigint = 111111221561465465496854984798748989798n;

const sameBigInt = BigInt(111111221561465465496854984798748989798);

// console.log(Math.round(5n));
// console.log(typeof(5n + 1n));

console.log(5n / 2n); // результат деления будет возвращать без дробной части

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) +  number);