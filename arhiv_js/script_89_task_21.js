'use strict';

const funds = [
    // {amount: -1400},
    {amount: 2400},
    // {amount: -1000},
    {amount: 500},
    {amount: 10400},
    // {amount: -11400},
];

const getPositiveIncomeAmount = (data) => {
    return data
        .filter(item => item.amount > 0)
        .map(item => item['amount'])
        .reduce((preValue, currValue) => preValue + currValue, 0);
};
// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    const arr = data.map(item => item['amount']);
    // arr.find(num => {
    //     for (const num of arr) {
    //         if (num < 0) {
    //             console.log('true')
    //             return arr.reduce((preValue, currValue) => preValue + currValue, 0);
    //         } else {
    //             console.log('false')
    //             return getPositiveIncomeAmount(arr);
    //         }
    //     }
    //
    // });
    // console.log(Math.sign(arr.join(', ')));
    // arr.forEach(num => {
    //     if (Math.sign(num) === -1 || Math.sign(num) === -0) {
    //         console.log(arr.reduce((preValue, currValue) => preValue + currValue, 0));
    //         return arr.reduce((preValue, currValue) => preValue + currValue, 0);
    //     } else {
    //         return getPositiveIncomeAmount(data);
    //     }
    // });
    // for (const num of arr) {
    //     if (Math.sign(num) === -1 || Math.sign(num) === -0) {
    //         console.log(num);
    //         arr.reduce((preValue, currValue) => preValue + currValue, 0);
    //     } else {
    //         return getPositiveIncomeAmount(data);
    //     }
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(Math.sign(arr[i]));
        // if (Math.sign(arr[i]) === -1) {
        //     console.log('if');
        //     return arr.reduce((preValue, currValue) => preValue + currValue, 0);
        // } else {
        //     console.log('else');
        //     return getPositiveIncomeAmount(data);
        // }
    // }
    const sum = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            sum[i] = arr[i];
        }
    }
    if (sum.length !== 0) {
        console.log('true')
        return arr.reduce((preValue, currValue) => preValue + currValue, 0);
    } else {
        console.log('false')
        return getPositiveIncomeAmount(data);
    }
};
console.log(getTotalIncomeAmount(funds));