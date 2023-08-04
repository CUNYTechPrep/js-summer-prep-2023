/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  const usernameLength = username.length;
  
  if (usernameLength < 3 || usernameLength > 10) {
    return false;
  }

  const firstChar = username[0];
  const isLetter = (firstChar >= 'a' && firstChar <= 'z') || (firstChar >= 'A' && firstChar <= 'Z');
  if (!isLetter) {
    return false;
  }

  for (let i = 1; i < usernameLength; i++) {
    const char = username[i];
    const isLetterOrDigit = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
    if (!isLetterOrDigit) {
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

  const specialCharacters = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
      hasLetter = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if (specialCharacters.includes(char)) {
      hasSpecialChar = true;
    }
  }

  return hasLetter && hasNumber && hasSpecialChar;
}

module.exports = { validUsername, validPassword };
