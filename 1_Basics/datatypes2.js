/* TODO DATATYPES */

"use strict"; // Strictly uses neweer version of Javascript

// ** DATA TYPES

/*
- Number
- BigInt
- String
- Boolean
- null = Standalone value + data type
- undefined = nothing stored in the that variable
symbol = unique identifier
object = collection of key-value pairs

*/

console.log(typeof 1); // number
console.log(typeof 10n); // bigint
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol("symbol")); // symbol
console.log(typeof {}); // object

// TODO : NULL

// - Null is a primitive value and is one of the data types in JavaScript.

// - It is a standalone value and is not an object.

// - It is used to represent the absence of an object value.
console.log(typeof null); // object

//  * DATA TYPE CONVERSION

// - Converting one data type to another is called type conversion.

// - JavaScript provides two types of type conversion:
//  - Implicit Type Conversion
//  - Explicit Type Conversion

/*  - Implicit Type Conversion
 - JavaScript automatically converts one data type to another data type.


*/

// Example 1: Converting Number to String
let numString = "10";
let num = Number(numString); // 10

//  "33abc" => NAN

/*

 let str = "33abc";
 let check = Boolean(str); // true

*/

console.log("1" + 2); // 12
console.log(1 + "2"); // 12

console.log(1 + 2 + "3"); // 33

console, log(1 + 2 + "2"); // 32

console.log(1 + true); // 2

console.log(1 + false); // 1

console.log(1 + null); // 1

console.log(1 + undefined); // NaN

//----------------------------------------------------------------------------------------------------------------------------

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true


/*
    why these happens ?
    Because of the Abstract Equality Comparison Algorithm
    equality check  == and comparison check > < >= <= work differently.
    comparison convert null to number and null becomes 0
*/


console.log(null == undefined); // true

console.log(null === undefined); // false

console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(undefined>0); // false
console.log(undefined<0); // false
console.log(undefined>=0); // false


