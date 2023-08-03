/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function checkString(str, type) {
  switch(type) {
    case "Letters":
      return /[a-zA-Z]/.test(str)
    case "Specials":
      return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
    case "Numbers":
      return /[0-9]/.test(str)
    default:
      return false;
  }
}

function validUsername(username) {
  if (username.length < 3 || username.length > 10) {
    return false;
  } else if (checkString(username[0], "Letters") === false) {
    return false;
  } else if (checkString(username, "Specials")) {
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
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-|=]/.test(password)) {
    return false;
  }
  return true;
}

module.exports = { validUsername, validPassword };
