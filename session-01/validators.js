/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if((username.charAt(0) >= 'A') && (username.charAt(0) <= 'Z') || (username.charAt(0) >= 'a') && (username.charAt(0) <= 'z') )
  {
    for(let i = 0 ; i < username.length ; i++)
      {
        if((username.charAt(i) < '0'))
          return false ; //console.log("Username can not contain special characters.") ;
        if((username.charAt(i) > '9')&&(username.charAt(i) < 'A'))
          return false ; //console.log("Username can not contain special characters.") ;
        if((username.charAt(i) > 'Z')&&(username.charAt(i) < 'a'))
          return false ; //console.log("Username can not contain special characters.") ;
        if((username.charAt(i) > 'z'))
          return false ; //console.log("Username can not contain special characters.") ;
        
      }
  }

  else return false ; // console.log("name must start with a letter.") ;

  if((username.length < 3) || (username.length > 10))
  return false ; //console.log("Username must be between 3 and 10 characters") ;
  else return true ;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let letterCount = 0 ;
  let numberCount = 0 ;
  let specialCount= 0 ;

    if((password.length >= 10)&&(password.length <= 64))
      {
        for(let i = 0 ; i < password.length ; i++)
          {
            if((password.charAt(i) >= '0')&&(password.charAt(i) <= '9'))
              numberCount++ ;
            else if((password.charAt(i) >= 'A')&&(password.charAt(i) <= 'Z'))
              letterCount++ ;
            else if((password.charAt(i) >= 'a')&&(password.charAt(i) <= 'z'))
              letterCount++ ;
            else specialCount++ ;
          }
        if((letterCount > 0)&&(numberCount > 0)&&(specialCount > 0))
        return true ;
        else return false ;//console.log("password must contain at least 1 letter, 1 number, and 1 special character") ;
      
      } else return false ;//console.log("password must be between 10 and 64 characters.");
}

module.exports = { validUsername, validPassword };
