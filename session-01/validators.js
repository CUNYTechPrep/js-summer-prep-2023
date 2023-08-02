/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{2,9}$/;

function validUsername(username) {
  if(username.match(usernameRegex)){
    return true;
  }
  return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])[a-zA-Z0-9\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]{10,64}$/;

function validPassword(password) {
  if(password.match(passwordRegex))
  {
    return true;
  }
  return false;
}

module.exports = { validUsername, validPassword };
