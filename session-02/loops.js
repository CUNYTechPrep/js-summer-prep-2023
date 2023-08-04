// looping through arrays

const fruits = ["apple", "banana", "coconut", "durian"];

// While loop
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

for (const fruit of fruits) {
  console.log(fruit);
}

// 🚫 avoid for-in loops
// for (const item in fruits) {
//   console.log(item);
// }

// .forEach
function myPrint(item) {
  console.log("Delicious: ", item);
}
fruits.forEach(myPrint);

let result = fruits.forEach((val) => {
  console.log("Yucky:", val);
});

console.log(result);

// callbacks

// .map // transform/convert/change

let pluralFruits = fruits.map((f) => f + "s");

console.log(pluralFruits);
console.log(fruits);

// .filter
