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
let fire;
console.log(fire);

const student243 = {
    firstName: "Edwin",
    lastName: "Cruz",
    age: 29,
    gpa: 4.0,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    bday() {
      console.log("Happy Birthday!");
      this.age++;
    },
  };
student243.major;
  console.log(student243.major);