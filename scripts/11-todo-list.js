const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for(let i = 0; i < todoList.length; i++){
      const todo = todoList[i];
      const html = `<p>${todo}</p>`;
      todoListHtml += html;
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;
}

function addTodo() {
  const inputEl = document.querySelector('.js-input');

  const name = inputEl.value;

  todoList.push(name); 
  console.log(todoList);
  inputEl.value = '';

  renderTodoList();
}