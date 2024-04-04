// OBJECTS IN JAVASCRIPT

// When you create object using object literal that object is not singleton object

//  But When you create object using constructor function that object is singleton object

// 1. Object Literal

let myObject = {
  name: "Shubham",
  age: 22,
  city: "Pune",
  FullName: "Shubham Karale",
};

// 2. Object Constructor
// let myObject = new Object();

// 3. Object.create() Method
// let myObject = Object.create();

//  Accessing Objects Properties

// 1. Dot Notation
console.log(myObject.name);

// 2. Bracket Notation
console.log(myObject["name"]);

console.log(myObject["FullName"]);
// Above two methods are same but bracket notation is used when you have special characters in the key or keys in the String format.

//  TODO INTERVIEW QUESTIONS
// create symbol and use it as a key in the object
const mySymbol = Symbol("key1");
let myObject2 = {
  [mySymbol]: "HRISHI",
};
console.log(myObject2[mySymbol]);

// Freezing the object = Freeze the object so that no one can change the object.
// Object.freeze(myObject);
// myObject.name = "Hrishi";
// console.log(myObject);

//  OBJECTS METHODS

// 1. Object.keys() = It will return the keys of the object.

let userObj = {
  name: "Shubham",
  age: 22,
  city: "Pune",
  FullName: "Shubham Karale",
  location: "India",
  email: "shukarale200@gmail.com",
  mobileNumber: 1234567890,
};

let keys = Object.keys(userObj);

console.log(keys);

// 2. Object.values() = It will return the values of the object.

let values = Object.values(userObj);
console.log(values);

// When you refer symbol in  the object you have to put  it key in the square brackets.

// 3. Object.entries() = It will return the key value pair of the object.

let entries = Object.entries(userObj);

console.log(entries);

userObj.greeting = function () {
  console.log("Hello, Shubham");
};
console.log(userObj.greeting);
console.log(userObj.greeting());

userObj.greeting2 = function (){
    console.log(`Hello, ${this.name}`);
}

console.log(userObj.greeting2());