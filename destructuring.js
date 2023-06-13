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
let languages = ['English', 'French', 'Spanish', 'German', 'Japanese'];
let [, , , johnNative, johnSecundary] = languages;

console.log(johnNative, johnSecundary);
console.log('-------------');
// Using rest parameter syntax
