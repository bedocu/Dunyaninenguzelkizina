
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === "4159") {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("Şifre yanlış balım :)");
    }
}
