/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  let newListOfStrings = [];

  for(let i = 0; i < listOfStrings.length; i++) {
    newListOfStrings[i] = listOfStrings[i].toUpperCase();
  }

  listOfStrings = newListOfStrings;

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

  let sum = 0;

  for(const student of listOfStudentObjects) {
    //console.log(student);

    const studentEntries = Object.entries(student);

    //console.log(studentEntries);

    const studentMap = new Map(studentEntries);

    /*
    console.log("|Start|");
    console.log(studentMap);
    console.log("Age: " + studentMap.get("age"));
    console.log("|End|");
    */

    //console.log(studentMap);

    if(listOfStudentObjects.length === 0) {
      return 0;
    }

    if(studentMap.get("age") === undefined && listOfStudentObjects.length > 0) {
      sum += 0;
    } else {
      sum += studentMap.get("age");
    }

  }

  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
