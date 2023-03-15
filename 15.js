class Human {
  constructor(gender) {
    this.gender = gender;
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(name, age, gender) {
    super(gender);
    this.name = name;
    this.age = age;
    // this.gender = "female";
  }
  printName() {
    console.log(this.name);
  }
}
const person1 = new Person("Max", 30, "male");
person1.printName();
person1.printGender();
