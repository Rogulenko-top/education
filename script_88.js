'use strict';

//filter <---

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const shortNames = names.filter( name => name.length < 5);
// console.log(shortNames);

//map <---

// let answers = ['IvAn', 'Annna', 'HelllOO'];
// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

// every/some <--- returns boolean value

// const some = [4, 8, 21];
// console.log(some.some(item => typeof (item) === 'number'));
// console.log(some.every(item => typeof (item) === 'number'));

//reduce <---

// const arr = [4, 5, 1, 2, 6];
// const result = arr.reduce((sum, current) => {
//     return sum + current;
// }, -1);
// console.log(result);

// const arr = ['apple', 'plum', 'pear'];
// const result = arr.reduce((sum, current) => {
//     return `${sum} ${current}`;
// }, 4);
// console.log(result);

const obj = {
    ivan: 'person',
    ann: 'person',
    cat: 'animation',
    dog: 'animation',
};

const newArr = Object
    .entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);

console.log(newArr);