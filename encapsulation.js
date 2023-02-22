//encapsulation is the process of containing methods and variables within a class
// this stops other classes changing properties that dont belong to them

class Animal {
    constructor() {
      this.animal = "Dog";
    }
  }
  
  const someAnimal = new Animal();
  
  console.log(someAnimal.animal);
  
  someAnimal.animal = "Cat";
  
  console.log(someAnimal.animal);
  
  class Human {
    #name;
  
    constructor() {
      this.#name = "Brian";
    }
    getName() {
      return this.#name;
    }
  }
  
  const someHuman = new Human();
  // console.log(someHuman.name); // ERROR
  // test.name = "jenny"; // ERROR
  console.log(someHuman.getName());