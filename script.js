const taskInput = document.getElementById("taskinput");
const addTaskBtn = document.getElementById("addtaskbtn");
const taskList = document.getElementById("tasklist");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        taskInput.focus();
        return;
    }

    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", `Mark ${taskText} as complete`);

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    checkbox.addEventListener("change", function () {
        taskName.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.append(checkbox, taskName, deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
