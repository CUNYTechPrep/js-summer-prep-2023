/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

function validUsername(username) {
  if(username === null) return false;

  if(username.length >= 3 && username.length <= 10 && // between 3-10characters in length
     username.match(/\W/) === null && //cannot contain special characters, may contain numbers and letters
     username.charAt(0).match(/\D/) !== null)  //must begin with a letter
      return true;

  return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if(password === null) return false;

  if(password.length >= 10 && password.length <= 64 && // between 10-64 characters in length
     /[A-Za-z]/.test(password) && // at least 1 letter
     /\d/.test(password) && // at least 1 number
     /\W/.test(password)) // at least 1 special character
      return true;

  return false;
}

module.exports = { validUsername, validPassword };
