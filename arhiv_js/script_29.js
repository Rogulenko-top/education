'use strict'

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
}

function detectPesonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

detectPesonalLevel();

function rememberMyFilms() {
	let i = 0;

	while (i < 2) {
		i++;
		
		let question_one = prompt('Один из последних просмотренных фильмов?', '');
		let question_two = +prompt('На сколько оцените его?');
	
		if (question_one !== null &&  question_two !== null && 
			question_one !== '' &&  question_two !== '' && question_one.length <= 50 ) {
			personalMovieDB.movies[question_one] = question_two;
			console.log('done');
		} else {
			i--;
		}
	
	}
}

rememberMyFilms();

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();

// for (let i = 0; i < 2; i++) {
	
// 	let question_one = prompt('Один из последних просмотренных фильмов?', '');
// 	let question_two = +prompt('На сколько оцените его?');

// 	if (question_one !== null &&  question_two !== null && 
// 		question_one !== '' &&  question_two !== '' && question_one.length <= 50 ) {
// 		personalMovieDB.movies[question_one] = question_two;
// 		console.log('done');
// 	}

	
	
// }

function getTimeFromMinutes(timeMin) {
    if(timeMin < 0 || !Number.isInteger(timeMin) || isNaN(timeMin)) {
        return  "Ошибка, проверьте данные";
    } else if (timeMin <= 600) {

		const MIN = 60; //минут
		const clock = timeMin / MIN;
       const houres = Math.trunc(clock);
       const minutes = Math.ceil((clock % 1) * MIN);

       if (houres === 1) {
           console.log(`Это ${houres} час и ${minutes} минут`);
		}

		if (houres >= 5 && houres <=20 || houres === 0) {
			console.log(`Это ${houres} часов и ${minutes} минут`);
		 }
		 
		 if (houres >= 2 && houres <= 4) {
			 console.log(`Это ${houres} часа и ${minutes} минут`);
		  }
	   
	}
}
getTimeFromMinutes(1);

function findMaxNumber(a, b, c, d) {
	if (
	typeof(a) !=='number' ||
	typeof(b) !=='number' ||
	typeof(c) !=='number' ||
	typeof(d) !=='number'){
		return 0;
	} else {
		return Math.max(a, b, c, d);
	}

}

findMaxNumber(33, 45, 90, 304);


function fib(num) {
	let result = '';
	let a = 1;
	let b = 1;
	for (let i = 3; i <= num; i++) {
		let c = a + b;
		a = b;
		b = c;
		result += b;
	}
	return result;
}
console.log(fib(10));
