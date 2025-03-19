// Funcionalidad para la sección de Tareas
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function renderTasks() {
    const tasks = loadTasks();
    const tableBody = document.querySelector('#taskTable tbody');
    tableBody.innerHTML = '';

    tasks.forEach((task, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${task.name}</td>
            <td>${task.hours}</td>
            <td>${task.description}</td>
            <td>${task.cost}</td>
            <td>
                <button onclick="deleteTask(${index})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(newRow);
    });
}

function addTask(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskHours = document.getElementById('taskHours').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskCost = document