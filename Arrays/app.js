// Array Square Brackets
// Array of Strings & Numbers
let myName = "Kallol";
console.log(myName); // "Kallol"

let myNamesArray = ["Kallol", "Kumar", "Rahul", "Akash", "Pankaj"];
console.log(myNamesArray); // ["Kallol","Kumar","Rahul","Akash","Pankaj"]

let myNumbersArray = [1, 2, 3, 4, 5];
console.log(myNumbersArray); // [1,2,3,4,5]

// Array of Objects
let myObj = {
  name: "Kallol",
  age: 20,
};
console.log(myObj); // { name: "Kallol", age: 20 }

let students = [
  {
    name: "Kallol",
    age: 20,
  },
  {
    name: "Kumar",
    age: 22,
  },
  {
    name: "Rahul",
    age: 18,
  },
];
console.log(students); // [{name:"Kallol",age:20},{name:"Kumar",age:22},{name:"Rahul",age:18}]

// Array Constructor
let arrayConstructor1 = new Array();
arrayConstructor1[0] = "Kallol";
arrayConstructor1[1] = "Kumar";
arrayConstructor1[2] = "Rahul";
console.log(arrayConstructor1); // ["Kallol","Kumar","Rahul"]

let arrayConstructor2 = new Array("Kallol", "Rahul");
console.log(arrayConstructor2); // ["Kallol","Rahul"]

// Array fill
let arrayFill = new Array(5).fill("Kallol");
console.log(arrayFill); // ["Kallol","Kallol","Kallol","Kallol","Kallol"]

// Array of
let ofArray = Array.of("Kallol", "Rohan", "Rahul");
console.log(ofArray); // ["Kallol","Rohan","Rahul"]

// Array from
let fromArray = Array.from("Hello");
console.log(fromArray); // ["H","e","l","l","o"]

// Sparse Array: Array with empty values
let sparseArray = [4, , 6, , , 5];
console.log(sparseArray); // [ 4, <1 empty item>, 6, <2 empty items>, 5 ]
sparseArray[3] = 18;
console.log(sparseArray); // [ 4, <1 empty item>, 6, 18, <1 empty item>, 5 ]

// Using Spread operator (...)
let spreadArray = ["plus", ...ofArray];
console.log(spreadArray); // ["plus","Kallol","Rohan","Rahul"]

// Dynamic Array
let dynamicArray = [12, "Kallol", { name: "Rahul" }];
console.log(dynamicArray); // [12,"Kallol",{ name:"Rahul" }]

// Destructuring Assignments
let fruits = ["apple", "banana", "cherry"];
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3); // apple banana cherry

let [fruit11, fruit22, fruit33] = fruits;
console.log(fruit11, fruit22, fruit33); // apple banana cherry

// Iterating over an Arrays - Iterating meaning going over elements of an array one by one

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // "apple" (then "banana", "cherry") 
}
// for of loop
for (let fruit of fruits) {
  console.log("For of", fruit); // For of "apple" (then "banana", "cherry")
}
// for in loop
for (let index in fruits) {
  console.log(index, fruits[index]); // 0 "apple" (then 1 "banana", 2 "cherry") 
}
// forEach loop
fruits.forEach((fruit) => {
  console.log("forEach", fruit); // forEach "apple" (then "banana", "cherry") 
});

// Common Array methods

// push - adds an element to the end
fruits.push("mango");
console.log(fruits); // ["apple","banana","cherry","mango"] because "mango" is in the array

// pop - removes an element from the end
fruits.pop();
console.log(fruits); // ["apple","banana","cherry"] because "cherry" is in the array

// shift - removes an element from the beginning
fruits.shift();
console.log(fruits); // ["banana","cherry"] because "banana" is in the array

// unshift - adds an element to the beginning
fruits.unshift("mango");
console.log(fruits); // ["mango","banana","cherry"] because "mango" is in the array

// splice - removes an element from the middle
fruits.splice(1, 2);
console.log(fruits); // ["mango"] because "mango" is in the array

// slice - returns a new array
let newFruits = fruits.slice(1, 3);
console.log(newFruits); // [] because "mango" is not in the array

// includes - returns true or false
console.log(fruits.includes("apple")); // false because "apple" is not in the array

// indexOf - returns the index of the element
console.log(fruits.indexOf("apple")); // -1 because "apple" is not in the array

// lastIndexOf - returns the last index of the element
console.log(fruits.lastIndexOf("apple")); // -1 because "apple" is not in the array

// find - returns the element
console.log(fruits.find((fruit) => fruit === "apple")); // undefined because "apple" is not in the array

// findIndex - returns the index
console.log(fruits.findIndex((fruit) => fruit === "apple")); // -1 because "apple" is not in the array

// filter - returns an array of filtered elements
console.log(fruits.filter((fruit) => fruit === "apple")); // [] because "apple" is not in the array

// map - returns an array of mapped elements
console.log(fruits.map((fruit) => fruit + " is a fruit")); // ["mango is a fruit"] because "mango" is in the array

// reduce - returns a single value
console.log(fruits.reduce((acc, fruit) => acc + fruit, "")); // "mango" because "mango" is in the array

// sort - returns a sorted array
console.log(fruits.sort()); // ["mango"] because "mango" is in the array

// reverse - returns a reversed array
console.log(fruits.reverse()); // ["mango"] because "mango" is in the array

// join - returns a string of joined elements
console.log(fruits.join(" - ")); // "mango" because "mango" is in the array

// concat - returns a new array of concatenated elements
console.log(fruits.concat("orange")); // ["mango","orange"] because "mango" is in the array

// slice - returns a new array of sliced elements
console.log(fruits.slice(1, 3)); // [] because "mango" is not in the array

// Array in array
let arrayInArray = [
  [1, 2],
  [3, 4],
];
console.log(arrayInArray); // [[1,2],[3,4]] 