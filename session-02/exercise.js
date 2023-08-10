/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/

function transformArrayToUpper(listOfStrings) {
  let upperCaseArray = new Array()

  for (let x = 0; x < listOfStrings.length; x++){
    upperCaseArray[x] = listOfStrings[x].toUpperCase()
  }
  return upperCaseArray
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
  let cumulativeAges = 0
  let currentAge

  for (let x = 0; x < listOfStudentObjects.length; x++) {
    if (listOfStudentObjects[x].hasOwnProperty("age")) {
      currentAge = listOfStudentObjects[x].age
      cumulativeAges = cumulativeAges + currentAge
    }
  }
  return cumulativeAges
}

module.exports = { transformArrayToUpper, sumOfAllAges };