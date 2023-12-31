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
		
		let question_one = prompt('Один из последних просмотренных фильмов?', '').trim();
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