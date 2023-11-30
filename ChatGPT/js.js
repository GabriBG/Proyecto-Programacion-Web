const form = document.querySelector('.login-form');
const usernameInput = form.querySelector('#username');
const passwordInput = form.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  // Lógica de autenticación
});
