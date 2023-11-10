'use strict';
//1)
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
//2)
// showThis(4, 5);
//
// const obj = {
//     a : 20,
//     b : 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

//3)
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
//
// const Ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// const user = {
//     name: 'Jhon',
// };
//
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
//
// function count(num) {
//     return this * num;
// }
//
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
   e.target.style.backgroundColor = 'red'
    //console.log(this); // в таком случае будет всегда контекст вызова будет сам эелемент на котором
    // произошело событие, тоже самое что event.target
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        }
        // у стрелочной функции нет своего контекста вызова она всегда контекст берет у
        // своего родителя, в данном случае метод sayNumber, а метод всегда ссылеться
        // на контекст самого объекта в котором он существует (вернет сам объект).
        say();
    }
};

obj.sayNumber();

const double = (a, b) => a * 2;
console.log(double(4));




