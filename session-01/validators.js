/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length done
  - username must begin with a letter done
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  
  if (username.length < 3 || username.length > 10){
    return false;
  }
  
  let firstCharacter = username[0].toLowerCase();
  if (!(firstCharacter >= 'a' && firstCharacter <= 'z')){
    return false;
  }

  const alphanumeric = /^[a-zA-Z0-9]+$/
  if(!alphanumeric.test(username)){
    return false;
  }

  const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  if(specialChar.test(username)){
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

  if (!(password.length >= 10 && password.length <= 64)){
    return false;
  }


  const letter = /[a-zA-Z]/
  const number = /\d/
  const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

  if(!letter.test(password) || !number.test(password) || !specialChar.test(password)){
    return false;
  }

  return true;
}

module.exports = { validUsername, validPassword };
