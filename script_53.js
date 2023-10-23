// Оператор нулевого слияния (Nullish , ??)

'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;

    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName = undefined; // undefined или null будет возвращено User
// в остальных случаях falsy вернет само значение 0, '', NaN.
let userKey = 0;

console.log(userName ?? userKey ?? 'User'); // Nullish не может быть связан с ореаторами &&, || 