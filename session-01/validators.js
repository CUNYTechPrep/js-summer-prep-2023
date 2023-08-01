/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username){

  const regLetters = /[a-z][A-Z]/; // Regular expressions for matching the user name
  
  if(username.length > 10 || username.length < 3 && username[0] != regLetters) //This works
    return false;
  else
    return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if(password.length > 64 || password.length < 10) //this works
    return false;
  else
    return true;
}

module.exports = { validUsername, validPassword };
