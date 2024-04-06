// IIFE = Immediately Invoked Function Expression

(function myName(){
    console.log("DB CONNECTED");
}() )

// ! Syntax of IIFE
//         ( function name (){

//         code here...

//     })();

// ()   = First Parenthesis Function Declaration
// ()     = Second Parenthesis Function Call


/*
  ! INTERVIEW QUESTIONS
  What is IIFE ?
  Ans = - The functions which executed immediately
  - They are called Immediately Invoked Function Expression
  - we may get problem due to polluted scope of global variables
  - To Remove Pollution of global variables for that we use IIFE.

*/

// if we use tow  or more IIFE in a single file then  every iife should closed with the ;



