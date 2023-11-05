'use strict'

// function func(smith) {
//     smith = 'string';
//     return console.log(smith);
// }

// const someRes = getData();
// const node = document.querySelector('.class');
//
// setInterval(function () {
//     if(node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// function outer() {
//     const potentionallyHungeArray = [];
//     return function inner() {
//         potentionallyHungeArray.push('Hello');
//         console.log('Hello!!');
//     }
// }
//
// const sayHello = outer();

function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.appendChild(testDiv);
}

createElement();

function deleteElement() {
    document.body.removeChild(document.getElementById('test'))
}

deleteElement();