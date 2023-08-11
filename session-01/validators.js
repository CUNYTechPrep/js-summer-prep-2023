/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    if (username.length < 3 || username.length > 10) return false;

    let isStartAlpha = (username[0] >= "a" && username[0] <= "z") ||
                       (username[0] >= "A" && username[0] <= "Z");
    if (!isStartAlpha) return false;

    for (let i = 1; i < username.length; i++) {
        let char = username[i];
        if (!((char >= "a" && char <= "z") ||
              (char >= "A" && char <= "Z") ||
              (char >= "0" && char <= "9"))) return false;
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
    if (password.length < 10 || password.length > 64) return false;

    let numberCount = 0, alphaCount = 0, specialCount = 0;
    const specialPrintableCharacter = "!\"#$%&'()*+,-./:;<=>?@{\\]^_`{|}~";

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= "0" && char <= "9") {
            numberCount++;
        } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
            alphaCount++;
        } else if (specialPrintableCharacter.includes(char)) {
            specialCount++;
        }
    }

    if (numberCount == 0 || alphaCount == 0 || specialCount == 0) return false;

  return true;
}

module.exports = { validUsername, validPassword };
