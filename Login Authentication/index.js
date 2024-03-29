


function signUp() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(!isValidPassword(password)) {
        return;
    }

    // save user data to local storage
    var userData = {
        email: email,
        username: username,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(userData));

    alert('Sign up successful. You can now login.');

    window.location.href = 'login.html'; //redirect to login page.

}

function isValidPassword(password) {
    //check password length
    if(password.length < 6 || password.length > 20) {
        alert('Password must be 6 - 20 characters long');
        return false;
    }

    // Check for uppercase, lowercase, and number
    var hasUpperCase = /[A-Z]/;
    var hasLowerCase = /[a-z]/;
    var hasNumber = /[0-9]/;

    if (!hasUpperCase.test(password) || !hasLowerCase.test(password) || !hasNumber.test(password)) {
        alert('Password must have an upper case letter, a lower case letter and a number, no special characters')
        return false;
    }

     // Check for special characters (none allowed)
     var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
     if (hasSpecialChar.test(password)) return false;
 
     return true;
}


function login() {
    var loginUsername = document.getElementById('login-Username').value;
    var password = document.getElementById('login-Password').value;

    var userData = JSON.parse(localStorage.getItem(loginUsername));

    if (userData && userData.password === password){
        alert('Login successful. Welcome, ' + loginUsername + '!');
    }
}
