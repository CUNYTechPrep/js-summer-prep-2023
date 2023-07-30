/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  const validLength = Boolean(username.length >= 3 && username.length <= 10? true: false);
  
  /*
    /[A-Z]/i: Find if there is an individual character from A to Z going from left to right. 
    !(/\W/i): Find if there is NOT an individual special character
    /\D/i: Find if there is NOT an individual number
    /\w/: Fine a alphanumeric character which is not a special character.
  */

  const beginningLetter = username.charAt(0);
  const remainingUsername = username.substring(1, username.length);

  const beginsWithLetter = Boolean(beginningLetter.match(/[A-Z]/i) != null? true: false);
  const containsLettNum = Boolean(remainingUsername.match(/\w/));
  const specialCharacter = Boolean(remainingUsername.match(/[\W]/)); 
  return validLength && beginsWithLetter && containsLettNum && !specialCharacter;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  const validLength = Boolean(password.length >= 10 && password.length <= 64? true: false);
  const containsLetter = Boolean(password.match(/[A-Z]/i));
  const containsNumber = Boolean(password.match(/\d/i));
  const containsSpecialChar = Boolean(password.match(/\W/i));
  return validLength && containsLetter && containsNumber && containsSpecialChar;
}

module.exports = { validUsername, validPassword };
