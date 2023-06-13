/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring Arrays

let ages = [30, 26, 27];
let [john, mary, joe] = ages;

console.log(`John: ${john}\nMary: ${mary}\nJoe: ${joe}\n`);
console.log('-------------');

// Destructuring Objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};

let { mike, jill, alicia } = jobs;

console.log(`Mike: ${mike}\nJill: ${jill}\nAlicia: ${alicia}\n`);
console.log('-------------');

// Destructuring subsets

// Array subset

console.log('------Array subset-------');

let languages = ['English', 'French', 'Spanish', 'German', 'Japanese'];
let [, , , johnNative, johnSecundary] = languages;

console.log(`John First Language: ${johnNative}\nJohn Second Language: ${johnSecundary}`);

// Object subset

console.log('------Object subset-------');

let languagesObject = {
    firstLanguage: 'English',
    secondLanguage: 'French',
    thirdLanguage: 'Spanish',
    forthLanguage: 'German',
    fifthLanguage: 'Japanese'
}

let { forthLanguage, fifthLanguage } = languagesObject;

console.log(`John First Language: ${forthLanguage}\nJohn Second Language: ${fifthLanguage}`);

console.log('-------------');

// Using rest parameter syntax

// Array rest

let fruits = ['apple', 'banana', 'orange', 'peach', 'cherry'];

let [favorite, secondFavorie, ...others] = fruits;

console.log(favorite, secondFavorie, ...others);
console.log(favorite);
console.log(secondFavorie);
console.log(...others); // no array
console.log(others); // with array

// Object rest

let favoriteFood = {
    brian:'pizza',
    anna:'pasta',
    sarah: 'vegetarian',
    andrea:'steak'
}

let {brian, anna, ...rest} = favoriteFood;

console.log(brian, anna);
console.log(brian);
console.log(anna);
console.log(rest); // rest still as an object