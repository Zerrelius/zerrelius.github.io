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
let tasks = []; // [Objects]
// Name of Task -> given from Form
const taskText = '';
// Object for Task Status
const taskStatus = false;

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

    console.log("Formular submitted!");
    // Object of a single Task
    var date = Date.now();
    const task = {
        status: false,
        text: newTask,
        id: date
    };

    tasks.push(task);
    // Task added to ul
    renderToDos();
    // Local Storage Save
    saveTodos();
    // Clear Variable newTask
    newTask = '';
    // Clear Form Input Fields
    var allInputs = formular.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
});

// Function to add new Task to ul List
function renderToDos() {
    list.innerHTML = '';
    
    // Add new Lines to List
    tasks.forEach((task) => {

        const checkBox = document.createElement('input');
        checkBox.classList.add('check-box');
        checkBox.setAttribute('aria-label', 'Aufgabe erledigen');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.checked = task.completed;
        checkBox.addEventListener('change', () => toggleTaskCompletion(task.id));

        const span = document.createElement('span');
        span.classList.add('task-name');
        span.innerText = task.id + ' ' + task.text;
        console.log(span);

        const button = document.createElement('button');
        button.classList.add('delete-button');
        button.innerText = "Löschen";
        button.addEventListener("click", () => {
            tasks = tasks.filter((t) => t.id !== task.id);
            renderToDos();
            saveTodos();
        });

        const li = document.createElement('li');
        li.classList.add('list-item');
        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(button);

        list.appendChild(li);
    });
};

function toggleTaskCompletion(taskId) {
    const task = tasks.find(task => task.id === taskId);
    task.completed = !task.completed;
    renderToDos();
    saveTodos();
}

function saveTodos() {
    // Early Return
    if (!tasks) {
        console.log("Array Tasks ist leer");
        return false;
    }
    // Setzt die Datne in den Local Storage und speichert sie in Form eines Strings
    localStorage.setItem("todos", JSON.stringify(tasks));
    console.log("Todos erfolgreich im Local Storage gespeichert");
};

function loadTodos() {
    // Holt die Daten aus dem Local Storage
    var json = localStorage.getItem("todos");
    console.log(json);
    // Speichert die geholten Daten in einem Json Format
    var todos = JSON.parse(json);
    if (todos === "") {
        tasks = [];
    } else {
        tasks = todos;
    };
    renderToDos();
    console.log("Local Storage Daten:" + tasks);
};

// Wird Ausgeführt beim Laden der Seite:
loadTodos();
renderToDos();