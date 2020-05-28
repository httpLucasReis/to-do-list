var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar Javascript',
];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos) {
        var todoElement = document.createElement('li');
        /*document.createTextNode() vai criar um elemento e retorná-lo para que você o utilize da forma que quiser.*/
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.addEventListener('click',addTodo);