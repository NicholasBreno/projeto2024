
//Tratando as funcionalidades das tarefas
function toggleSidebar() {
    const sidebar = document.getElementById("profile-sidebar");
    sidebar.classList.toggle("active");
}


function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (newTaskInput.value) {
        tasks.push({ name: newTaskInput.value, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        newTaskInput.value = '';
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
    if (newName) {
        tasks[index].name = newName;
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

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'pure-menu-item';
        li.innerHTML = `
            <span${task.completed ? ' style="text-decoration: line-through;"' : ''}>${task.name}</span>
            <div class="task-actions">
                <button class="pure-button pure-button-primary" onclick="toggleTask(${index})">
                    ${task.completed ? 'Reverter' : 'Concluir'}
                </button>
                <button class="pure-button" onclick="editTask(${index})">Editar</button>
                <button class="pure-button pure-button-error" onclick="removeTask(${index})">Remover</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

//Exibindo o nome do usuário
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

//Função do botão de sair
function logout() {
    localStorage.removeItem('userName');
    window.location.href = 'login.html';
}
