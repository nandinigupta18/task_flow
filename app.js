
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
  const taskText = document.createElement("span");
  const status = document.createElement("span");
  const toggleButton = document.createElement("button");

  taskText.textContent = title;
  status.textContent = "Pending";
  status.className = "task-status";

  toggleButton.textContent = "Mark Complete";
  toggleButton.type = "button";

  toggleButton.addEventListener("click", function () {
    const isComplete = status.textContent === "Complete";

    status.textContent = isComplete ? "Pending" : "Complete";
    toggleButton.textContent = isComplete
      ? "Mark Complete"
      : "Mark Pending";

    taskText.style.textDecoration = isComplete
      ? "none"
      : "line-through";
  });

  listItem.append(taskText, document.createTextNode(" — "), status);
  listItem.appendChild(toggleButton);
  taskList.appendChild(listItem);

  taskInput.value = "";
  message.textContent = "";
  taskInput.focus();
});