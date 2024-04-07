const number = 1256.65258;

console.log(number.toString()); // 1256.65258

console.log(number.toExponential()); // 1.25665258e+3

console.log(number.toFixed(2)); // 1256.65

console.log(number.toPrecision(2)); // 1.3e+3

console.log(number.valueOf()); // 1256.65258

console.log(number.toFixed(2)); // 1256.65

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// ************************************* MATH ***********************************

//TODO MATHS GENERIC FORMULAE FOR FINDING RANDOM NUNBER BETWEEN RANGE

const min = 65;
const max = 75;

 console.log(Math.floor((Math.random() * (max - min) + min))); // 65-75

const nums = 25646.2556;

console.log(Math.abs(-34)); //

console.log(Math.round(nums)); // 25646

console.log(Math.ceil(nums)); // 25647

console.log(Math.floor(nums)); // 25646

console.log(Math.pow(2, 3)); // 8

console.log(Math.sqrt(64)); // 8

console.log(Math.min(2, 3, 4, 5, 6, 7, 8, 9)); // 2

console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9)); // 9

console.log(Math.random()); // 0.123456789

console.log(Math.floor(Math.random() * 10)); // 0-9

console.log(Math.floor(Math.random() * 10) + 1); // 1-10

console.log(Math.floor(Math.random() * 100) + 1); // 1-100

console.log(Math.floor(Math.random() * 1000) + 1); // 1-1000

console.log(Math.floor(Math.random() * 10000) + 1); // 1-10000

console.log(Math.floor(Math.random() * 10 + 1)); // 1-10
