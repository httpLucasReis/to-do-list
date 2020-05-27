var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Responder a atividade de mary'
];

function renderTodos(){
    for(todo of todos) {
        var todoElement = document.createElement('li');
        /*document.createTextNode() vai criar um elemento e retorná-lo para que você o utilize da forma que quiser.*/
        var todoText = document.createTextNode(todo);
        console.log(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();
