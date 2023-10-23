'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}

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

// for (let i = 0; i < 2; i++) {
	
// 	let question_one = prompt('Один из последних просмотренных фильмов?', '');
// 	let question_two = +prompt('На сколько оцените его?');

// 	if (question_one !== null &&  question_two !== null && 
// 		question_one !== '' &&  question_two !== '' && question_one.length <= 50 ) {
// 		personalMovieDB.movies[question_one] = question_two;
// 		console.log('done');
// 	}

	
	
// }

console.log(personalMovieDB);