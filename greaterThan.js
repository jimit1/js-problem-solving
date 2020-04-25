module.exports = function greaterThan(arr, index) {
  var newArray = [];
  for (var i = index + 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

// function greaterThan(arr, index) {
//   var i = 0;
//   for (var i = 0; i < index; i++) {
//     arr.splice(arr[i], 1);
//   }
//   console.log(arr);
// }

// function greaterThan(arr, index) {
//   return arr.splice(index + 1, arr.length);
// }
