import { listaTarefas } from "../ListaTarefas"
import { filtrarPrioridade, filtrarStatus, filtrarVencimento } from "./funcoesFiltrar"

export function listarTarefas(lista = listaTarefas) : void{
    console.log("---- Lista de Tarefas ----")
    for(let tarefa of lista){
        tarefa.exibirTarefa()
    }
}
export function resumoTarefas() : void{
    if(listaTarefas.length > 0){
        let pendentes = filtrarStatus(false,true,false)
        let concluidas = filtrarStatus(false,false,true)

        console.log(`
    --- Resumo das Tarefas ---
        Próxima tarefa a concluir : ${listaTarefas[0].titulo}
        Quantidade de tarefas pendentes : ${pendentes?.length}
        Quantidade de tarefas concluidas : ${concluidas?.length}
        Quantidade total de tarefas : ${listaTarefas.length}
    `)} else {
        console.log(`
    --- Resumo das Tarefas ---
        Próxima tarefa a concluir : Não há tarefas!!
        Quantidade de tarefas pendentes : 
        Quantidade de tarefas concluidas : 
        Quantidade total de tarefas : ${listaTarefas.length}
    `)
    }
}

export function ordernarVencimento(){
    listaTarefas.sort((tarefa1,tarefa2) => tarefa2.vencimento.getTime() - tarefa1.vencimento.getTime())
    console.log("Lista ordernada por Vencimento!")
}

export function ordernarPrioridade(){
    listaTarefas.sort((tarefa1, tarefa2) => {
        const prioridades = ["Baixa","Média","Alta"]
        return prioridades.indexOf(tarefa2.prioridade) - prioridades.indexOf(tarefa1.prioridade)
    })
    console.log("Lista ordernada por Prioridade")
}

export function ordernarDataCreate(){
    listaTarefas.sort((tarefa1,tarefa2) => tarefa2.dataCreate.getTime() - tarefa1.dataCreate.getTime())
    console.log("Lista ordernada por Data de Criação das Tarefas!")
}