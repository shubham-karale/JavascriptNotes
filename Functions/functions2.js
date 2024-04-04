// REST and Spread Operator using Functions

function sayNumber(...number1) {
  return number1;
}

console.log(sayNumber(23, 25, 98, 85, 45, 74));

// so above the function is taking multiple arguments and returning them as an array
// rest operator is used to take multiple arguments and spread operator is used to pass multiple arguments
// TODO

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(23, 25, 98, 85, 45, 74));

// In these examples, the first two arguments are assigned to val1 and val2, and the rest of the arguments are assigned to num1. In the form of arrays, the rest operator collects the arguments.

function handleObject(anyObject) {
   console.log(` Username is {anyObject.name } and price is {anyObject.price}`);

}

handleObject(user)

