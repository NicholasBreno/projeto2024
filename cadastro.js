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