/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  // Loop through each string
  for (var i = 0; i < listOfStrings.length; i++) {
    //convert to uppercase
    listOfStrings[i] = listOfStrings[i].toUpperCase();
  }

  // Return the modified array
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
  var sum = 0;

  // Loop through each student
  for (var i = 0; i < listOfStudentObjects.length; i++) {
    // Check for 'age'
    if (listOfStudentObjects[i].hasOwnProperty('age')) {
      // Add the age to the sum
      sum += listOfStudentObjects[i].age;
    }
  }

  // Returnsum
  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
