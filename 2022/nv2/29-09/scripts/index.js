let users = {
  "rey@gmail.com": "123456789",
};

let loggedUser = {};

function login() {
  const email = document.getElementById("input-email").value;
  const password = document.getElementById("input-password").value;

  if (users[email] == password) {
    window.location.href = "./dashboard.html";
    return;
  }

  console.log("Email e senha errados");
}
