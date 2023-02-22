// Inheritance refers to the relationship between parent and child classes
// A child class can inherit features, like methods and properties from a parent class,
// which it can then use, modify or add new features to.
// This is good because:
// - it improves code reuse and maintainability, and readability.
class Item {
    constructor(name, price) {
      this.name = name
      this.price = price
    }
    printPrice() {
      console.log('I cost ${this.price}')
    }
  }

  class Banana extends Item {
    constructor(name, price) {
      super(name, price)
    }
    eat() {
      console.log('yum')
    }
  }
  
  class Bleach extends Item {
    constructor(name, price) {
      super(name, price)
    }
    clean() {
      console.log('I am a cleaning stuff')
    }
  }
  const banana = new Banana('banana', 3)
  banana.printPrice()  // I cost 3
  banana.eat()  // yum