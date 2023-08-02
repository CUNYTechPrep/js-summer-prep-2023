/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  unameLength = (username.length >= 3 && username.length <= 10);
  firstChar = (username[0] >= 'a' && username[0].toLowerCase <= 'z') || (username[0] >= 'A' && username[0] <= 'Z');

  if (!unameLength || !firstChar) return false;
  for (let i = 1; i < username.length; i++) {
    ch = username[i];
    containsSpecialChar = (ch < '0') || (ch > '9' && ch < 'A') || (ch > 'Z' && ch < 'a');
    if (containsSpecialChar) return false;
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
  length = (password.length >= 10 && password.length <= 64);
  if (!length) return false;

  let letterCount = 0, numCount = 0, specialChCount = 0;

  console.log("length is valid: ");
  for (let i = 0; i < password.length; i++) {
    ch = password[i];
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) ++letterCount;
    if (ch >= 0 && ch <= 9) ++numCount;

    containsSpecialChar = (ch < '0') || (ch > '9' && ch < 'A') || (ch > 'Z' && ch < 'a');
    if (containsSpecialChar) ++specialChCount;
  }


  return (letterCount > 0 && numCount > 0 && specialChCount > 0) ? true : false;
}

module.exports = { validUsername, validPassword };
