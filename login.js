let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

e.preventDefault();

let username = document.getElementById("loginUsername").value;
let password = document.getElementById("loginPassword").value;

let storedUser = JSON.parse(localStorage.getItem("user"));

if(username === storedUser.username && password === storedUser.password){

    alert("Login Success");

    window.location.href = "page.html";

}else{

    alert("Username or Password Wrong");

}

});