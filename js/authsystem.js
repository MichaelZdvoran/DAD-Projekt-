document.addEventListener("DOMContentLoaded", function () {
  let registerForm = document.getElementById("registerForm");
  let loginForm = document.getElementById("loginForm");

  if (registerForm) {
      registerForm.addEventListener("submit", function (e) {
          e.preventDefault();
          let newEmail = document.getElementById("newEmail").value.trim();
          let newPassword = document.getElementById("newPassword").value.trim();

          if (!newEmail || !newPassword) {
              alert("Vyplňte všechny údaje.");
              return;
          }

          let users = JSON.parse(localStorage.getItem("users")) || [];
          if (users.find(u => u.email === newEmail)) {
              alert("Email je již registrovaný");
              return;
          }

          users.push({ email: newEmail, password: newPassword });
          localStorage.setItem("users", JSON.stringify(users));
          alert("Registrace úspěšná! Nyní se můžete přihlásit.");

          registerForm.reset();
      });
  }

  if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
          e.preventDefault();
          let email = document.getElementById("email").value.trim();
          let password = document.getElementById("password").value.trim();

          if (!email || !password) {
              alert("Vyplňte všechny údaje.");
              return;
          }

          let users = JSON.parse(localStorage.getItem("users")) || [];
          let user = users.find(u => u.email === email && u.password === password);

          if (user) {
              alert("Úspěšné přihlášení!");
              window.location.href = "html.html";
          } else {
              alert("Špatné přihlašovací údaje nebo účet neexistuje");
          }
      });
  }
});
