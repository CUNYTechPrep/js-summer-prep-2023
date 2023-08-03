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
  if (!(username.charAt(0).toLowerCase() >= 'a' && username.charAt(0).toLowerCase() <= 'z')) {
    return false;
  }
  for (let i = 0; i < username.length; i++) {
    let character = username.charAt(i);
    if (!(character.toLowerCase() >= 'a' && character.toLowerCase() <= 'z') &&
        !(character >= '0' && character <= '9')) {
      return false;
    }
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

  let hasLetter = false;
  let hasNumber = false;
  let hasSpecialChar = false;
  let specialChars = "!@#$%^&*()_+=-[]{};:'\"\\|,.<>?/";

  for (let i = 0; i < password.length; i++) {
    let character = password.charAt(i);

    if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
      hasLetter = true;
    }

    else if (character >= '0' && character <= '9') {
      hasNumber = true;
    }

    else if (specialChars.indexOf(character) !== -1) {
      hasSpecialChar = true;
    }

    else {
      return false;
    }
  }

  return hasLetter && hasNumber && hasSpecialChar;
}


module.exports = { validUsername, validPassword };
