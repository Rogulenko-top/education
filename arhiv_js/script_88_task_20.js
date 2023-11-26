const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// function showGoodFilms(arr) {
//    return arr.filter(film => film.rating >= 8);
// }
// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {
//    let result = [];
//    arr.forEach((item, i) => result[i] = item.name);
//    return result.join(', ');
//
// }
// console.log(showListOfFilms(films))

function setFilmsIds(arr) {
    return arr.map((obj, index) => {
       //  const {name, rating} = obj;
       // return {
       //     name: name,
       //     rating: rating,
       //     id: index,
       // }
        obj.id = index;
        return obj;
    });


}
console.log(setFilmsIds(films));
const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
   return arr.every(item => item['id'] || item['id'] === 0 ? true : false );
}
console.log(checkFilms(tranformedArray));