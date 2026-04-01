function person(name, age) {
  //let myname=name  -- we can do this way too but we have better ways
  this.name = name;
  this.age = age;
}

function car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new car("toyota", "camry"); //using new word is important else it will give undefined
console.log(myCar);

let myNewCar = new car("tata", "safari");
console.log(myNewCar);

function tea(type) {
  this.type = type;
  this.describe = function () {
    return "this is a cup op ${this.type}";
  };
}

let lemonTea = new tea("lemon tea");
console.log(lemonTea);
console.log(lemonTea.describe());

function animal(species) {
  this.species = species;
}

animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new animal("dog");
console.log(dog.sound());

let cat = new animal("cat");
console.log(cat.sound());

function drink(name) {
  if (!new.target) {
    throw new Error("drink must be called with new keyword");
  }
  this.name = name;
}

let teaa = new drink("tea");
let coffee = drink("coffee");
