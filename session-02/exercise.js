/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  let outPutArray=[];
  if(listOfStrings.length===0)
  {
    return outPutArray;
  }
  else 
  {
     for(let i=0;i<listOfStrings.length;i++)
  {
    outPutArray.push(listOfStrings[i].toUpperCase());
  }
  return outPutArray;
  }
 
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
  let sumOfAges=0;
  for(let i=0; i<listOfStudentObjects.length;i++)
  {
    if(listOfStudentObjects[i].age)
    {
      sumOfAges+=listOfStudentObjects[i].age;
    }
      
   
  }
  return sumOfAges;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
