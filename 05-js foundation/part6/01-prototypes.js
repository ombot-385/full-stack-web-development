let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
};
let tomHardware = {};

console.log("computer ");
console.log("computer", computer.__proto__);
console.log("lenovo", computer.__proto__);

let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
console.log("tesla", tesla);
console.log("tesla", tesla.tyres);
console.log("tesla", Object.getPrototypeOf(tesla));

console.log("tesla", genericCar);
