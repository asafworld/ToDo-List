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
  liTarefa.classList = 'white';
  liTarefa.innerHTML = input.value;
  taskList.appendChild(liTarefa);
  input.value = '';

  function addRemoveStyle(event){
      let lines = document.querySelectorAll('li');
      for (let i = 0; i < lines.length; i+= 1){
        lines[i].style.backgroundColor = 'white';
        event.target.style.backgroundColor = 'gray';
      }
  }
  liTarefa.addEventListener('click', addRemoveStyle);

  liTarefa.addEventListener('dblclick', function(e){
    // let lines = document.querySelectorAll('li');
    // for (let i = 0; i < lines.length; i+= 1){
        if (e.target.className === 'white completed'){
            e.target.classList.remove('completed');
          } else {
            e.target.classList.add('completed');
          }
    // }
  })
})
