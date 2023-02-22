// Several objects share the same interface (methods). Said methods don't necessarily 
// have the same functioanility depending on the object. Often used with Inheritance.
class Vehicle {
    move() {
      console.log("I'm moving");
    }
  }
  
  class Plane extends Vehicle {
    move() {
      console.log("I'm flying");
    }
  }
  
  class Boat extends Vehicle {
    move() {
      console.log("I'm on the water");
    }
  }
  
  class Car extends Vehicle {}
  
  const vehicle = new Vehicle();
  const plane = new Plane();
  const boat = new Boat();
  const car = new Car();
  
  vehicle.move() // Prints I'm moving
  plane.move()   // Prints I'm flying
  boat.move()    // Prints I'm on the water
  car.move()     // Prints I'm moving