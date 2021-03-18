function inkLevels(inks) {
  const arr = Object.values(inks);
  arr.sort((a, b) => a - b);
  return arr[0];
}
