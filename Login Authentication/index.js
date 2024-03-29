


function signUp() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(!isValidPassword(password)) {
        alert('Password must be 6 - 20 characters long, contain 1 uppercase letter, 1 lowercase letter and 1 number, no special characters')
    }
}

