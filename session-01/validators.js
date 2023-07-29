/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  const allowedChars = username.match(/^[a-zA-Z0-9]+$/);

  if (username.length >= 3 && username.length <= 10) { 
    if (!isNaN(username[0])) {
      return false;
    } 
    if (!allowedChars) {
      return false;
    }
    return true; 
  } 
  else if (username.length < 3 || username.length > 10) {
    return false;
  }
  return;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  const allowedLetter = password.match(/[a-zA-Z]/);
  const allowedNum = password.match(/\d/);
  const allowedSPChar = password.match(/[!@#$%^&*]/);

  if (password.length >= 10 && password.length <= 64) { 
    if (!(allowedLetter && allowedNum && allowedSPChar)) {
      return false;
    }
    return true;
  }
  return;
}

module.exports = { validUsername, validPassword };
