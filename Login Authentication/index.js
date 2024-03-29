function signUp() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!email ||!username || !password ) {
        alert('please fill in all fields');
        return;
    }

    // check if user details already exists
    if (localStorage.getItem(username)) {
        alert("Username already exists.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Email already exists.");
        return;
    }

    // check if password is in the right format
    if (!checkPassword(password)) {
        alert("Password must be 6 - 20 characters long, contain 1 uppercase letter, 1 lowercase letter, and 1 number, with no special characters");
        return;
    }

    localStorage.setItem(username, JSON.stringify({ email: email, password: password}));

    alert('Sign up successful, please log in.');
}

// function to check password format 
function checkPassword(password) {
    // check password length
    if (password.length < 6 || password.length > 20) {
        return false;
    }

    // check for uppercase, lowercase, number and no special charcters
    var upperCase = /[A-Z]/.test(password);
    var lowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    return upperCase && lowerCase && hasNumber && !hasSpecial;
}