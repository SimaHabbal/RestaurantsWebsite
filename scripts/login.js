let userCredentials = {};
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
let message = document.getElementById("message")

function login() {
    if (username in userCredentials ) {
        if (userCredentials[username] === password) {
            window.location.href = "link to main"
        } else {
            message.innerHTML = "Incorrect Username/Password"
        };   
    } else {
        message.innerHTML = "Username does not exist. Please sign up first."
        showSignUp()
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
    };
};