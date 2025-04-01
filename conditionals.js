// DOM Elements
const btnShowHide = document.getElementById("btn-show-hide")
const imgFruit = document.getElementById("img-fruit")
const btnLogin = document.getElementById("btn-login")
const inputUsername = document.getElementById("input-username")
const inputPassword = document.getElementById("input-password")

// Event Listeners
btnShowHide.addEventListener("click", handleShowHideClick)
btnLogin.addEventListener("click", handleLogin)

// Event Handlers
function handleShowHideClick() {
    // console.log("Button clicked")
    if (hide) {
        console.log("Hide is true")
        imgFruit.style.display = "inline"
        btnShowHide.innerText = "Hide"
        
        // hide = false
    } else {
        console.log("Hide is false")
        imgFruit.style.display = "none"
        btnShowHide.innerText = "Show"
        
        // hide = true
    }

    // golden toggle logic
    hide = !hide
}

function handleLogin() {
    // console.log("Login is working")

    // fetch the username and password values
    // from the two inputs
    // then check that both the username and password are not empty
    // then simulate a login

    const username = inputUsername.value
    const password = inputPassword.value

    // console.log(username)
    // console.log(password)

    // if (username !== "" && password !== "") {
    //     console.log("Username is NOT empty AND password is NOT empty")
    // } else {
    //     console.log("Something is empty")
    // }


    if (username === "" || password === "") {
        console.log("username is empty OR password is empty")
    } else {
        console.log("username AND password are NOT empty")
    }
}

// Variables
let hide = false
let anotherBoolean = true

// Functions

// Runtime
// console.log("It works")


// using an if statement to check a range
const grade = 36

if (grade < 40) {
    console.log("Fail")
} else if (grade < 75) {
    console.log("Pass")
} else {
    console.log("Distinction")
}