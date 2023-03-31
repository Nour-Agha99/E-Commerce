const inputUser = document.querySelector("#inputUser");
const inputPassword = document.querySelector("#inputPassword");
const loginButton = document.querySelector(".input-field #loginButton");
const linkToBage = document.querySelector(".input-field .linkToBage");

loginButton.addEventListener("click", function () {
    if (inputUser.value === "Admin" && inputPassword.value === "Admin") {
        linkToBage.href = "./html/admin.html"
    } else if (inputUser.value.trim() === "" || inputPassword.value.trim() === "") {
        linkToBage.href = "../index.html"
    } else {
        linkToBage.href = "./html/user.html"
    }
    inputUser.value = "";
});