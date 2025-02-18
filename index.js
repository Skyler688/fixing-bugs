let message = "Hello, World!";
console.log(message); // SyntaxError: Unexpected token ';'
// BUG FIXED -> console.log was missing ) at the end.

// console.log(myVariable); // ReferenceError: myVariable is not defined
// BUG FIXED -> (myVariable) not declared or used in this program so just commented it out.

// Incorrect: treating a string like a function
const greeting = "Hello";
console.log(greeting); // TypeError: greeting is not a function
// BUG FIXED -> trying to call greeting as though it is a function, changed to console.log to print string into the console.

// Incorrect: accessing a property of an undefined variable
// There is no object and there is also no property in the object, look up objects in javascript on w3schools.
const obj = {
  property: "This is an object property.",
};
console.log(obj.property); // TypeError: Cannot read property 'property' of undefined
// BUG FIXED -> let obj; was undefined and had no property. Also when using objects it is best to use const to protect the object from being changed.

const user = {
  name: "John",
  age: 30,
};

// Incorrect: Concatenating an object with a string
// This there is a single difference, we can't use a + to add the string to this object, we need to use a comma.
console.log("User info: ", user);
// Output: User info: [object Object]
// should put out the object with names and age
// BUG FIXED -> Changed + to , to be able to console.log the propertys inside of the user object.

// casting failure (incorrect type conversion)

let num = "10";
console.log(num + 5); // "105"  should be 15.
