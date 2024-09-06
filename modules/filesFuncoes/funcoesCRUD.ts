import { listaTarefas } from "../ListaTarefas"
import { Tarefa } from "../TarefaModelClass"
import { promptPrioridade, promptTitulo, promptVencimento } from "../tarefaPrompt"
import { listarTarefas } from "./funcoesExibir"
import { pesquisarTituloTarefa } from "./funcoesPesquisar"

export let id_count = 0

export function adicionarTarefa(tarefa = new Tarefa()){
    listaTarefas.push(tarefa)
    id_count++
}
export function editarTarefa(){
    let tarefaEditar = pesquisarTituloTarefa(false)
    let decisao : any
    if(tarefaEditar){
        for(let propiedade in tarefaEditar){
            if(propiedade != "dataCreate" && propiedade != "id"){
                decisao = String(prompt(`Deseja alterar ${propiedade} ?\n 1 - Sim\n 2 - Não \nDigite : `))
            }
            if(decisao === "1"){
                if(propiedade === "titulo"){
                    tarefaEditar[propiedade] = promptTitulo()
                } else if(propiedade === "descricao"){
                    tarefaEditar[propiedade] = prompt(`Digite a nova descrição :`)
                } else if(propiedade === "vencimento"){
                    tarefaEditar[propiedade] = promptVencimento()
                } else if(propiedade === "prioridade"){
                    tarefaEditar[propiedade] = promptPrioridade()
                } else if(propiedade === "status"){
                    tarefaEditar[propiedade] = !propiedade
                }
            } else if(propiedade != "dataCreate" && propiedade != "id"){
                console.log(`${propiedade} não alterada!`)
            }
        }
    }
}
export function removerTarefa(){
   let tarefaExcluir = pesquisarTituloTarefa(false)
   let index = listaTarefas.findIndex((tarefa) => tarefa.titulo === tarefaExcluir?.titulo)
   let decisao = prompt(" Deseja exlcuir ?\n 1 - Sim\n 2 - Não\n Digite : ")
   if(decisao === "1"){
    listaTarefas.splice(index,1)
   } else{
    console.log("Tarefa não excluida.")
   }
}

export function marcarTarefaConcluida(){
    let tarefa = pesquisarTituloTarefa(false)
    tarefa?.marcarTarefa()
}