const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");

if (JSON.parse(localStorage.getItem("lugaflowSession") || "null")?.email) {
  window.location.replace("index.html");
}

function showMessage(message) {
  loginMessage.textContent = message;
}

showMessage("Enter your email and password to continue.");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginForm.email.value.trim();
  const password = loginForm.password.value;
  if (!email || password.length < 6) {
    showMessage("Use a valid email and a password with at least 6 characters.");
    return;
  }
  localStorage.setItem("lugaflowSession", JSON.stringify({ email, signedInAt: Date.now() }));
  window.location.replace("index.html");
});

