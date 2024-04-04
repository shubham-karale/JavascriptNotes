let myDate = new Date();

// TODO: Interview Questions
// Type of the Date
console.log(typeof myDate); // object

console.log(myDate);

console.log(myDate.getTime()); // 1630866600000

console.log(myDate.toDateString()); // Mon Sep 06 2021

console.log(myDate.toTimeString()); // 00:00:00 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()); // 9/6/2021, 12:00:00 AM

let myCreatedDate = new Date("1999-09-06");
console.log(myCreatedDate); // 1999-09-06T00:00:00.000Z

let myCreatedDate2 = new Date("2024-04-04");
console.log(myCreatedDate2.toLocaleString()); // 4/4/2024, 12:00:00 AM

let myDate1 = Date.now();

console.log(myDate1); // 1630866600000

//console.log(myDate1.getTime()) // 1630866600000



//  TODO PHAS 3

let date1 = new Date();

console.log(date1);

console.log(date1.getFullYear()); // 2021

console.log(date1.getMonth()); // 8

console.log(date1.getDate()); // 6

console.log(date1.getDay()); // 1

console.log(date1.getHours()); // 0

console.log(date1.getMinutes()); // 0

