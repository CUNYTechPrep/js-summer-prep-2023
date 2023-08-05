/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/

// Function to transform the input array of strings into uppercase strings
function transformArrayToUpper(listOfStrings) {
  // Create an empty array to store the uppercase strings
  let resultArray = [];

  // Loop through each string in the input array
  for (let i = 0; i < listOfStrings.length; i++) {
    // Convert the current string to uppercase using the toUpperCase() method
    let uppercaseString = listOfStrings[i].toUpperCase();

    // Add the uppercase string to the result array
    resultArray.push(uppercaseString);
  }

  // Return the array with all strings converted to uppercase
  return resultArray;
}

// Test the function with example input
const inputArray = ["cat", "hat"];
const result = transformArrayToUpper(inputArray);
console.log(result); // Output: ["CAT", "HAT"]

/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result
  will be the sum of all ages.
  - Note, not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/

// Function to calculate the sum of all student ages
function sumOfAllAges(listOfStudentObjects) {
  // Initialize a variable to store the sum of ages
  let sum = 0;

  // Loop through each student object in the input array
  for (let i = 0; i < listOfStudentObjects.length; i++) {
    // Check if the current object has an "age" property and it is a number
    if (typeof listOfStudentObjects[i].age === "number") {
      // If the "age" property exists and is a number, add it to the sum
      sum += listOfStudentObjects[i].age;
    }
  }

  // Return the total sum of ages
  return sum;
}

// Test the function with example input
const students = [
  { name: 'Sandra', age: 31 },
  {},
  { name: 'Didi', age: 20 }
];

const totalAge = sumOfAllAges(students);
console.log(totalAge); // Output: 51


module.exports = { transformArrayToUpper, sumOfAllAges };
