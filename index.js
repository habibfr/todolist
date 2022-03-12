// selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// event listener
todoBtn.addEventListener("click", addTodo);

//functions

function addTodo(event) {
  // prevent default
  event.preventDefault();
  // console.log("add")

  // create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create li
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;

  // console.log(todoInput)
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // chcek btn
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<li class="fas fa-check"></li>';
  completedBtn.classList.add("completed-btn");
  todoDiv.appendChild(completedBtn);

  // delete
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<li class="fas fa-trash"></li>';
  deleteBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteBtn);

  // append todoList
  todoList.appendChild(todoDiv);

  //clear todoInput
  todoInput.value = "";
}
