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
const promoInteractiveList = document.querySelector('.promo__interactive-list');
const promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');


img.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'драма';

bg.style.cssText = "background-image: url('img/bg.jpg')";

promoInteractiveItem.forEach(item => {
    item.remove();
});

movieDB.movies.sort();


for (let i = 0; i < movieDB.movies.length; i++) {
    const li = document.createElement('li');
    const div = document.createElement('div');

    li.classList.add('promo__interactive-item');
    div.classList.add('delete');

    promoInteractiveList.append(li);
    
    li.textContent = `${i + 1} ${movieDB.movies[i]}`;
    li.append(div);
}



