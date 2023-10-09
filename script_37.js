'use'

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели');
		}
	},

	detectPesonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},

	rememberMyFilms: function() {
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
	},

	showMyDB: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},

	writeYourGenres: function() {
		const { genres } = personalMovieDB;

			for (let i = 1; i <= 3; i++) {
				let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase();

				if(genre === null || genre === ''){
					console.log('Вы ввели некорректные данные или не ввели их вовсе');
					i--;
				} else {
					genres[i - 1] = genre;
				}
			}
		genres.forEach((item, index) =>{
		console.log(`Любимый жанр #${index + 1} - это ${item}`);});
	},

}

