const main = document.getElementById('main');
const input = document.getElementById('texto-tarefa');

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
main.appendChild(taskList);

let inputValue = input.value;

const buttonCriaTarefa = document.createElement('button');
buttonCriaTarefa.id = 'criar-tarefa';
buttonCriaTarefa.innerHTML = 'Cria Tarefa';
main.appendChild(buttonCriaTarefa);

buttonCriaTarefa.addEventListener('click', function(event){
    let liTarefa = document.createElement('li');
    liTarefa.id = 'lista-tarefas';
    liTarefa.innerHTML = input.value;
    taskList.appendChild(liTarefa);
    input.value = '';
})


