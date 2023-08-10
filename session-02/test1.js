console.log("words".toUpperCase());
const fruits = ["apple", "pear", "cherry", "plum"];
console.log(fruits[0].toUpperCase());
console.log(fruits);
fruits[0] = fruits[0].toUpperCase();
console.log(fruits);

const listOfStrings = ["apple", "pear", "cherry", "plum"];


console.log(listOfStrings);
transformArrayToUpper(listOfStrings);
console.log(listOfStrings);


function transformArrayToUpper(listOfStrings) {
    for(let i = 0; i < listOfStrings.length; i++){
      listOfStrings[i] = listOfStrings[i].toUpperCase();
    }
    return;
  }