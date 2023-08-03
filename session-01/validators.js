/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

// validUsername("H");
// validUsername("4ello234");
// validUsername("ello2%4");
// validUsername("Hello234");

function validUsername(username) {
  //Regex Range
  let myCheck = /[a-zA-Z]/;
  let myNumCheck = /[0-9]/;

  //Length Check
  if (username.length < 3 || username.length > 10){
    return false;
  }

  //First Letter Check
  if (!(myCheck.test(username[0]))){
    return false;
  }

  //No Special Character Check
  for (let i = 0; i < username.length; i++){
    if (!(myCheck.test(username[i])) && !(myNumCheck.test(username[i]))){
      return false;
    }
  }

  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/

// validPassword("24125");
// validPassword("12321312241223145");
// validPassword("12321312241223145A");
// validPassword("12321312241223145B$");

function validPassword(password) {
  //My Regex Quantifier
  let letterCheck = /[a-zA-Z]+/;
  let numberCheck = /[0-9]+/;
  let specialCheck = /[\. \+ \* \? \^ \$ \( \) \[ \] \{ \} \| \\]+/;
  
  //Length Check
  if (!(password.length >= 10 && password.length <= 64)){
    return false;
  }

  //At least 1 letter, 1 number, 1 special character
  if (!(letterCheck.test(password))){
    return false;
  }

  if (!(numberCheck.test(password))){
    return false;
  }

  if (!(specialCheck.test(password))){
    return false;
  }

  return true;
}

module.exports = { validUsername, validPassword };
