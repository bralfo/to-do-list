const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()

}


function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}" >
        <img  src="./imagens/checked.png" alt="checked" onclick="concluirTarefa(${posicao})" />
        <p>${item.tarefa}</p>
        <img src="./imagens/trash.png" alt="lata-de-lixo" onclick="deletaritem(${posicao})" />
    </li> 

        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()

}

function deletaritem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()

    
}

function recarregarTarefa(){
    const tarefasDoLocalStorage = localStorage.getItem('Lista')

    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()

}

recarregarTarefa()

button.addEventListener('click', adicionarNovaTarefa)
