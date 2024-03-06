let message = document.getElementById("message")

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username=="admin" && password=="admin123") {
        window.location.href = "../RestaurantsWebsite/admin.html"
    } else if (localStorage.getItem(username) !== null ) {
        if (localStorage.getItem(username) === password) {
            window.location.href = "../RestaurantsWebsite/allResto.html"
        } else {
            message.innerHTML = "Incorrect Username/Password"
            document.getElementById("username").value = ""
            document.getElementById("password").value = ""
        };   
    } else {
        message.innerHTML = "Username does not exist. Please sign up first."
        showSignUp()
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
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

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (localStorage.getItem(username) !== null) {
        message.innerHTML = "Username already exists. Please login.";
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
        showLogin();
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
    } else {
        localStorage.setItem(username, password);
        showLogin()
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
    }; 
};
