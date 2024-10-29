function handleLogin() {
    const usernameInput = document.getElementById('username').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Simulação de verificação de login. Adapte conforme necessário.
    if (usernameInput && emailInput && passwordInput) {
        localStorage.setItem('userName', usernameInput);
        window.location.href = 'dashboard.html'; // ajuste a URL conforme necessário
    }
}
