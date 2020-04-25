// module.exports = function largestNum(arr) {
//   arr.sort(function (a, b) {
//     return b - a;
//   });
//   return arr[0];
// };

module.exports = function largestNum(arr) {
  var largestNumber = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
};
