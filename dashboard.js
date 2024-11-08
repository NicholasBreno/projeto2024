function toggleSidebar() {
    const sidebar = document.getElementById("profile-sidebar");
    sidebar.classList.toggle("active");
}


function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTaskDesc = document.getElementById('task-desc');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (newTaskInput.value) {
        tasks.push({ 
            name: newTaskInput.value, 
            description: newTaskDesc.value, 
            completed: false 
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        newTaskInput.value = '';
        newTaskDesc.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newName = prompt('Editar tarefa:', tasks[index].name);
    const newDescription = prompt('Editar descrição:', tasks[index].description);
    if (newName) {
        tasks[index].name = newName;
        tasks[index].description = newDescription;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';

    // Exibir o título "Suas Tarefas" apenas se houver tarefas
    if (tasks.length > 0) {
        document.querySelector('.task-list h3').style.display = 'block';
    } else {
        document.querySelector('.task-list h3').style.display = 'none';
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'pure-menu-item';
        li.innerHTML = `
            <div class="task-content">
                <span${task.completed ? ' style="text-decoration: line-through;"' : ''}>${task.name}</span>
                <p class="task-description">${task.description}</p>
            </div>
            <div class="task-actions">
                <button class="complete-button" onclick="toggleTask(${index})">
                    ${task.completed ? 'Reverter' : 'Concluir'}
                </button>
                <button class="edit-button" onclick="editTask(${index})">Editar</button>
                <button class="delete-button" onclick="removeTask(${index})">Remover</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName') || 'Usuário';
    document.getElementById('user-name').innerText = userName;
    document.getElementById('user-name-sidebar').innerText = userName;
    renderTasks();
});

const newTaskInput = document.getElementById('new-task');
newTaskInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        addTask();
        event.preventDefault();
    }
});

function logout() {
    localStorage.removeItem('userName');
    window.location.href = 'login.html';
}

// Função para exibir o formulário de edição
function showEditForm() {
    document.getElementById('profile-info').style.display = 'none';
    document.getElementById('edit-profile-form').style.display = 'block';

    // Preenche o formulário com os valores atuais do perfil
    const userName = localStorage.getItem('userName') || 'Usuário';
    const userEmail = localStorage.getItem('userEmail') || 'email@exemplo.com';
    document.getElementById('edit-name').value = userName;
    document.getElementById('edit-email').value = userEmail;
}

// Função para salvar as alterações do perfil
function saveProfile(event) {
    event.preventDefault();
    const newName = document.getElementById('edit-name').value;
    const newEmail = document.getElementById('edit-email').value;

    // Salva as novas informações no localStorage
    localStorage.setItem('userName', newName);
    localStorage.setItem('userEmail', newEmail);

    // Atualiza o nome e o email na interface
    document.getElementById('user-name').innerText = newName;
    document.getElementById('user-name-sidebar').innerText = newName;
    document.getElementById('user-email-sidebar').innerText = newEmail;

    // Volta para a visualização das informações do perfil
    document.getElementById('profile-info').style.display = 'block';
    document.getElementById('edit-profile-form').style.display = 'none';
}

// Função para cancelar a edição
function cancelEdit() {
    document.getElementById('profile-info').style.display = 'block';
    document.getElementById('edit-profile-form').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName') || 'Usuário';
    document.getElementById('user-name').innerText = userName;
    document.getElementById('user-name-sidebar').innerText = userName;
    setSignUpDate();
    renderTasks();
});

function setSignUpDate() {
    let signUpDate = localStorage.getItem('signUpDate');
    if (!signUpDate) {
        const today = new Date();
        signUpDate = today.toLocaleDateString();
        localStorage.setItem('signUpDate', signUpDate);
    }
    document.getElementById('user-signup-date').innerText = signUpDate;
}
