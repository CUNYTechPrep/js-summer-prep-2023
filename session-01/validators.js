/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    
    //username 3-10 characters
    if (username.length < 3 || username.length > 10) {
      return false;
    }
    //username start with letter
    if (!"^") {
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

  //password 10-64 characters
  if(password.length >= 10 && password.length <= 64) {
    //password contain atleast 1 letter, 1 number, 1 special character
    if(!(/[a-zA-z]/.test(password))) {
      return false;
    }
    if(!(/[0-9]/.test(password))) {
      return false;
    }
    return true;
    
  }
    else {
    return false;

  }

}

module.exports = { validUsername, validPassword };
