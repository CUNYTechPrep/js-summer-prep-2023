/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length (return)
  - username must begin with a letter (return)
  - username may contain numbers and letters (return)
  - username cannot contain special characters (isSpecial...)
*/

//Helper function to see if its a letter (Username and Password)
function isLetter(character){
  return /^[a-zA-Z]+$/.test(character);
}

//Helper function to see if its a number (Password)
function isNumber(character) {
  return /\d/.test(character);
}

//Helper function to see if its a special character (Username and password)
function isSpecialChar(character) {
  return /[.~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(character);
}

function validUsername(username) {
  for (let i = 0; i < username.length; i++) {
    if (isSpecialChar(username.charAt(i))) {
      return false;
    }
  }
  return username.length >= 3 && username.length <= 10 && isLetter(username.charAt(0));
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length (return)
  - password must contain at least 1 letter, 1 number, and 1 special character (for loop to keep track)
*/
function validPassword(password) {
  let letter, number, special = false;
  for (let i = 0; i < password.length; i++) {
    if (isLetter(password.charAt(i))) {
      letter = true;
    }
    else if (isNumber(password.charAt(i))) {
      number = true;
    }
    else {
      special = true;
    }
  }
  if (letter == true && number == true && special == true) {
    return password.length >= 10 && password.length <= 64;
  }
  return false;
  
}

module.exports = { validUsername, validPassword };
