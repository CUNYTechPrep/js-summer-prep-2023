/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {

  // use map to return .toUpperCase() of the strings
  return listOfStrings.map(str => str.toUpperCase());
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

    // initialize sum to 0 and add values later
    let sum = 0;

    // use a loop to iterate object
    for (const student of listOfStudentObjects) {

      // check for age
      if (student.age !== undefined) {

        // if age exist, add the age to the sum
        sum += student.age;
      }
    }
  
    // return the final sum
    return sum;

 /*
  ///////////////// Alternate solution using special functions ///////////////////

  const validAges = listOfStudentObjects

  // use filter() function to exclude objects without age data
  .filter(student => student.age !== undefined)

  // use map to get age from the objects in a new array
  .map(student => student.age);
  
  // initialize sum to 0, use reduce() function to get calculate
  return validAges.reduce((sum, age) => sum + age, 0);

  ///////////////////////////////////////////////////////////////////////////////
  */
}

module.exports = { transformArrayToUpper, sumOfAllAges };
