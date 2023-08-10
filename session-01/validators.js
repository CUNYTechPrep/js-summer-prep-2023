/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    //the variable pattern checks 
        //first if the first character is a letter [a-zA-Z] 
        //then the characters can be any letter or number [/w/d]
        var pattern = new RegExp(/^[a-zA-Z][\w\d]{2,9}$/);
        return pattern.test(username); // then the test ,method of the pattern class is used
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {

  //the variable pattern checks 
        //using look ariund if the password has a letter /(?=.*[\w]
        // or a number (?=.*[\d]
        //or any of these special characters (?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/);
        var pattern = new RegExp(/(?=.*[\w])(?=.*[\d])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/);
         return pattern.test(password);  // then the test method of the pattern class is used
         
}

module.exports = { validUsername, validPassword };
