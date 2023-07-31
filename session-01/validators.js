/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/  

//regex
const letterStart = /^[a-zA-Z]/; 
const specialCharCheck = /^[a-zA-Z0-9]*$/;

function validUsername(username) {

  if(username.length < 3 || username.length > 10 || !letterStart.test(username[0]) || !specialCharCheck.test(username)) {
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

//regex
const oneLetter = /[a-zA-Z]/;
const oneNumber = /\d/;
const oneSpecialChar = /[\W_]/;

function validPassword(password) {
  if(password.length < 10 || password.length > 64 || !oneLetter.test(password) || !oneNumber.test(password) || !oneSpecialChar.test(password)) {
    return false;
  }
  return true;
}

module.exports = { validUsername, validPassword };
