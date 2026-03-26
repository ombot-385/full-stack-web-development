/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

//let teaFlavours = new Array("green tea", "black tea", "black tea", "oolong tea");
let teaFlavours = ["green tea", "black tea", "black tea", "oolong tea"];

const firstTea = teaFlavours[0];

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbel tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
//citiesVisited[1]="Berlin"
//citiesVisited[citiesVisited.length]="Berlin"
console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let var1 = 5;
let var2 = var1;
var1 = 9;
console.log(var2); //but this behaviour cganges when we try to do the same with array. we can see in the following lines.

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
//let hardCopyCities = topCities.slice(); same function as above
topCities.pop();
console.log(hardCopyCities);
//console.log([...hardCopyCities]); Rest and spread operator

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
//let worldCities = europeanCities+asianCities; this will also add but this is string not array what we wanted
//let worldcities=[europeanCities,asiancities] it will give two dimensional array

console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);

//SHIFT
const array1 = [1, 2, 3];
const firstelement = array1.shift();

console.log(array1); //[2,3]
console.log(firstelement); //1;

//UNSHIFT
const array2 = [1, 2, 3];

console.log(array2.unshift(4, 5)); //5
console.log(array2); //Array [4,5,1,2,3];

//could learn more about any topic by clicking ctrl+includes here or any to learn more and if we want to learn in total deph we can go to mdn and type like array it will give structured way of leaning topics
