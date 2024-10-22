const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';
    
    todoList.forEach((todoObj,index) => {
      const html = `
      <div>${todoObj.name}</div>
      <div>${todoObj.dueDate}</div>
      <button class="js-delete-todo-btn delete-todo-btn">Delete</button>
      `;
      todoListHtml += html;
    });
    

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;

    document.querySelectorAll('.js-delete-todo-btn')
        .forEach((btnEl,index) => {
          btnEl.addEventListener('click',() => {
            todoList.splice(index,1);
            renderTodoList();
          });
        });
}

document.querySelector('.js-add-todo-btn')
    .addEventListener('click',() => {
      addTodo();
    });
function addTodo() {
  const inputEl = document.querySelector('.js-input');

  const name = inputEl.value;
  const dueDate = document.querySelector('.js-due-date-input').value;

  todoList.push({name,dueDate}); //shorthand for object initialization
  console.log(todoList);
  inputEl.value = '';

  renderTodoList();
}