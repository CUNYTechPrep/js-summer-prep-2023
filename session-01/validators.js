/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {

  //checking character length
  if(username.length < 3 || username.length > 10) return false;
  if (username.length < 3 || username.length > 10) return false;

  // begin with a letter
  if(!username[0].test("[A-Za-z]")) return false;

  //contain numbers and letters, no special characters
  if(!/^[a-zA-Z0-9]+$/.search(username)) return false;

 //if the username follows all the guidelines then it will return true
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {

  //checking password length
  if(password.length < 10 || password.length > 64) return false;

  //password containing 1 letter, 1 number and 1 special character
  if (!/[a-zA-Z]/.search(password)) return false;

  if (!/\d/.search(password)) return false;
  
  if (!/[^a-zA-Z0-9]/.search(password)) return false;

  //if the password is valid it will return true
  return true;
}

module.exports = { validUsername, validPassword };
