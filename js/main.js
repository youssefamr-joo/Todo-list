const inputUser = document.getElementById("taskInput");
const myForm = document.getElementById("todo-list");

let userTasks = [];

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInput();
});

// check
const checkInput = function () {
  const myError = document.getElementById("error");
  if (inputUser.value.trim() == "") {
    myError.classList.remove("d-none");
    myError.innerHTML = "Task cannot be empty! Please enter a task.";
    return;
  } else {
    myError.classList.add("d-none");
    addTask();
  }
};

// add task
const addTask = function () {
  const Task = inputUser.value;
  userTasks.push(Task);
  displayData();
  inputUser.value = "";
};

// display
const displayData = function () {
  let cartona = ``;
  for (i = 0; i < userTasks.length; i++) {
    cartona += `
    <tr>
      <td> ${i + 1} </td>
      <td>${userTasks[i]}</td>
      <td>
        <button class="btn btn-danger me-3" onclick="deleteTask(${i})">Delete</button>
        <button class="btn btn-success" onclick="markTask(${i})">Done</button>
      </td>
    </tr>
    `;
  }
  document.getElementById("taskList").innerHTML = cartona;
};

// delete task
const deleteTask = function (index) {
  userTasks.splice(index, 1);
  displayData();
};

// mark task
const markTask = function (index) {
  const task = userTasks[index];
  userTasks[index] = `<strike>${task}</strike>`;
  displayData();
};
