/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(username.length<3 || username.length>10)
        return false;

    if(
        !(username[0]>="a" && username[0] <="z") && 
        !(username[0]>="A" && username[0] <="Z")
    )
        return false;
    
    for(let i = 0;i<username.length;i++)
    {
        let letter = username[i];
        if(letter >= "a" && letter <= "z") continue;
        if(letter >= "A" && letter <= "Z") continue;
        if(letter >= "0" && letter <= "9") continue;
        return false;
    }

    if(username.includes(specialChars))
    {
        console.log("username cannot contain special characters");
        return false;
    }

    return true;
  }
  
  /*
    Write a function that returns true or false if the given password
    is valid according to the following rules:
    - password must be between (and including) 10-64 characters in length
    - password must contain at least 1 letter, 1 number, and 1 special character
  */
  function validPassword(password) {
    // let regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,64}$/;

    // return regex.test(password);

    if(password.length < 10 || password.length > 64) return false;

    let numberCount=0;
    for(let i = 0;i<password.length;i++)
    {
        let letter = password[i];
        if(letter >= "0" && letter <="9") numberCount++;
    }
    if(numberCount ===0) return false;

    let alphaCount=0;
    for(let i = 0;i<password.length;i++)
    {
        let letter = password[i];
        if((letter >= "a" && letter <="z") || (letter >= "A" && letter <="Z")) alphaCount++;
    }
    if(alphaCount ===0) return false;

    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,64}$/;
    let specialCount = 0;
    for(let i = 0;i<password.length;i++)
    {
        let letter = password[i];
        if(regex.includes(letter)) specialCount++;
    }
    if(specialCount===0) return false;

    return true;
  }
  
  module.exports = { validUsername, validPassword };
