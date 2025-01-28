const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskListElement = document.getElementById('task-list');
let tasks = [];

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = { id: Date.now(), text: taskText };
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
});

function renderTasks() {
    taskListElement.innerHTML = tasks.map(task => `
        <li class="task-item" data-id="${task.id}">
            <span>${task.text}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        </li>
    `).join('');
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}