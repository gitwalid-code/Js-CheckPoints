function getAbsSum(arr) {
  let negative = 0;
  for (let i = 0; i < arr.length; i++) {
    negative = negative + Math.abs(arr[i]);
  }
  return negative;
}
