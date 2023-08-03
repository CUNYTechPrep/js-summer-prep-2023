/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  // Check if the username length is between 3 and 10 characters (inclusive)
  if (username.length < 3 || username.length > 10) {
    return false;
  }

  // Check if the username starts with a letter
  if (!/^[a-zA-Z]/.test(username)) {
    return false;
  }

  // Check if the username contains only letters and numbers
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
  // Check if the password length is between 10 and 64 characters (inclusive)
  if (password.length < 10 || password.length > 64) {
    return false;
  }

  // Check if the password contains at least 1 letter, 1 number, and 1 special character
  if (!/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(password)) {
    return false;
  }

  return true;
}

module.exports = { validUsername, validPassword };
