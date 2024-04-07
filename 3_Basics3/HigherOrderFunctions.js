// Higher Order Functions

// Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

// Functions are first class citizens in JavaScript, which means they can be assigned to variables, passed as arguments, and returned from other functions.

 const programmingLanguages = ["Java","Javascript","Python","Ruby","CPP","Swift","Kotlin"];

 const values = programmingLanguages.forEach((language) => {
    //  console.log(language);
    return language;
 } );

 console.log(values); // undefined

 // from above code we can see that forEach method does not return anything, it just iterates over the array and does some operation on each element.


    // filter method
const nums = [1,2,3,4,5,6,7,8,9,10];

const nums1 = nums.filter((num) => {
    return num % 2 === 0;
}
);

console.log(nums1); // [2,4,6,8,10]

// filter method returns a new array with elements that pass the test implemented by the provided function.

const books = [
    {
        title: 'Book1',
        genre: 'History',
        rating: 4.5,
        publishDate: 2010
    },
    {
        title: 'Book2',
        genre: 'Science',
        rating: 4.0,
        publishDate: 2015
    },
    {
        title: 'Book3',
        genre: 'History',
        rating: 4.8,
        publishDate: 2018
    },
    {
        title: 'Book4',
        genre: 'Science',
        rating: 4.2,
        publishDate: 2012
    }
]


const userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks);

const userBooks1 = books.filter( (bk) => bk.rating > 4.5)

console.log(userBooks1); 

const userBooks2 = books.filter( (bk) => bk.publishDate > 2015)
console.log(userBooks2);

//******************************************************************** */

//  ! MAP METHOD

 const myNumbers = [1,2,3,4,5,6,7,8,9,10];

 const newNumbers = myNumbers.map( (num) => {
        return num * num;
    });

const updatedNums = myNumbers.map((num)=> num * 2);

console.log(newNumbers); // [1,4,9,16,25,36,49,64,81,100]
console.log(updatedNums); // [2,4,6,8,10,12,14,16,18,20]


//  ! Multiple Methods Chaining

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num) => num % 2 === 0).map((num) => num * 2);

console.log(newNums); // [4,8,12,16,20]

//  ! REDUCE METHOD

//  Reduce Method is used to reduce the array to a single value.
// It executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

const myNums1 = [1,2,3,4,5,6,7,8,9,10];

const sum = myNums1.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`)
    return accumulator + currentValue;
}

);

console.log(sum); // 55

const shoppoingCart = [
    {
        product: 'Laptop',
        price: 1000
    },
    {
        product: 'Mobile',
        price: 500
    },
    {
        product: 'Headphones',
        price: 100
    },
    {
        product: 'Mouse',
        price: 50
    }
]

let total = shoppoingCart.reduce((acc, currValue) => {
    return acc + currValue.price;
},0);
// In Reduce method, the second argument is the initial value of the accumulator.
console.log(total); // 1650



