getBudgets = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

let a = getBudgets[0].budget;
console.log(a);

let abdou = { name: "John", age: 21, budget: 23000 };
console.log(abdou.budget);

function Sum(getBudgets) {
  let sum = 0;
  for (let i = 0; i < getBudgets.length; i++) {
    sum += getBudgets[i].budget;
  }
  return sum;
}
let c = Sum(getBudgets);
console.log(c);
