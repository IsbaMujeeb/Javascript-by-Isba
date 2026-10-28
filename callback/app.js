
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function showmsg(message) {
    alert(message);
}

function addTask(callback) {
    const task = taskInput.value;

    if (task.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    const tasktext = document.createElement("span");

    tasktext.textContent = task + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", function () {
        tasktext.style.textDecoration = "line-through";
        callback("Task completed!");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        callback("Task deleted!");
    });

    li.appendChild(tasktext);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);

    taskList.appendChild(li);
    taskInput.value = "";

    callback("Task added successfully!");
}

addBtn.addEventListener("click", function () {
    addTask(showmsg);
});
