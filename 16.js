class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";
  gender = "female";

  printName = () => {
    console.log(this.name);
  };
}
const person1 = new Person();
person1.printName();
person1.printGender();
