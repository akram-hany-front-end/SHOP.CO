let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){

e.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let user = {
    username: username,
    password: password
}

localStorage.setItem("user", JSON.stringify(user));

alert("User Registered Successfully");

window.location.href = "login.html";

});