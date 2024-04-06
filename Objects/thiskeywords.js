/*
    ! this keywords tells us about the current context of the object  we are currently in.

    In this case, it is telling us that the function we are currently inside of has a reference to an object called "person".
*/

//  Arrow function ke andar this keyword nahi hota hai

// ! Context matlab kiske bare me baat ho rahi hai

const user = {
  userName: "Shubham",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to our store!`); // Shubham, Welcome to our store!
    console.log(this); //
  },
};

user.welcomeMessage();

user.userName = "Hrishi";

user.welcomeMessage();

console.log(this); // As we are in node enviourment , this keyword will refer to the global object of Node.js which is empty object.
/*

Browser ke andar global object jo hai woh window object hai

*/

console.log("Hello YOO VROOOO");

function sayHi() {
  console.log(this); // Empty Object
}

sayHi();
//  function as variable
const name = function () {
  let userName = "Hrishi";
  console.log(this.userName); // undefined
};

console.log(name); // function of  name

//  *****************************************************************************************************************************

// ! ARROW FUNCTION

const sayName = () => {
  let userName = "Shubham";
  console.log(this); // Empty Object
};

sayName();

/*
 * As we are using arrow function, the this keyword will refer to the current context of the object in which the arrow function is defined.
 */
// ! Method 1

const addTwoNum = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwoNum(10, 20)); // 30

// ! Method 2 -> Implicit return types

const addTwoNumImp = (num1, num2) => num1 + num2;

console.log(addTwoNumImp(20, 30)); // 50

//  In Implicit Return Types , we can also use the arrow function to define a function and return that defined function from the arrow function itself.


//  If you use {} then you have to return types and () if you use () then you don't need to return any type of data


