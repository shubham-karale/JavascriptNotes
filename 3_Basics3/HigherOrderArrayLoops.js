// * Higher Order Arrays Loops
/*
    - for of
     for in


*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const it of arr) {
  console.log(it); // 1 2 3 4 5 6 7 8 9 10
}

const greeting = "Hello World";

for (const it of greeting) {
  console.log(it); // H e l l o   W o r l d
}

const obj = {
  name: "John",
  age: 30,
  job: "developer",
};

for (const key in obj) {
  console.log(key); // name age job
  console.log(obj[key]); // John 30 developer
}

// ! for of loop is not working with objects

// for (const it of obj) {
//   console.log(it); // TypeError: obj is not iterable
// }

// * for in Loop

const languages = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  cs: "C#",
  java: "Java",
};

for (const key in languages) {
  console.log(key); // js py rb cs java
  console.log(languages[key]); // JavaScript Python Ruby C# Java
}

const nums = [1, 2, 3, 4, 5];

for (const key in nums) {
  console.log(key); // 0 1 2 3 4
  console.log(nums[key]); // 1 2 3 4 5
}

// In for in loop we get keys of the arrays which is index of the array

// * Map is not iterable - so we can't use for of loop with map

//  ! for Each Loop

/*
    - forEach method is a higher order function
    - it takes a callback function as an argument
    - it calls the callback function for each element in the array
    - forEach method does not return anything
    - forEach method does not change the original array
    - forEach method is not chainable


    Callback function
    - it is a function that is passed as an argument to another function
    - it is called inside the other function
    - it is not called by us
    - it is called by the other function
    - It doesn't have a name

*/
// ! It runs a function for each element in the array
console.log("-----------------------------------------------------");
const arr2 = [2, 4, 6, 8, 10];

arr2.forEach((it) => {
  console.log(it); // 2 4 6 8 10
});

console.log("-----------------------------------------------------");

const greeting2 = "Hello World";
greeting2.split("").forEach((it) => {
    console.log(it); // H e l l o   W o r l d
    });

function logArray(it) {
  console.log(it);
}

arr2.forEach(logArray); // 2 4 6 8 10

//  Just give the reference don't call the function

const myArr = [{
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
  {
    name: "Jake",
    age: 35,
  },
 ];

myArr.forEach((it) => {
    console.log(it.name); // John Jane Jake
    console.log(it.age); // 30 25 35
    });