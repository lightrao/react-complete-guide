// spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

const person = { name: "ZhangSan", age: 22, weight: 70 };
const newPerson = { ...person, age: 33 };
console.log(newPerson);

// rest operator
const filter = (...args) => args.filter((e) => e >= 3);
console.log(filter(1, 2, 3, 4, 5, 6));
