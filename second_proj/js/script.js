'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};
	
	
	const adv = document.querySelectorAll('.promo__adv img');
	const bg = document.querySelector('.promo__bg');
	const promoGenre = bg.querySelector('.promo__genre');
	const listMovie = document.querySelector('.promo__interactive-list');
	const addForm = document.querySelector('form.add');
	const addInput = addForm.querySelector('.adding__input');
	const checkbox = addForm.querySelector('[type="checkbox"]');

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilm = addInput.value;
		const favorite = checkbox.checked;

		if(newFilm) {

			if(newFilm.length > 21){
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

			if(favorite){
				console.log("Добавляем любимый фильм");
			}
			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
	
			createMovieList(movieDB.movies, listMovie);
	
		}


		event.target.reset();
	

	});

	const deleteAdv = (arrAdv) => {
		arrAdv.forEach(item => {
			item.remove();
		});
	};

	
	const makeChanges = () => {
		promoGenre.textContent = 'драма';
	
		bg.style.cssText = "background-image: url('img/bg.jpg')";
	};
	
	

	const sortArr = (arr) => {
		arr.sort();
	};

	

	function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArr(films);

		films.forEach((item, index) => {
			parent.innerHTML += `
			<li class="promo__interactive-item">${index + 1} ${item}
					<div class="delete"></div>
			</li>`;
		   });

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);

				createMovieList(films, parent);
			});
		});
	};

	deleteAdv(adv);
	makeChanges();
	
	createMovieList(movieDB.movies, listMovie);

});