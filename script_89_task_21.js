'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data
        .filter(item => item.amount > 0)
        .map(item => item['amount'])
        .reduce((preValue, currValue) => preValue + currValue, 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    const arr = data.map(item => item['amount']);
    const sum = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            sum[i] = arr[i];
        }
    }
    if (sum.length !== 0) {
        return arr.reduce((preValue, currValue) => preValue + currValue, 0);
    } else {
        return getPositiveIncomeAmount(data);
    }
};
console.log(getTotalIncomeAmount(funds));