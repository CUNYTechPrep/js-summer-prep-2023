/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (username.length < 3 || username.length > 10) {
    return false;
  }
  // ^ means start of the string, if the we dont find the letters
  //a-Z or A-Z in the first letter returns False
  if (!/^[a-zA-Z]/.test(username)) {
    return false;
  }
  //checks the entire username, + means can occur more than once
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
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
function validPassword(password) {
  if (password.length < 10 || password.length > 64) {
    return false;
  }
  var specialchar = "!@#$%^&*()_-+=<>?/[]{}|\\~`";
  var specCount = 0;
  for (var i = 0; i < password.length; i++) {
    let letter = password[i];
    if (specialchar.includes(letter)) {
      specCount++;
    }
  }
    if (specCount === 0) {
      return false;
    }
  
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    return false;
  }
  return true;

}

module.exports = { validUsername, validPassword };