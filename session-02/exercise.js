//testing
/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  const listOfItems = [];
  if(listOfStrings.length === 0){
    return listOfStrings;
  }
  for(const item of listOfStrings){
    listOfItems.push(item.toUpperCase());
    console.log(listOfItems);
  }

  return listOfItems;
  
  // for(let i = 0;i<listOfStrings.length;i++)
  // {
  //   listOfItems.push(listOfStrings[i].toUpperCase());
  //   console.log(listOfItems[i]);
  // }
  // return listOfItems;
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
function sumOfAllAges(listOfStudentObjects) 
{
  let ageTotal = 0;
  listOfStudentObjects.forEach(student => {
    if(student.hasOwnProperty('age'))
    {
      ageTotal += student.age;
      console.log("Age: ", student.age);
    }
    
  });
  
  
  return ageTotal;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
