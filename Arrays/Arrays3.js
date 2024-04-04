//  Arrays Part 3 Notes

let narutoCharacters1 = ["Naruto", "Sasuke", "Sakura", "Kakashi"];

let narutoCharacters2 = ["Shikamaru", "Choji", "Ino"];

// narutoCharacters1.push(narutoCharacters2);

// console.log(narutoCharacters1); // [ 'Naruto', 'Sasuke', 'Sakura', 'Kakashi', 'Itachi', 'Jiraiya', 'Orochimaru', 'Tsunade', [ 'Shikamaru', 'Choji', 'Ino', 'Kiba', 'Hinata', 'Neji', 'Rock Lee', 'Tenten' ] ]

// push() = Not merge arrays but it will add the array as an element in the array.

// concat() = Merge the two arrays.

let narutoAllchar = narutoCharacters1.concat(narutoCharacters2);

console.log(narutoAllchar);

// TODO: Spread Operator

let narutoAllchar2 = [...narutoCharacters1, ...narutoCharacters2];

console.log(narutoAllchar2);

// flat() = It will flatten the array.

const newArr = [1, 2, [3, 4, [5, 6]]];

console.log(newArr.flat(Infinity)); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// isArray() = Check the array is an array or not.
const isArray = Array.isArray(newArr);
console.log(isArray); // true

//  from() = Convert the string into an array.
const str = "Shubham";
const strArray = Array.from(str);
console.log(strArray); // [ 'S', 'h', 'u', 'b', 'h', 'a', 'm' ]

// TODO: INTERVIEW QUESTIONS

// convert objects into Arrays
console.log(Array.from({ name: "Hrishi" }));
// returns empty array

//.of() = Convert the elements into an array.
// Creates new Arrays from the elements passed in.
const arr = Array.of(1, 2, 3, 4, 5);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
