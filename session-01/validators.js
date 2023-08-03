/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {  //check length
  if(username.length < 3 || username.length > 10)
  {return false;}

  //check first character is letter
  const firstChar = username.charCodeAt(0);
  if ((firstChar < 65 || firstChar > 90) && (firstChar < 97 || firstChar > 122)) {
    return false;
  }

  // Check if the username contains only letters and numbers
  for (let i = 0; i < username.length; i++) {
    const character = username.charCodeAt(i);
    if (!((character >= 48 && character <= 57) || (character >= 65 && character <= 90) || (character >= 97 && character <= 122))) {
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

  //check length
  if (password.length < 10 || password.length > 64) {
    return false;
  }

  //check for one letter, one number, one special character
  let letter = false;
  let number = false;
  let special = false;

  //iterate through all characters
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);  //get ascii code

    //if character is number
    if ((char >= 48 && char <= 57)) {
      number = true;}

     else if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      letter = true;}
    
     else if ((char >= 33 && char <= 47) || (char >= 58 && char <= 64) || (char >= 91 && char <= 96) || (char >= 123 && char <= 126)) {
      special = true;}
    


    if (letter && number && special) {
      return true;}
    
  } //end of for loop
  return false; //return false if these tests dont pass
}

module.exports = { validUsername, validPassword };
