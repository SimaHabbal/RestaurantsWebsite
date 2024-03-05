let userCredentials = {};
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
let message = document.getElementById("message")

function login() {
    if (username in userCredentials ) {
        if (userCredentials[username] === password) {
            window.location.href = "./RestaurantWebsite/allResto.html"
        } else {
            message.innerHTML = "Incorrect Username/Password"
        };   
    } else if (username==="admin" && password==="admin123") {
        window.location.href = "../admin.html"
    } else {
        message.innerHTML = "Username does not exist. Please sign up first."
        showSignUp()
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
    };
};

function showSignUp() {
    document.getElementById("signup-button").style.display = "block";
    document.getElementById("login-button").style.display = "none";
};

function showLogin() {
    document.getElementById("signup-button").style.display = "none";
    document.getElementById("login-button").style.display = "block";
};

function signUp() {
    showSignUp();
    if (username in userCredentials) {
        message.innerHTML = "Username already exists. Please login.";
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
        showLogin();
    } else {
        userCredentials[username] = password;
        localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
    }; 
};
