import { listaTarefas } from "../ListaTarefas"
import { Tarefa } from "../TarefaModelClass"

export let id_count = 0

export function adicionarTarefa(tarefa = new Tarefa()){
    listaTarefas.push(tarefa)
    id_count++
}
export function editarTarefa(){
    return
}
export function removerTarefa(){
    return
}