import { listaTarefas } from "../ListaTarefas"
import { Tarefa } from "../TarefaModelClass"

export function pesquisarTituloTarefa(){
    let pesquisaTitulo = prompt("Pesquise por título : ")
    if(!pesquisaTitulo){
        let tarefaIndex = listaTarefas.findIndex((tarefa) => tarefa.titulo == pesquisaTitulo)
        return listaTarefas[tarefaIndex]
    } else {
        console.log("Digite um título da lista!")
    }
}
export function pesquisarDescricaoTarefa() : void {
    return
}