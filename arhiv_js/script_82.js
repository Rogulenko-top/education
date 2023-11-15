'use strict'

const person = {
    name: 'Alex',
    phone: '+75651651651651',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = 'Nataly';

console.log(person);
console.log(clone);