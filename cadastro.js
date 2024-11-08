// Função para lidar com o registro e salvar no localStorage
function handleRegister(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Elementos de input e mensagens de erro
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const birthdate = document.getElementById('birthdate');

    // Limpa mensagens de erro
    clearErrors();

    // Validações de campos obrigatórios
    let hasError = false;
    if (!fullName.value.trim()) {
        showError(fullName, "Nome completo é obrigatório");
        hasError = true;
    }
    if (!email.value.trim()) {
        showError(email, "Email é obrigatório");
        hasError = true;
    } else if (!validateEmail(email.value)) {
        showError(email, "Por favor, insira um email válido");
        hasError = true;
    }
    if (!password.value.trim()) {
        showError(password, "Senha é obrigatória");
        hasError = true;
    } else if (password.value.length < 6) {
        showError(password, "A senha deve ter pelo menos 6 caracteres");
        hasError = true;
    }
    if (!birthdate.value.trim()) {
        showError(birthdate, "Data de nascimento é obrigatória");
        hasError = true;
    }

    // Se houver erro, não prosseguir
    if (hasError) return;

    // Mostra o carregamento enquanto aguarda resposta
    alert("Cadastrando...");

    // Integração com o backend (simulando a chamada aqui)
    setTimeout(() => {
        // Simulando o sucesso do cadastro
        const userData = {
            fullName: fullName.value.trim(),
            email: email.value.trim(),
            password: password.value,
            birthdate: birthdate.value,
        };

        // Salva o novo usuário no localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        // Exibe a mensagem de sucesso usando o alerta
        alert("Cadastro realizado com sucesso!");

        // Redireciona para a página de login após o alerta
        window.location.href = 'login.html';
    }, 1500); // Simulando o tempo de resposta do servidor (1.5 segundos)
}

// Função para exibir mensagens de erro abaixo de cada campo
function showError(input, message) {
    const error = document.createElement("span");
    error.className = "error-message";
    error.innerText = message;
    input.parentElement.appendChild(error);
}

// Função para limpar mensagens de erro anteriores
function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
}

// Função para validação de email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
