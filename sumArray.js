// var sayHello = require("./sayHello");

// function sumArray(arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// sumArray([1, 2, 3]);

// module.exports = function sumArray(arr) {
//   var theSum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     theSum += arr[i];
//   }
//   return theSum;
// };

var sayHello = require("./sayHello");

module.exports = function sumArray(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
