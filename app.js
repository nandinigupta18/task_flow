
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const message = document.getElementById("message");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (title === "") {
    message.textContent = "Please enter a task title.";
    taskInput.focus();
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = title;

  taskList.appendChild(listItem);
  taskInput.value = "";
  message.textContent = "";
  taskInput.focus();
});