/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {

  // username length is between and including 3 to 10 case
  if (username.length > 2 && username.length < 11){

    // first char of username is aplhabet a to z or A to Z case
    if (username.charAt(0).match(/[a-zA-Z]/)){

      // username only containts alphanumeric  
      if (username.match(/^[a-zA-Z0-9]+$/)){

        // username does not contain any special char
        if (!username.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){

          // when all the cases pass, return true
          return true;
        }
      }
    }
  }

  // assume username does not meet the requirements unless the nested if returns true
  return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {

/*
////////////////////////////////////////////////////////////////////////////////////////////////////
      For some reason this nested if is returning undefined, I'm unable to find the solution
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

  // password length is between 10 and 64 characters
  if(password.length >= 10 && password.length <= 64){

    // password contains at least one letter
    if(password.match(/[a-zA-Z]/)){

      // password contains at least one number
      if(password.match(/[0-9]/)){

        // password contains at least one special character
        if(password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){

          // when all the cases pass, return true
          return true;
        }
      }
    }
  }

  // assume password does not meet the requirements unless the nested if returns true
  return false;


}

module.exports = { validUsername, validPassword };
