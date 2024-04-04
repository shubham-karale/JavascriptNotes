// # SCOPE LEVEL AND HOISTING

// ! Story

//  * Chote bacche badon se ice-cream cheen sakte hai par bade log chote bachhon se icecream chin nahi sakte hai

/*
    As per analogy two() function  can access the variables of One() but One() can not access the variables of the Two()
*/

// ! Nested Scope

function one() {
  const userName = "Jiraya";

  function two() {
    const mentor = "SANIN";
    console.log(userName);
  }

  two();

  // console.log(mentor);
}

// console.log(one());
one();

/*
  What is Closures ?
  Ans = Andar ke functions bahar ke function ko ya uske variables ko access kar sakte hai but bahar ke function andar ke variables ko access nahi kar sakte hai

*/
