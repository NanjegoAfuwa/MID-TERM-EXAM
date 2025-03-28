function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return; // Ignore empty inputs

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = ""; // Clear input field
}

function removeTask(button) {
    button.parentElement.remove();
}