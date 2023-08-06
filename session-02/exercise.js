/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/

// What I'm doing here is that I use the .map function to iterate over listOfStrings, turning each word into uppercase and make a new list containing them
function transformArrayToUpper(listOfStrings) {
  const result = listOfStrings.map((word) => word.toUpperCase());
  return result;
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
  let sum = 0;
  for (let i = 0; i < listOfStudentObjects.length; i++) {
    //What I decided to check for here is that when I come across a null value or a "undefined" value of age, I continue to the next iteration.
    // if age does indeed exist, I accumulate the sum and return it at the end of all the iterations
    if (listOfStudentObjects[i].age == undefined) {
      continue;
    }
    sum += listOfStudentObjects[i].age;
  }

  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
