// "use strict";


// // let number = 5;

// // number = 10;
// // console.log(number+1);

// // const obj = {
// // name : "Alex",
// // age: 25,
// // isMarried: false
// // }

// // console.log(obj);
// //changegit status change 1

// // let arr = [2,3,4,6,7,88,56];

// // console.log(arr[3]);

// // // const result = confirm("может ты ...?");

// // // alert(result);
// // // если перед именем переменной поставить плюс то это уже number
// // //+prompt = number 
// // const answer = prompt("а может ты ...","");

// // alert(typeof(answer));

//  let answer = [];

//  answer[0] = prompt("первое число","");
//  answer[1] = prompt("второе число","");
//  answer[2] = prompt("введи строку","");

// //  document.write(answer);

//  // ` для интерполяции ${}
//  // === строгое сравнение ,типы тоже учитаываются   

//  const category = 'films';

//  console.log(`https://someurl.com/${category}/5`);


// //  const name = "Alex";

// //  alert(`name ${name}`);

//  console.log(6%4);

//  const t = true;

//  let a = !t;
//  console.log(a);

// const numberOfFilms = +prompt("сколько фильмов ты посмотрел", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };

// const a = prompt("Последний фильм", ""),
//     b = prompt("Оценка", ""),
//     c = prompt("Последний фильм", ""),
//     d = prompt("Оценка", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {

//     const a = prompt("Последний фильм", ""),
//         b = prompt("Оценка", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('ok');
//     } else {
//         i--;
//     }


// }

// if (personalMovieDB.count < 5) {
//     console.log("мало");
// } else if (personalMovieDB.count == 5) {
//     console.log("норм");
// } else if (personalMovieDB.count > 5) {
//     console.log("много");
// } else {
//     console.log("хз");
// }

// console.log(personalMovieDB);



// (1 == 1) ? console.log('Ok'): console.log('ne ok');

// let num = 2;

// switch (num) {
//     case 1:
//         console.log('1');
//         break;
//     case 2: {
//         console.log('2');
//         break;
//     }
//     case 3:
//         console.log('1');
//         break;
//     default:
//         console.log('1');
//         break;
// }

// while (num < 100) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num--;
// }
// while (num >= 0);

// for (let i = 0; i <= 20; i++) {
//     console.log(num);
//     num--;
// }


// const str = "test";

// console.log(str.toUpperCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// // console.log(logg.slice(6,11));


// // console.log(logg.slice(6));

// console.log(logg.substring(6,11));

// console.log(logg.substr(6,5)); //position and amount of symbols

// const num = 12.2;

// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// let numberOfFilms;

// function start() {

//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
//     }

// }

// start();

// console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };


// function rememberMyFIlms() {
//     for (let i = 0; i < 2; i++) {

//         const a = prompt("Последний фильм", ""),
//             b = prompt("Оценка", "");

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('ok');
//         } else {
//             i--;
//         }

//     }
// }

// rememberMyFIlms();

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр: ${i}`);

//         if (personalMovieDB.genres[i - 1] != null &&
//             personalMovieDB.genres[i - 1] != '') {} else {
//             i--;
//         }
//     }
// }

// writeYourGenres();

// function showMyDB(hidden) {

//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);


// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang,callback){
//     console.log(`I'm learning: ${lang}`);
//     callback();
// }

// // learnJS('JavaScript',function () {
// //     console.log("50% done");
// // });

// function done() {
//     console.log("20% done");
// }


// learnJS('JavaScript',done);


//-+-++-+-+-+-+-+-+-+-++-+-+-+-+-+-++-+-++-+-+-+++-+-
// let counter = 0;

// // console.log(options);

// // // delete options.name;

// // console.log(options);

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Св-во:${i} значение:${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Св-во:${key} значение:${options[key]}`);
//     counter++;
//     }

// }

// console.log(counter);



// const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },

//     makeTest: function () {
//         console.log(Object.keys(options).sort());
//     }
// };


// // console.log(Object.keys(options));
// // console.log(Object.keys(options).length);

// options.makeTest();

// const {border,bg} = options.colors;

// console.log(border);

"use strict";

const arr = [1, 2, 3, 6, 8, 4, 7, 22, 11];

arr.sort(compareNum);

function compareNum(a, b) {
    return b - a;
}

console.log(arr);



// arr[99]=0;
// console.log(arr);
// arr.pop();
// arr.push(9);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

//forEach не может использовать continue и break

// arr.forEach(function (item, i, array) {
// console.log(`Номер: ${i} значение: ${item} из массива ${arr}`);
// });


// const srt = prompt("","");



// const products = srt.split("/");

// products.sort();

// console.log(products.join(";"));

const soldier = {
    health: 500,
    armor: 200,
    sayHello: function () {
        console.log("Hello");
    }
};

// const jonh = 
// {
//     health:100
// };

//jonh.__proto__ = soldier; old style

// Object.setPrototypeOf(jonh,soldier);

const jonh = Object.create(soldier);

jonh.sayHello();