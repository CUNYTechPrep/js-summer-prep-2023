/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  lengthRequirement = username.length >= 3 && username.length <= 10
  firstChar = username[0]
  firstIsLetter = (firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z')
  noSpecialCharacters = !username.match(/\W/)
  return lengthRequirement && firstIsLetter && noSpecialCharacters;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  lengthRequirement = password.length >= 10 && password.length <= 64
  hasOneLetter = password.match(/[a-zA-Z]/)
  hasOneNumber = password.match(/\d/)
  hasOneSpecial = password.match(/\W/)
  return lengthRequirement && hasOneLetter && hasOneNumber && hasOneSpecial;
}

module.exports = { validUsername, validPassword };
