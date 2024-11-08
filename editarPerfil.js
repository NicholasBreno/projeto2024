function handleUptadeProfile() {

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;

    if (!fullName || !email || !password) {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    //Simulação de edição apenas com o Front.
        console.log({
            fullName,
            email,
            password,
            birthdate
        });
    

        alert('Perfil atualizado (simulação de sucesso)!');
        window.location.href = 'dashboard.html';
    }

    function handleUpdateProfile() {
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const birthdate = document.getElementById('birthdate').value;
    
        if (!fullName || !email || !password) {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }
    
        // Simula a atualização do perfil no localStorage
        localStorage.setItem('user', JSON.stringify({
            fullName,
            email,
            password,
            birthdate
        }));
    
        alert('Perfil atualizado com sucesso!');
        window.location.href = 'dashboard.html'; // Redireciona para o painel
    }
    

    //Descomente a parte para integração ao back.
    /*    fetch('/api/editar-perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName,
            email,
            password,
            birthdate
        })
    })
    .then(response => response.json())
    .then(data => {
        // Tratar a resposta do servidor
        if (data.success) {
            alert('Perfil atualizado com sucesso!');
            // Redireciona para a página de perfil ou painel
            window.location.href = 'dashboard.html';
        } else {
            alert('Erro ao atualizar perfil. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        alert('Ocorreu um erro. Tente novamente.');
    });
}*/
