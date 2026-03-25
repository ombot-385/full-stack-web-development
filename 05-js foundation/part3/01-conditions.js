//checking if a number is greater than another number

let num1 = 5;
let num2 = 8;
console.log("i am regular upper code");

if (num1 > num2) {
  console.log("number 1 is greater than num2");
} else {
  console.log("nope num1 is not greater");
}

console.log("i am regular bottom code");

//checking if a string is equal to another string

let username = "om";
let anotherUsername = "kumar";

if (username == anotherUsername) {
  console.log("pick another username");
} else {
  console.log("you can pick this username");
}

//checking if a variable is number is not

let score = 44;
if (typeof score === "number") {
  console.log("yup,thats a numver");
} else {
  console.log("no thats is not a number");
}

//checking if a boolean value is rue or not

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is NOT ready");
}

// Checking if an array is empty or not:

let items = ["item1"];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}
