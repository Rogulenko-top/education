const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
	for (let i = 0; i < 5; i++){
		console.log(i);
		if (i === 3) return
	}
	console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);

function getMathResult(num1, num2) {
    if (typeof(num2) ==='string' || num2 <= 0){
        console.log(num1);
    } else {
	
	let result = '';
	const nm = num1;
    for (let i = 0; i < num2; i++) {
		result = `${result}${num1}`;
		num1 += nm;
	   if (i + 1 === num2) {
		result += ''; 
	   } else {
		result += '---'; 
	   }
	   
    }
	console.log(result);
	return result;
	}
}

getMathResult(3, 6);

