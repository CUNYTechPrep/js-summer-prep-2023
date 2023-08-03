/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  // if(username.length >= 3 && username.length <= 10){
  //   if((/[a-zA-Z]/).test(username.charAt(0))){
  //     for(let i = 0; i < username.length; i++){
  //       if((/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/)
  //       .test(unsername.charAt(i))){
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  // }
  // return false;
  return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  // let letter = false;
  // let number = false;
  // let special = false;
  // if(password.length >= 10 && password.length <= 64){

  //   for(let i = 0; i < password.length; i++){

  //     if((/[a-zA-Z]/).test(password.charAt(i))){ letter = true};
  //     if((/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/)
  //       .test(password.charAt(i))){ special = true};
  //     if(!(isNaN(password.charAt(i)))){ number = true};
  //   }
  // }
  // return letter && number && special;
  return false;
}

module.exports = { validUsername, validPassword };
