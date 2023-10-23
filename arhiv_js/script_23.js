"use strict"

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
		
	}
}

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
	
	for (let j = 0; j < i; j++) {
		result += "*";
	}
	result += '\n';
}

console.log(result);


first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 5; k++) {
			if (k === 2) break first;
			console.log(`Third level: ${k}`);
			
		}
	}
}

let i = 2;

while (i < 16){
	i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    } 

}

function fifthTask() {
    const arrayOfNumbers = [];
    
    // Пишем решение вот тут
    let j = 0;
    for (var i = 5; i <= 10; i++) {
        arrayOfNumbers[j] = i;
        j++;
    }
    
    // Не трогаем
    return arrayOfNumbers;
}
console.log(fifthTask());

