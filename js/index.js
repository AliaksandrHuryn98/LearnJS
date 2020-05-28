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

// // // const result = confirm("может ты пидор?");

// // // alert(result);
// // // если перед именем переменной поставить плюс то это уже number
// // //+prompt = number 
// // const answer = prompt("а может ты пидор","");

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

"use strict";

const numberOfFilms = +prompt("сколько фильмов ты посмотрел","");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
    };

    const a = prompt("Последний фильм",""),
          b = prompt("Оценка",""),
          c = prompt("Последний фильм",""),
          d = prompt("Оценка","");

          personalMovieDB.movies[a] = b;
          personalMovieDB.movies[c] = d;

          console.log(personalMovieDB);