// selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// event listener
document.addEventListener("DOMContentLoaded", getTodos);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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
  if (todoInput.value.trim().length === 0) {
    return;
  }
  // console.log(todoInput)
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // add todo to localstoreage
  saveLocalTodos(todoInput.value);

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
    removeLocalTodos(todo);

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

function filterTodo(event) {
  const todos = todoList.childNodes;

  todos.forEach((todo) => {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  // check have todo??
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  // check have todo??
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    // create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todo;

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
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  
  // get index
  const todoIndex = todo.children[0].innerText;

  // delete array item
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
