// primitive types
let num1 = 1;
let num2 = num1;
num2 = 2;
console.log(num1, num2);

// reference type
const person = { name: "Max" };
const secondPerson = person;
const thirdPerson = { ...person }; // shallow copy
person.name = "Manu";
console.log(secondPerson);
console.log(thirdPerson);
