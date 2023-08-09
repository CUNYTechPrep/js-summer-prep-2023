/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  let uppercaseArray = []; // Creating an array to store the uppercase strings

  // Loop through each string in the input array
  for (let i = 0; i < listOfStrings.length; i++) {
    let originalString = listOfStrings[i]; // Getting the current string from the array

    // Converting the string to uppercase using the .toUpperCase() method
    let uppercaseString = originalString.toUpperCase();

    // Adding the uppercase string to the new array
    uppercaseArray.push(uppercaseString);
  }

  // Returning the array of uppercase strings
  return uppercaseArray;
}

/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result
  will be the sum of all ages.
  - Note, not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/
function sumOfAllAges(listOfStudentObjects) {
  let sum = 0; // Initializing the sum of ages

  // Looping through each student object in the array
  for (let i = 0; i < listOfStudentObjects.length; i++) {
    // Checking if the current student object has an 'age' property
    if (listOfStudentObjects[i].age !== undefined) {
      sum += listOfStudentObjects[i].age; // Add the age to the sum
    }
  }

  // Returning the calculated sum of ages
  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
