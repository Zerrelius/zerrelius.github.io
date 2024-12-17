/* Main Script for To-Do-App */
// form
const formular = document.getElementById("todo-form");
// Eingabe Feld
const input = document.getElementById("todo-input");
// Aufgabe hinzufügen button
const submitButton = document.getElementById("todo-button");
// Ul Liste
const list = document.getElementById("todo-list");

// Array for Tasks
const tasks = []; // [Objects]
// Name of Task -> given from Form
const taskText = '';
// Object for Task Status
const taskStatus = false;
// ID for Task
//const date = '';

/*
    Main Code Block
                    */

// Formular Funktion
formular.addEventListener("submit", function submitForm(e) {
    e.preventDefault();
    var newTask = input.value;
    newTask = newTask.trim();
    console.log(newTask);

    // Early Return
    if (!newTask) {
        alert('Task cannot be empty');
        return false;
    }

    // Task added to ul
    addNewTask(newTask);
    console.log("Formular submitted!");
    // Clear Variable newTask
    newTask = '';
    // Clear Form Input Fields
    var allInputs = formular.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
});

// Function to add new Task to ul List
function addNewTask(newTaskFromForm) {
    const taskText = newTaskFromForm;
    // Object of a single Task
    var date = Date.now();
    const task = {
        status: false,
        text: taskText,
        date: date
    };

    tasks.push(task);

    tasks.forEach((task) => {
        const checkBox = document.createElement('input');
        checkBox.classList.add('check-box');
        checkBox.setAttribute('aria-label', 'Aufgabe erledigen');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.checked = task.status;

        const span = document.createElement('span');
        span.classList.add('task-name');
        span.innerText = task.date + ' ' + task.text;

        const button = document.createElement('button');
        button.classList.add('delete-button');
        button.innerText = "Löschen";
        

        const li = document.createElement('li');
        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(button);

        list.appendChild(li);

        // Function of Delete Button
        button.addEventListener("click", () => {
            const actualLi = button.parentElement;
            list.removeChild(actualLi);
        });
    });
};
