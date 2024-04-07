// Function Creation Method One

One(); // * Works Fine -> Function Hoisting concept
function One() {
  console.log("One");
}
// Function Creation Method Two
let Two = function () {
  console.log("two");
};

// Function Creation Method Three
Three(); // ! ERROR
const Three = () => {
  console.log("THree");
};

One();
Two();
Three();
