/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
    // Iterate through each string in the array
    for (let i = 0; i < listOfStrings.length; i++) {
        // Convert the current string to uppercase and update the array element
        listOfStrings[i] = listOfStrings[i].toUpperCase();
    }
    // Return the modified array of uppercase strings
    return listOfStrings;
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
  // Initialize the sum to keep track of the total age
  let sum = 0;
  // Iterate through each object in the array
  for (let i = 0; i < listOfStudentObjects.length; i++) {
    // Check if the current object has a numeric age property
    if (typeof listOfStudentObjects[i].age === 'number') {
      // Add the age of the current object to the sum
      sum += listOfStudentObjects[i].age;
    }
  }
  // Return the calculated sum of ages
  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
