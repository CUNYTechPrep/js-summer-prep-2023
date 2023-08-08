
//the function ues Regex to check the username password

function validUsername(username)
    {

        //the variable pattern checks 
        //first if the first character is a letter [a-zA-Z] 
        //then the characters can be any letter or number [/w/d]
        var pattern = new RegExp(/^[a-zA-Z][\w\d]{2,9}$/);
        return pattern.test(username); // then the test ,ethod of the pattern class is used


    }

function validPassword(password)

 //the variable pattern checks 
        //using look ariund if the password has a letter /(?=.*[\w]
        // or a number (?=.*[\d]
        //or any of these special characters (?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/);

    {
        var pattern = new RegExp(/(?=.*[\w])(?=.*[\d])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/);
         return pattern.test(password);  // then the test method of the pattern class is used
    }