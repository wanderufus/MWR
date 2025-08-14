
function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "admin@mwr.com" && password === "1234") {
    window.location.href = "home.html";
  } else {
    alert("wrong username or password");
  }
}
document.getElementById("loginForm").addEventListener("submit", loginUser);
