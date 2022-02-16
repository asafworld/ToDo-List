const main = document.getElementById('main');
const input = document.getElementById('texto-tarefa');

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
main.appendChild(taskList);

const buttonCriaTarefa = document.createElement('button');
buttonCriaTarefa.id = 'criar-tarefa';
buttonCriaTarefa.innerHTML = 'Cria Tarefa';
main.appendChild(buttonCriaTarefa);

buttonCriaTarefa.addEventListener('click', function(event) {
  const liTarefa = document.createElement('li');
  liTarefa.innerHTML = input.value;
  taskList.appendChild(liTarefa);
  input.value = '';
})

let liTarefas = document.getElementsByTagName('li');

function addBackgroundColorLi() {
  for (let i = 0; i < liTarefas.length; i += 1){
    liTarefas[i].addEventListener('click', function(event) {
      liTarefas[i].classList.add('liStyle');
    });
  };
};
addBackgroundColorLi();
