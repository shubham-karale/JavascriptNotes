// TODO SLICE VS SPLICE

// SLICE = Returns the selected elements in an array, as a new array object.

// SPLICE = Adds/Removes elements from an array.

// Splice() = It manipulates the original array.

// Slice() = It does not manipulate the original array.

let myArray = [1, 2, 3, 4, 5];

console.log("A", myArray);

const myArr1 = myArray.slice(1, 4); /// [2, 3, 4]

console.log("B", myArr1);

const myArr2 = myArray.splice(1, 4); // [2, 3, 4, 5]

console.log("C", myArray);


