console.log("hello");

let age = 50;
age++;
console.log("age: " + age);
let array = ["array", "with", 4, "things", [2, 3]];
console.log(array);
console.log(array.length);
array.push(3.14);
console.log(array.length);
console.log(array);

// Dictionary, map, key-value store
let obj = {
    "first-name": "Sofia",
    age: 31,
  };
  
  // set properties/keys
  obj["school"] = "Baruch";
  obj.school = "York";
  
  console.log(obj);

  //test isLetter
  let char = "a";
  console.log("should return true: " + (/[a-zA-Z]/).test(char));

   //test isLetter2
   let str = "apple";
   let str2 = "2";
   console.log("should return true: "   
        + (/[a-zA-Z]/).test(str.charAt(0)));
   console.log("should return true: "   
        + !(/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/)
        .test(str.charAt(0)));
   console.log("should return true: "   
        + !(isNaN(2)));
        console.log("should return true: "   
        + !(isNaN(str2)));
    
   
   
   





