// // imports from export file
// var sayHello = require("./sayHello");
// var message = sayHello("Mathew");
// console.log(message);
// ​
// // ## Sum Array chellenge
// var sumArray = require("./sumArray");
// ​
// // create the function with an arr placeholder
// // call the function with an array in the arr placeholder
// var someting = sumArray([1, 2, 3]);
// console.log(someting);

// var sayHello = require("./sayHello");

// function sumArray(arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

var sayHello = require("./sayHello");
var sumArray = require("./sumArray");
var largestNum = require("./largestNum");
var greaterThan = require("./greaterThan");
var swap = require("./swap");
var bubbleSort = require("./bubbleSort");

// console.log(sayHello("world"));
// console.log(sumArray([1, 2, 3]));
// console.log(largestNum([12, 34, 65, 1, 34]));
// console.log(greaterThan([1, 2, 3, 4, 5, 6], 3));
// console.log(swap(["William", "Thomas", "Smith"], 0, 1));
console.log(bubbleSort([8, 3, 0, 5, 1, 9, 77, 32, 6]));
