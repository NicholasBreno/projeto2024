function handleLogin() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;

    // Simulação de resposta do servidor
    const users = [
        {email: 'joao.silva@email.com', password: 'senha123', name: 'João Silva'},
        {email: 'giorgian.arrasca@email.com', password: 'senha123', name: 'Arrascaeta'},
    ]

    const user = users.find(u => u.email === emailInput && u.password === passwordInput);

    if (user) {
        localStorage.setItem('userName', user.name); // Armazena o nome

        if(rememberMe) {
            localStorage.setItem('userEmail', emailInput);
            localStorage.setItem('userPassword', passwordInput);
        } else {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPassword');
        }
        
        window.location.href = 'dashboard.html';
    } else {
        alert('Dados incorretos. Tente novamente');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rememberedEmail = localStorage.getItem('userEmail');
    const rememberedPassword = localStorage.getItem('userPassword');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        document.getElementById('password').value = rememberedPassword;
        document.getElementById('remember').checked = true;
    }
    
    // Obtém o userName do localStorage, ou define como 'Usuário' se estiver vazio
    const userName = localStorage.getItem('userName') || 'Usuário';

    // Define o texto para os elementos que exibirão o nome do usuário
    document.getElementById('user-name').innerText = userName;
    document.getElementById('user-name-sidebar').innerText = userName;

    // Chama uma função para renderizar as tarefas, caso exista essa função
    renderTasks();
});

//Retirar a simulação e inserir o fetch após conclusão do back end do login:
    // Envia a requisição para o backend
//    fetch('https://api.seusite.com/login', {  // Substitua pelo URL da sua API
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({
//            email: emailInput,
//            password: passwordInput,
//        }),
//    })
//    .then(response => response.json())
//    .then(data => {
//        if (data.success) {
//            // Supondo que o backend retorne o nome do usuário e um token de autenticação
//            localStorage.setItem('userName', data.user.name);  // Armazena o nome do usuário

//            if (rememberMe) {
//                localStorage.setItem('userEmail', emailInput);
                // ATENÇÃO: Não armazene senhas em texto simples em produção!
//                localStorage.setItem('userPassword', passwordInput);
//            } else {
//                localStorage.removeItem('userEmail');
//                localStorage.removeItem('userPassword');
//            }
//
//            // Se o login for bem-sucedido, armazena o token JWT e redireciona para o dashboard
//            localStorage.setItem('authToken', data.token);

//            // Redireciona para o dashboard
//            window.location.href = 'dashboard.html';
//       } else {
//            // Se a resposta for erro
//            alert('E-mail ou senha incorretos. Tente novamente.');
//        }
//    })
//    .catch(error => {
//        console.error('Erro no login:', error);
//        alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
//    });
//}