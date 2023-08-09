/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  const newArray = listOfStrings.map((item) => item.toUpperCase());
  return newArray;
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
  let i = 0;
  let sum = 0;
  while (i < listOfStudentObjects.length) {
    if (
      !(JSON.stringify(listOfStudentObjects[i]) === "{}") &&
      listOfStudentObjects[i].hasOwnProperty("age")
    ) {
      sum += listOfStudentObjects[i].age;
    }
    i++;
  }
  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
