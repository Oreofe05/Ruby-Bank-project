function signup() {
    const signUpForm = document.querySelector(".signUp")
    signUpForm.style.display = "block";
    const loginForm = document.querySelector(".login")
    loginForm.style.display = ""
}
function login() {
    const signUpForm = document.querySelector(".signUp")
    signUpForm.style.display = "none";

}

const inputDetails = {}

function saveDetail() {
    const username = document.querySelector(".userName").value
    const password = document.querySelector(".passWord").value
    const confirmPassWord = document.querySelector(".confirmpassWord").value

    const savedDetails = JSON.parse(localStorage.getItem("UserInfo"));

    function clearInputFields() {
        document.querySelector(".userName").value = ""
        document.querySelector(".passWord").value = ""
        document.querySelector(".confirmpassWord").value = ""
    }

    if (password.length < 7) {
        alert("Password must be more than six letters ")
    }
    else if (username === savedDetails.username) {
        alert("User already exist")
        clearInputFields()
    }

    else if (password !== confirmPassWord) {
        alert("Password Does not match!")
        clearInputFields()
    }
    else {
        inputDetails.username = username
        inputDetails.password = password
        localStorage.setItem("UserInfo", JSON.stringify(inputDetails));
        alert("Sign up successful!")
        clearInputFields()

    }
    login()
}

function loginButton() {
    const username = document.querySelector(".loginUsername").value
    const password = document.querySelector(".loginPassword").value
    const savedDetails = JSON.parse(localStorage.getItem("UserInfo"));
    if (username === savedDetails.username && password === savedDetails.password) {
        alert("Login successful!")
        window.location.href = "project banking 2nd app .html"
    }
    else if (!username || !password) {
        alert("Input both username and password")
    }
    else {
        alert("Invalid Password or username!")
    }
}