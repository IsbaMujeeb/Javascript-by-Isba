const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(function(li) {
        tasks.push({
            text: li.childNodes[0].textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("myTodoList", JSON.stringify(tasks));
}

console.log(taskInput);
console.log(addBtn);
console.log(taskList);
addBtn.addEventListener("click", function(){
    const task= taskInput.value
    console.log(task);

    if(task==""){
        return;
    }
    const li= document.createElement("li");
    li.textContent= task;
    
li.addEventListener("click", function () {
    li.classList.toggle("completed");
    saveTasks();
});

     const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
    li.remove();
    saveTasks();
});
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();

})
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
function loadTasks() {
    const saved = localStorage.getItem("myTodoList");
    if (saved) {
        const tasks = JSON.parse(saved);
        tasks.forEach(function(item) {

            
            taskInput.value = item.text;
            addBtn.click();
            
            if (item.completed) {
                taskList.lastElementChild.classList.add("completed");
            }
        });
        saveTasks();
    }
}

loadTasks();

