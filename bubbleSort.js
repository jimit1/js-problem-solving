module.exports = function bubbleSort(arr) {
  sort(arr);
  for (var i = 0; i < arr.length; i++) {
    while (arr[i] > arr[i + 1]) {
      sort(arr);
    }
  }
  return arr;
};

function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}
