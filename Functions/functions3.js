//  Global Scope and Local Scope

//  ! LEGENDARY SANIN BATTLE OF LET,CONST AND VAR

/*
 {} -> Curly Braces = Scope

 Outside curly braces = Global scope


*/

// let a = 25;
// const b = 35;
// var c = 50;

var c = 300

if (true) {
  let a = 25;
  const b = 35;
  var c = 50;
}

console.log(c); // ! Output should be 300 But in actual it gives output as 50

console.log(a); // ! ERROR -> Block Scope of Let
console.log(b); // ! ERROR -> Block Scope of const

console.log(c); // * NO ERROR -> B/C Functional scope of var

/*
 * Scope in the node environment is different and scope in the browser is different.

*/
