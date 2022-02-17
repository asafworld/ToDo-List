const main = document.getElementById('main');
const input = document.getElementById('texto-tarefa');
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
main.appendChild(taskList);

const buttonCriaTarefa = document.createElement('button');
buttonCriaTarefa.id = 'criar-tarefa';
buttonCriaTarefa.innerHTML = 'Cria Tarefa';
main.appendChild(buttonCriaTarefa);

function addRemoveStyle(event){
    let lines = document.querySelectorAll('li');
    for (let i = 0; i < lines.length; i += 1) {
      lines[i].style.backgroundColor = 'white';
      event.target.style.backgroundColor = 'gray';
    }
}

function addRemoveLineThrough(e){
    if (e.target.className === 'tarefa completed') {
        e.target.classList.remove('completed');
      } else {
        e.target.classList.add('completed');
      }
}

buttonCriaTarefa.addEventListener('click', function(event) {
  const liTarefa = document.createElement('li');
  liTarefa.innerHTML = input.value;
  liTarefa.classList = 'tarefa';
  taskList.appendChild(liTarefa);
  input.value = '';
  liTarefa.addEventListener('click', addRemoveStyle);
  liTarefa.addEventListener('dblclick', addRemoveLineThrough);
  saveButtonFunction
})

let saveButton = document.createElement('button');
saveButton.id = 'salvar-tarefas';
saveButton.innerHTML = "Salvar";
main.appendChild(saveButton);


  saveButton.addEventListener('click', saveButtonFunction);
  function saveButtonFunction(){
    const olSaved = document.getElementsByTagName('ol')[0];
    window.localStorage.setItem('tarefas', olSaved.innerHTML);
  }
  
  window.onload = function(){
    const myStorageSaved = localStorage.getItem('tarefas');
    const olSaved = document.getElementsByTagName('ol')[0];
    olSaved.innerHTML = myStorageSaved;
    olSaved.addEventListener('click', addRemoveStyle);
  }

const deleteButton = document.createElement('button');
deleteButton.id = 'apaga-tudo';
deleteButton.innerHTML = 'Apagar tudo'
main.appendChild(deleteButton);

function deleteItAll(){
  const lines = document.querySelectorAll('li');
  for (let i = 0; i < lines.length; i +=1) {
      lines[i].remove();
  }
}
deleteItAll

deleteButton.addEventListener('click', deleteItAll);

const deleteButtonFinalizados = document.createElement('button');
deleteButtonFinalizados.id = 'remover-finalizados';
deleteButtonFinalizados.innerHTML = 'Apagar finalizados';
main.appendChild(deleteButtonFinalizados);

function deleteFinalizados(){
    const finalizados = document.querySelectorAll('.completed');
    for (let i = 0; i < finalizados.length; i += 1){
      finalizados[i].remove();
    }
}

deleteButtonFinalizados.addEventListener('click', deleteFinalizados);
