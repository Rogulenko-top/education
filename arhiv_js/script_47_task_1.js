
function factorial(num) {
    if (typeof(num) === 'string' || !Number.isInteger(num) || isNaN(num)) {
        return 'Не является числом';
    } else if (num <= 0){
        return 1;
    }
    return num * factorial(num - 1);
}

factorial('2');
