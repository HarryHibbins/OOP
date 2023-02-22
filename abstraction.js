// Abstraction is when you remove complexity by hiding more complicated processes behind
// more simple and descriptive properties

// Abstraction is also a term used to 'abstract' code out of one given place into a more suitable place

class CoffeeMaker {
    userSelection(coffeeBean) {
      this.#makeCoffee(coffeeBean);
      this.#fillCup();
    }
  
    #makeCoffee(coffeeBean) {
      this.#addWater();
      this.#heatWater();
      this.#addCoffee(coffeeBean);
      this.#addMilk();
    }
  
    #addWater() {}
  
    #heatWater() {}
  
    #addCoffee(coffeeBean) {
      // different types
    }
  
    #addMilk() {}
  
    #fillCup() {}
  }
  
  
  const coffeeMaker = new CoffeeMaker();
  coffeeMaker.userSelection("Brazil");