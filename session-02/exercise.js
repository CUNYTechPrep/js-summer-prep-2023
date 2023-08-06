/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
    for(let i = 0; i < listOfStrings.length; i++){ //for each element in the array
        listOfStrings[i] = listOfStrings[i].toUpperCase(); //change the element to uppercase
    }
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
    let result = 0;
    for(let i = 0; i < listOfStudentObjects.length; i++){ //for each element in the array
        if(listOfStudentObjects[i].age){ //if the element has an age
            result += listOfStudentObjects[i].age; //add the age to the result
        }
    }
    return result;
}
module.exports = { transformArrayToUpper, sumOfAllAges };