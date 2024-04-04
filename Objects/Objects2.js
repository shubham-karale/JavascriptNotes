//const user  = new Object() // Singleton Object

const user = {}; // non singleton object

user.name = "hrishi";
user.age = 22;
user.city = "Pune";
user.FullName = "Hrishi Karale";
user.isLoggedin = true;
user.location = "India";

// console.log(user);

let regularUser = {
  name: "Shubham",
  age: 22,
  city: "Pune",
  fullName: {
    userName: {
      firstName: "Shubham",
      lastName: "Karale",
    },
  },
};

// console.log(regularUser.fullName.userName.firstName);

// // Optional Chaining
// console.log(regularUser?.fullName?.userName?.firstName);

// Optional chaining checks if the property exists or not and if it does not exist then it will not throw an error.






