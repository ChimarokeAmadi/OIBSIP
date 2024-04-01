
var loggedInUser = localStorage.getItem('loginUsername');

var welcomeMessage = document.getElementById('welcomeMessage');

welcomeMessage.innerHTML = 'Hello ' + loggedInUser + '! welcome to the MVPs secure page.' 

