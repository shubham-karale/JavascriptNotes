//   Object destructuring

const course = {
  name: "React JS",
  duration: "2 months",
  price: 2000,
  mentor: "Hrishi",
  lectures: 30,
  isCompleted: true,
};

//  fetch the values from the object

// ! OBJECT DESTRUCTURING

const { name } = course;

console.log(name);

const { duration, price, mentor, lectures, isCompleted } = course;

console.log(duration, price, mentor, lectures, isCompleted);

// React Destructuring
 
