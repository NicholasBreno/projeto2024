function handleRegister() {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;


if (!fullName || !email || !password || !birthdate) {
    alert("Por favor, preencha todos os campos obrigatórios!!!");
    return;
}

const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(email)) {
    alert("Por favor, insira um email válido!!!")
    return;
}

alert("Cadastro realizado com sucesso!!!")

}

//Retirar para integração ao back end.

/*fetch('https://api.seusite.com/cadastro', {  // Substitua pelo URL da sua API de cadastro
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullName: fullName,
            email: email,
            password: password,
            birthdate: birthdate
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Supondo que o backend retorne um sucesso
            alert('Cadastro realizado com sucesso!');
            // Redireciona para a página de login ou dashboard, conforme a lógica do seu sistema
            window.location.href = 'login.html';  // Ou outra página após o cadastro
        } else {
            alert('Erro ao cadastrar. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro no cadastro:', error);
        alert('Erro ao tentar se cadastrar. Tente novamente mais tarde.');
    });
    

    // Fim da integração com o backend
}
*/