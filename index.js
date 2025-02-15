let message = "Hello, World!";
console.log(message; // SyntaxError: Unexpected token ';'


console.log(myVariable); // ReferenceError: myVariable is not defined


// Incorrect: treating a string like a function
const greeting = "Hello";
greeting(); // TypeError: greeting is not a function


// Incorrect: accessing a property of an undefined variable
// There is no object and there is also no property in the object, look up objects in javascript on w3schools.
let obj;
console.log(obj.property); // TypeError: Cannot read property 'property' of undefined

const user = {
    name: "John",
    age: 30,
  };
  
  // Incorrect: Concatenating an object with a string
  // This there is a single difference, we can't use a + to add the string to this object, we need to use a comma.
  console.log("User info: " + user); 
  // Output: User info: [object Object]
  // should put out the object with names and age
  


// casting failure (incorrect type conversion)

let num = "10";
console.log(num + 5); // "105"  should be 15.

