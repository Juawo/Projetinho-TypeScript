import { listaTarefas } from "../ListaTarefas"
import { Tarefa } from "../TarefaModelClass"

export function pesquisarTituloTarefa(retorno = false){
    let pesquisaTitulo = prompt("Pesquise por título : ")
    if(pesquisaTitulo && retorno === false){
        let tarefaIndex = listaTarefas.findIndex((tarefa) => tarefa.titulo == pesquisaTitulo)
        return listaTarefas[tarefaIndex]
    } else if (pesquisaTitulo && retorno){
        let tarefaIndex = listaTarefas.findIndex((tarefa) => tarefa.titulo == pesquisaTitulo)
        listaTarefas[tarefaIndex].exibirTarefa()
    } else {
        console.log("Digite um título da lista!")
    }
}
export function pesquisarDescricaoTarefa(){
    let pesquisaDescricao = String(prompt("Pesquise por Descricao : "))
    if(pesquisaDescricao?.length >= 3){
        for(let tarefa of listaTarefas){
            if(tarefa.descricao?.includes(pesquisaDescricao)){
                tarefa.exibirTarefa()
                break
            } if(tarefa === listaTarefas[listaTarefas.length - 1] && tarefa.descricao?.includes(pesquisaDescricao) === false){
                console.log("Tarefa não encontrada ")   
              }
        }
    }
}