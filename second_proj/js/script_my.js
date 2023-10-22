/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const img = document.querySelectorAll('.promo__adv img');
const bg = document.querySelector('.promo__bg');
const promoGenre = bg.querySelector('.promo__genre');
const listMovie = document.querySelector('.promo__interactive-list');

const btnFormAdd = document.querySelector('.add button');
const inputNameFilms = document.querySelector('.adding__input');

img.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'драма';

bg.style.cssText = "background-image: url('img/bg.jpg')";

listMovie.innerHTML = '';


movieDB.movies.sort();

btnFormAdd.addEventListener('click', (e) => {
    e.preventDefault();
    movieDB.movies.push(inputNameFilms.value);
    listMovie.innerHTML = '';
    listFilmsArr(movieDB.movies);
});

function listFilmsArr(listArr) {
    

    listArr.forEach((item, index) => {
    listMovie.innerHTML += `
    <li class="promo__interactive-item">${index + 1} ${item}
            <div class="delete"></div>
    </li>`;
   });
   
    document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', (e) => {
        item.parentElement.remove();
        console.dir(e.target);
        // movieDB.movies.splice(index, 1);
    });
});

};

listFilmsArr(movieDB.movies);






// console.log(movieDB.movies);


