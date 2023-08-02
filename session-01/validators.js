/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length- done
  - username must begin with a letter-done-done
  - username may contain numbers and letters-done
  - username cannot contain special characters-done
*/

function validUsername(username) {
  let isUsernameValid = false;
  if (/[^a-zA-z0-9]/.test(username)) {
    isUsernameValid = false;
    return isUsernameValid;
  } else {
    if (username.length >= 3 && username.length <= 10) {
      if (/[a-zA-Z0-9]/.test(username)) {
        if (/[a-zA-Z]/.test(username[0])) {
          isUsernameValid = true;
        }
      }
    }
  }

  return isUsernameValid;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length-done
  - password must contain at least 1 letter, 1 number, and 1 special character-done
*/
function validPassword(password) {
  let isPasswordValid = false;
  if (password.length >= 10 && password.length <= 64) {
    if (/[a-zA-Z]/.test(password)) {
      if (/[0-9]/.test(password)) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          isPasswordValid = true;
        }
      }
    }
    return isPasswordValid;
  }
}

module.exports = { validUsername, validPassword };
