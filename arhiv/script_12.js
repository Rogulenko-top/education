//Массив
const arr = [1, 2, 3];
arr[10] = '456'; // добавляем в массив данные
console.log(arr);

//Объект
const arrObj = {
	0: 'a',
	1: 'b',
	2: 'c',
	3: 'd',
	abc: {
		df: [{b: 'Hello'},{}] // структура данных в объекте
	}, // создал еще объект внутри родителя объекта arrObj
}
console.log(arrObj.abc.df[1]);


arrObj.b = '12445';//добавление нового свойства в объект
console.log(arrObj['b']); // обращаемся квадратных скобок с свойствам объекта
console.log(arrObj.b); // обращаемся через точку

const obj = {a: 1, b: 2, c:3};

console.log(obj.a);

const objPerson = {
	'Anna': 500,
	'Alice': 800,
};

