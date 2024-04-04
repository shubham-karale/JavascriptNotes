const obj1 = { 1: "A", 2: "B", 3: "C" };
const obj2 = { 4: "D", 5: "E", 6: "F" };

const obj3 = { obj1, obj2 };

// Object ke andar Object add ho jayega
console.log(obj3); // { obj1: { '1': 'A', '2': 'B', '3': 'C' }, obj2: { '4': 'D', '5': 'E', '6': 'F' } }

const obj4 = { ...obj1, ...obj2 };

console.log(obj4); // { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }

// Object.Assign() = Merge the two objects

const obj5 = Object.assign(obj1, obj2);
// Obj1 ke andar Obj2 store hota hai isliye Apun naya empty object pass karte hai as paramter in Object.Assign me.

// TODO: Recommended Syntax for merging the two objects using Object.Assign()

const obj6 = Object.assign({}, obj1, obj2);
// We add empty object as first argument to avoid the mutation of the original object.

// Object.keys() = It will return the keys of the object in the Arrays form.

//  ! MOST IMP FOR DB
const keys = Object.keys(obj1);

console.log(keys); // [ '1', '2', '3' ]

console.log(Object.values(obj1)); // [ 'A', 'B', 'C' ]

console.log(Object.entries(obj1)); // [ [ '1', 'A' ], [ '2', 'B' ], [ '3', 'C' ] ]

// hasOwnProperty() = It will check the property is present in the object or not.
 console.log(obj1.hasOwnProperty(1)); // true


