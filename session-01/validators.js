/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (username.split('') >= 3 & username.split('') <= 10){
    username = true;
  }
  else if (username.begin() === username.match(/[a-z]/i)){
      username = true;
  }
 else if (username === /^[A-Za-z0-9]*$/){
      username = true;
  }
  else if (username === /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ ){
      username =  false;

  return;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if (password.split('') >= 10 & password.split('') <= 64){
    password = true;
}
if (password === /^[A-Za-z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/ ){
    password = true;
}
  return;
}

module.exports = { validUsername, validPassword };
