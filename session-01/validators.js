/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  const validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  if (username.length < 3 || username.length > 10) {
    return false;
  }

  if (!validCharacters.includes(username[0]) || !isNaN(username[0])) {
    return false;
  }

  for (let i = 0; i < username.length; i++) {
    if (!validCharacters.includes(username[i])) {
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
    return false; // Check if the password length is between 10 and 64 characters
  }

  let hasLetter = false;
  let hasNumber = false;
  let hasSpecialCharacter = false;

  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

  for (const char of password) {
    if ("a" <= char && char <= "z" || "A" <= char && char <= "Z") {
      hasLetter = true; 
    } else if ("0" <= char && char <= "9") {
      hasNumber = true;
    } else if (specialCharacters.includes(char)) {
      hasSpecialCharacter = true; 
    }

    if (hasLetter && hasNumber && hasSpecialCharacter) {
      return true;
    }
  }

  return false; 
}

module.exports = { validUsername, validPassword };
