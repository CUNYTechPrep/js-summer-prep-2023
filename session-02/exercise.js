/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
    let uppercaseStrings = listOfStrings.map((string) => string.toUpperCase());
  return uppercaseStrings;
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
  let ages = listOfStudentObjects
    .filter(student => 'age' in student)
    .map(student => student.age);

  let total = 0;  
  for (const age of ages) {
      total += age;
  }

  return total;
}
//or
/* 
let total = 0;
for(const student of listOfStudentObjects) {
  if('age' in students) {
    total += student.age;
  }
}
return total
*/
module.exports = { transformArrayToUpper, sumOfAllAges };
