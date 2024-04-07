/*
 Definition Of Arrays = Arrays are storing the multiple items under a single variable name
 Arrays is object 
 - Arrays in js can contain mix of different data types.
 - When you do copy operation in javascript it will copy the reference of the array. = Shallow Copy
*/
/*
    What is shallow copy?
Ans = A Shallow copy is an object is copy of the original object. It means it creates a new object and copies the reference of the original object.
Shallow copy shares the same reference of the source object.
*/

/*
 What is deep copy?
Ans = Deep copy is copy of an object whose properties do not share the same reference of the original object/source object. it will make copy of parent/source object.
*/

// Array Declaration
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5]



//  NOTE: Inside Arrays you will get access of prototypes.

// Javascript Array Methods

// 1. push() = Add the element at the end of the array
myArray.push(6); // [1, 2, 3, 4, 5, 6]

// 2. pop() = Remove the element from the end of the array

myArray.pop(); // [1, 2, 3, 4, 5]

// 3. unshift() = Add the element at the start of the array

myArray.unshift(0); // [0, 1, 2, 3, 4, 5]

// 4. shift() = Remove the element from the start of the array

myArray.shift(); // [1, 2, 3, 4, 5]

// 5. splice() = Add or Remove the element from the array

myArray.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]

// 6. slice() = Copy the element from the array

let newArray = myArray.slice(2, 4); // [6, 3]

// 7. concat() = Concatenate the two arrays

let myArray2 = [7, 8, 9, 10];
let newArray2 = myArray.concat(myArray2); // [1, 2, 6, 3, 4, 5, 7, 8, 9, 10] 

// 8. reverse() = Reverse the array

let newArray3 = myArray.reverse(); // [5, 4, 3, 6, 2, 1]

// 9. sort() = Sort the array

let newArray4 = myArray.sort(); // [1, 2, 3, 4, 5, 6]


// 10. indexOf() = Find the index of the element

let index = myArray.indexOf(3); // 2

// 11. lastIndexOf() = Find the last index of the element

let index2 = myArray.lastIndexOf(3); // 2


// 12. includes() = Check the element is present in the array or not

let isPresent = myArray.includes(3); // true

// 13. join() = Join the array elements

let myArrString  = myArray.join(); // 1,2,3,4,5,6

console.log( typeof myArrString);
