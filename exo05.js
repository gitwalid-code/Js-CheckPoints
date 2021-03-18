function countTrue(arr) {
  let a = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == true) a++;
  }
  return a;
}
