//Class and Object
//classes are blueprints for creating objects. Objects are instances of classes that encapsulate data and behavior.
console.log("Classes and Objects :")
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  let person1 = new Person("John", 30);
  person1.greet(); // Output: Hello, my name is John and I am 30 years old.
  
//Encapsulation
//Encapsulation is the bundling of data and methods that operate on the data into a single unit (class), and controlling access to that unit.
console.log("Encapsulation :")

class Car {
    constructor(brand, model) {
      this._brand = brand; // Encapsulated property
      this._model = model; // Encapsulated property
    }
  
    get brand() {
      return this._brand;
    }
  
    set brand(newBrand) {
      this._brand = newBrand;
    }
  
    drive() {
      console.log(`Driving ${this._brand} ${this._model}`);
    }
  }
  
  let myCar = new Car("Toyota", "Corolla");
  myCar.drive(); // Output: Driving Toyota Corolla
  console.log(myCar.brand); // Output: Toyota
  myCar.brand = "Honda";
  console.log(myCar.brand); // Output: Honda

//Inheritance
//Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass).
console.log("Inheritance :")

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let dog = new Dog("Buddy");
  dog.speak(); // Output: Buddy barks.

//Polymorphism
//Polymorphism allows objects of different classes to be treated as objects of a common superclass.
console.log("Polymorphism :")

class Shape {
    area() {
      console.log("Calculating area...");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      console.log(`Area of rectangle: ${this.width * this.height}`);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      console.log(`Area of circle: ${Math.PI * this.radius * this.radius}`);
    }
  }
  
  let shapes = [new Rectangle(4, 5), new Circle(3)];
  shapes.forEach(shape => shape.area());
// Output:
// Area of rectangle: 20
// Area of circle: 28.274333882308138
  
  