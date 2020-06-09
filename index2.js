"use strict";

// to string

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 
console.log(typeof(5+""));

const num = 5;

console.log("https://vk.com/aasa/"+num);

const fontSize = 25 + 'px';

// to number 

console.log(typeof(Number("123")));

console.log(typeof(+"123"));

console.log(typeof(parseInt("123")));

//to bool

// 0, '', null , undefined, NaN <- null

let switcher = null;

switcher = 1;

if (switcher)
{
    console.log("working....");
}

console.log(typeof(Boolean("123")));

console.log(typeof(!!"123"));