'use strict';
const log = function(a, b, ...rest) {
    console.log(a,b, rest);
}

log('basic', 'rest', 'sdfdsfsdf', 'sdfdsfsdfsd', 'sdfdsfsdfsdf');

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;
    console.log(number * basis);
}

calcOrDouble(3);



function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }

    console.log(sum());
}

getSum(4, 5);