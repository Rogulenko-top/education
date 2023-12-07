'use strict';

class User{
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Rogulenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }
    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        if (typeof surname === 'string') {
            this.#surname = surname;
        } else {
            console.log('Вы ввели не корректные данные');
        }
    }
    get age() {
        return this._age;
    }

    set age(age) {
        if(typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const anton = new User('Anton', 27);
console.log(anton.surname);
anton.surname = "GB1GFB";
console.log(anton.surname);
anton.say();