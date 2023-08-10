/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  //for...of Method
  const upperCaseArray = []; //empty array
  for (elements of listOfStrings){ // for ... of loop
    upperCaseArray.push(elements.toUpperCase()); 
    // for elements of listofstrings, we convert them to uppercase and push them into the empty array, upperCaseArray
  }
  return upperCaseArray;
}

/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result will be the sum of all ages.
  - NOTE: Not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/
function sumOfAllAges(listOfStudentObjects) {
    let totalSum = 0; //initalize totalSum variable
    for(let i = 0; i < listOfStudentObjects.length; i++){
      if(listOfStudentObjects[i].age){ //if the array's index's object has the property 'age', then the condition is true.
        totalSum += listOfStudentObjects[i].age; //collect the sum of each index's object's age property value.
      }
      // "listOfStudentObjects[i].age" is false if we have an object with no age property,
      // when that happens, we essentially skip that object, loop back, and check the next index in the iteration process.
    }
    return totalSum; // return the total sum
}

module.exports = { transformArrayToUpper, sumOfAllAges };