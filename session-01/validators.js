/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/


function validUsername(username) {
   //Checking if the username is between (and including) 3-10 characters in length
  if (username.length < 3 || username.length > 10) {
    return false;
  }

  // Checking if the first character is a letter using regular expression
  if (!username[0].match(/[a-zA-Z]/)) {
    return false;
  }

  // Checking if the username contains only numbers and letters using regular expression
  if (!username.match(/^[a-zA-Z0-9]+$/)) {
    return false;
  }

  // If all checks pass, returning true (valid username)
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/


function validPassword(password) {
  // Checking if the password is between (and including) 10-64 characters in length
  if (password.length < 10 || password.length > 64) {
    return false;
  }
  // Checking if the password contain at least 1 letter, 1 number, and 1 special character
  if (!password.match(/[a-zA-Z]/) || !password.match(/\d/) || !password.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/)) {
    return false;
  }

  return true;
}


module.exports = { validUsername, validPassword };