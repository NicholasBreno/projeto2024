function handleLogin() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Simulação de resposta do servidor
    const validEmail = "joao.silva@email.com"; 
    const validPassword = "senha123"; 

    if (emailInput === validEmail && passwordInput === validPassword) {
        const response = {
            success: true,
            user: {
                name: "João Silva" 
            }
        };

        if (response.success) {
            localStorage.setItem('userName', response.user.name); // Armazena o nome
            window.location.href = 'dashboard.html';
        }
    } else {
        alert('Login falhou. Verifique seu email e senha.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Obtém o userName do localStorage, ou define como 'Usuário' se estiver vazio
    const userName = localStorage.getItem('userName') || 'Usuário';

    // Define o texto para os elementos que exibirão o nome do usuário
    document.getElementById('user-name').innerText = userName;
    document.getElementById('user-name-sidebar').innerText = userName;

    // Chama uma função para renderizar as tarefas, caso exista essa função
    renderTasks();
});