// selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// event listener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(event) {
  // prevent default
  event.preventDefault();

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

function deleteCheck(event) {
  const item = event.target;
  const todo = item.parentElement;

  //delete todo
  if (item.classList[0] === "delete-btn") {
    // animation
    todo.classList.add("fall");
    // remove
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  // check mark
  if (item.classList[0] === "completed-btn") {
    todo.classList.toggle("completed");
  }
}
