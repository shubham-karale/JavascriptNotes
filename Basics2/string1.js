/*

` ` = String Interpolation

`Hello, ${name}!`; // Hello, <NAME>!

String is an object in JavaScript

*/

const name = new String("Shubham");

console.log(name[0]);

console.log(name.__proto__ === String.prototype); // true

console.log(name.length); // 7

console.log(name.toUpperCase()); // SHUBHAM

console.log(name.toLowerCase()); // shubham

console.log(name.charAt(4)); // h

console.log(name.indexOf("h")); // 4

const newName = name.substr(1, 3); // hub

console.log(newName); // hub

const newName2 = name.slice(1, 3); // hu

const newName3 = name.splice(1, 3); //

console.log(newName2); // hu

// Replace

const str = "Hello, Shubham!";
const newStr = str.replace("Shubham", "Shubham Gupta");

console.log(newStr); // Hello, Shubham Gupta!

// split method

const str2 = "Hello, Shubham Gupta!";
const newStr2 = str2.split(" ");
console.log(newStr2); // [ 'Hello,', 'Shubham', 'Gupta!' ]
