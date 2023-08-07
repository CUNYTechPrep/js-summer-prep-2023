function validUsername(username) {
  if ((username.length > 2 && username.length < 11) && ((/[a-zA-Z]/).test(username.charAt(0))) &&
    !((/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/).test(username))) {
    return true
  }
  else {
    return false
  }
}
function validPassword(password) {
  if ((password.length > 9 && password.length < 65) && (((/[a-zA-Z]/).test(password)) && (/\d/).test(password)) &&
    ((/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/).test(password))) {
    return true
  }
  else {
    return false
  }
}

module.exports = { validUsername, validPassword };
