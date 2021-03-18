function filterArray(arr) {
  let number = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") number.push(arr[i]);
  }
  return number;
}
