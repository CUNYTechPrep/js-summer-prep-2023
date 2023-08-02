/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {

  const regLetters = /^[a-zA-Z]/; // Regular expressions for matching the username to letters.
  const regSpecialCharacters = /[^a-zA-Z0-9]/; // Regular expression for matching the username special characters.
  
  if(username.length > 10 || username.length < 3 || !regLetters.test(username) || regSpecialCharacters.test(username)) 
    return false;
  else
    return true;

  /*
  Breakdown of If-else statement
  1. username.length > 10 || username.length < 3
    -The username's length is tested to be either greater than 10, or less than 3.
  2. !regLetters.test(username)
    - regLetters is a const variable set to the Regular Expression: /^[a-zA-Z]/.
    - NOTE: ^ negates any character that is not what is in the expression (e.g., symbols, spaces, special characters, etc.).
    - We apply the .test() method to the variable in order to search for a match between regLetters & username's string.
    - Assuming it returns true, we apply the logical NOT (!) to the entire expression in order to return false because the purpose
    of this conditional is to check that the username has no letters.
  3. regSpecialCharacters.test(username)
    - regSpecialCharacters is a const variable set to the Regular Expression: /[^a-zA-Z0-9]/.
    - This expression is unique in that is negates any character that is not alphanumeric.
    - We apply the .test() method to the variable in order to search for a match between regSpecialCharacter & username's string.
  4. What does it return?
    - So, if username has a length > 10, or < 3, or it doesn't have any letters, or it has any special characters, then it will return false.
    - Otherwise, we return true.
  */

}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {

  const passLetters = /[a-zA-Z]/;
  const passNumbers = /[0-9]/;
  const passSpecialCharacters = /[^a-zA-Z0-9]/;

  if(password.length <= 64 && password.length >= 10){
    if(passLetters.test(password)){
      if(passNumbers.test(password)){
        if(passSpecialCharacters.test(password))
          return true;
        }
      }
    }
  else
    return false;

  /* Break down of if-else statement
    - The outter most if-statement tests for the password's length, and if it is less than or equal to 64, AND greater than or equal to 10.
    - The 1st nested if-statement tests the variable, passLetters, set to the RegExp /[a-zA-Z], against the password's string.
    - The 2nd nested if-statement tests the variable, passNumbers, set to the RegExp /[0-9], against the password's string.
    - The 3rd & final nested if-statement tests the variable, passSpecialCharacters, set to the RegExp /[^a-zA-Z0-9], against the password's string.
    - IF password's string matches the conditions, it'll return true. Otherwise, it'll return false.
  */
}

module.exports = { validUsername, validPassword };