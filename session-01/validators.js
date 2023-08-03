/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  // Define a regular expression pattern for validation
  const usernamePattern = /^[A-Za-z][A-Za-z0-9]{2,9}$/;

  // Test the username against the pattern and return the result
  return usernamePattern.test(username);
}


/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  // Define a regular expression pattern for validation
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,64}$/;

  // Test the password against the pattern and return the result
  return passwordPattern.test(password);
}

module.exports = { validUsername, validPassword };
