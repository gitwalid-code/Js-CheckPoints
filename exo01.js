/*function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];

    if (arr[i] > max) max = arr[i];
  }
  return [min, max];
}
let b = minMax(arr);
console.log(b);*/

function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}
