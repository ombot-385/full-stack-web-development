/*encapsulation,inheritance,polymorphism,abstraction*/
let car = {
  make: "toyota",
  model: "camry",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

console.log(car.start());

function person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new person("john doe", 20);
console.log(john.name);

function animal(type) {
  this.type = type;
}

animal.prototype.speak = function () {
  return `${this.type}makes a sound`;
};

Array.prototype.omkar = function () {
  return `custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.omkar());

let myNewArray = [4, 5, 6];
console.log(myNewArray.omkar());

console.log("=================class========================");
class vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class cars extends vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new cars("toyota", "corolla");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new vehicle("toyota", "corolla");
console.log(vehOne.make);

//ENCAPSULATION
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

//ABSTRACTION
class CoffeMachine {
  start() {
    //call DB
    //filter value
    return `starting the machine.....`;
  }

  brewCoffee() {
    //complex calculations
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

console.log("==========polymorphism=================");

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins cant fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

console.log("==========STATIC METHOD=================");
//ONLY CLASS CAN CALL STATIC METHOD
class calculator {
  static add(a, b) {
    return a + b;
  }
}

// let minicalc = new calculator();
// console.log(minicalc.add(2, 3)); //TypeError: minicalc.add is not a function
console.log(calculator.add(2, 3));

console.log("==========GETTER AND SETTER=================");

class employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("invalid salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new employee("alice", 50000); //check by checking for negative value
console.log(emp._salary);
emp.salary = 60000;
