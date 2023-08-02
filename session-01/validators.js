/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

function isLetter(character) {
  return /^[a-zA-Z]$/.test(character);
}

function isDigit(character) {
  return /^[0-9]$/.test(character);
}

function isSpecialCharacter(character) {
  return /^[^a-zA-Z0-9]$/.test(character);
}

function validUsername(username) {

  if(!(username.length >= 3 && username.length <= 10) || isNaN(username[0]) == false){
    return false;
  }

  for(let i = 0; i < username.length; i++){
    if(isSpecialCharacter(username[i])){
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
function validPassword(password) {

  let letter = false;
  let number = false;
  let special = false;

  if (!(password.length >= 10 && password.length <= 64)) {
    return false;
  }

  for (let i = 0; i < password.length; i++) {
    if (isLetter(password[i])) {
      letter = true;
    } 
    
    else if (isDigit(password[i])) {
      number = true;
    } 
    
    else if (isSpecialCharacter(password[i])) {
      special = true;
    }
  }

  if((letter && number && special) != true){
    return false;
  }

  return true;
}

module.exports = { validUsername, validPassword };
