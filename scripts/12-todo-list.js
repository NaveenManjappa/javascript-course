const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';
    todoList.forEach((todoObj,index) => {
      const html = `
      <div>${todoObj.name}</div>
      <div>${todoObj.dueDate}</div>
      <button class="delete-todo-btn" onclick="
        todoList.splice(${index},1);
        renderTodoList();
        ">Delete</button>
      `;
      todoListHtml += html;
    })
    

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;
}

function addTodo() {
  const inputEl = document.querySelector('.js-input');

  const name = inputEl.value;
  const dueDate = document.querySelector('.js-due-date-input').value;

  todoList.push({name,dueDate}); //shorthand for object initialization
  console.log(todoList);
  inputEl.value = '';

  renderTodoList();
}