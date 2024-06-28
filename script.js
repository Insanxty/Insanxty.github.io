const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.querySelector('.error');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Replace with your actual username and password validation logic
  const validUsername = 'offon'; // Replace with actual username
  const validPassword = '2006joao2006'; // Replace with actual password

  if (usernameInput.value === validUsername && passwordInput.value === validPassword) {
    // Login successful, redirect to dashboard (replace with actual redirect)
    window.location.href = 'dashboard.html';
  } else {
    errorMessage.style.display = 'block';
  }
});


