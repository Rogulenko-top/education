const someString = 'This is some strange string';

function reverse(str) {
	let result = [];
	let word = '';

	for (let i = 0; i < str.length; i++) {
		result[i] = str[i];	
	}
	
	result.reverse();

	result.forEach(item => {
		word +=`${item}`
	})

	console.log(word);
}

reverse(someString);