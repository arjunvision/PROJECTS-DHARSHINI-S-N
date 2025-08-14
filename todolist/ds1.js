// Select elements
const addBtn = document.querySelector('.add-btn');
const addTaskForm = document.querySelector('.add-task-form');
const addTaskBtn = document.querySelector('.add-task-btn');
const tasksContainer = document.querySelector('.tasks-container');
const inputs = addTaskForm.querySelectorAll('input');

// Toggle the visibility of the add-task form when "+" button is clicked
addBtn.addEventListener('click', () => {
    if (addTaskForm.style.display === 'block') {
        addTaskForm.style.display = 'none';
    } else {
        addTaskForm.style.display = 'block';
    }
});

// Add a new task when "Add" button is clicked
addTaskBtn.addEventListener('click', () => {
    const header = inputs[0].value.trim();
    const desc = inputs[1].value.trim();

    if (header && desc) {
        const newTask = document.createElement('div');
        newTask.classList.add('task-box');
        newTask.innerHTML = `
            <h2>${header}</h2>
            <p>${desc}</p>
            <button class="delete-btn">Delete</button>
        `;
        tasksContainer.appendChild(newTask);

        // Clear the input fields
        inputs[0].value = '';
        inputs[1].value = '';
    } else {
        alert("Please enter both task header and description.");
    }
});

// Delete a task when "Delete" button is clicked
tasksContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});
