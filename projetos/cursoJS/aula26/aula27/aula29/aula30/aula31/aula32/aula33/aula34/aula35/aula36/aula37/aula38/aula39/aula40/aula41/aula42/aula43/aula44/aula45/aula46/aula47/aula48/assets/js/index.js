const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('tarefas');

function criali() {
const li = document.createElement('li');
return li;
}

inputTarefa.addEventListener('keypress',   function(e) {
if (e.keycode===13) {
if (!inputTarefa.value) return;
criaTarefa(inputTarefa.value);
}
});

function limpaInput() {
inputTarefa.value = '';
inputTarefa.focus();
}

function criaBotaoApagar(li) {
li.innerText+= '';
const botaoApagar = document.createElement('button');
botaoApagar.innertext = 'Apagar'
li.appendChild(botaoApagar);

}

function criaTarefa(textoinput) {
const li= criaLi();
li.innerText= textoInput;
tarefas.appendChild(li);
limpaInput();
criaBotaoApagar(li);
salvarTarefas();
}
btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
 criaTarefa(inputTarefa.value);
});
document.addEventListener('click', function(e) {
const el = e.target;
if (el.classList.contains('Apagar')); {
el.parentElement.remove();
salvarTarefas();
} 
}); 

function salvarTarefas(); {
const liTarefas = tarefas.querySelector('li');
const listaDeTarefas= [];

for (let tarefa of listaDeTarefas); {
const tarefaTexto = tarefa.innerText;
tarefaTexto = tarefaTexto.replace('Apagar', ''). trim();
linhasDeTarefas.push(tarefaTexto);
}
const tarefasJSON =  JSON.stringify(listaDeTarefas);
localStorage.setItem('tarefas');
}

function adicionaTarefasSalvas(); {
const tarefas = localStorage.getItem('tarefas');
 const listaDeTarefas = JSON.parse(tarefas);
for(let tarefa of  listaDeTarefas) {
  criaTarefa(tarefas)
}

} 
adicionarTarefasSalvas();