'use strict'

// const num = new Number(3);
// const num = new Function(3);
// console.log(num);

//ES5
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушел`);
}

const Ivan = new User('Ivan', 28);
const Alex = new User('Alex', 20);

Ivan.exit();

Ivan.hello();
Alex.hello();

console.log(Ivan);
console.log(Alex);