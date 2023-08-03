/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let number_array = ["0","1","2","3","4","5","6","7","8","9"]; //these are the only 10 numbers (as strings) that could occur as a first character
  let symbol_array = ["!","@","#","$","%","^","&","*","(",")",".",",","?"]; //'special characters' may not be defined the same way in each system, array can be changed to changed definition in function

  let username_is_valid= false; //inner functions only change these variables to booleans if they are true so initialize them as booleans

  let length_check = false;
  let first_letter_check = false;
  let symbol_check = false;

  if(username.length >= 3 && username.length <= 10){
    length_check = true;
  }

  if(!(number_array.includes(username[0]))){ //once it is determined that it does begin with a letter, then "may contain letters and numbers" is satisfied
    first_letter_check = true;
  }

  for (let i = 0; i < username.length; i++) {
    if(symbol_array.includes(username[i])){
      symbol_check = false;
      break;
    } else {
      symbol_check = true;
    }
  }

  if(length_check && first_letter_check && symbol_check){
    username_is_valid = true;
  }

  return username_is_valid;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {

  let number_array = ["0","1","2","3","4","5","6","7","8","9"];
  let symbol_array = ["!","@","#","$","%","^","&","*","(",")"];

  let password_is_valid = false;

  let length_check = false;
  let all_char_check = false;

  if(password.length >= 10 && password.length <= 64){
    length_check = true;
  }

  let letter_check = false;
  let number_check = false;
  let symbol_check = false;

  for (let i = 0; i < password.length; i++){
    if(symbol_array.includes(password[i])){
      symbol_check = true;
    }
    if(number_array.includes(password[i])){
      number_check = true;
    }
    if(!symbol_array.includes(password[i]) && !number_array.includes(password[i])){
      letter_check = true;
    }
    if(symbol_check && number_check && letter_check){
      all_char_check = true;
      break;
    }
  }

  if(length_check && all_char_check){
    password_is_valid = true;
  }

  return password_is_valid;
}

module.exports = { validUsername, validPassword };