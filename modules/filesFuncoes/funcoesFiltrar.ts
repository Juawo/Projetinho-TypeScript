import { listaTarefas } from "../ListaTarefas";
import { Tarefa } from "../TarefaModelClass";
import { listarTarefas } from "./funcoesExibir";

export function filtrarStatus(retorno = false){
    let opcao = String(prompt("\n 1 - Filtrar atividades Pendentes\n 2 - Filtrar tarefas Concluídas\n Escolha : "))
    if(opcao == "1"){
        let listaPendete = listaTarefas.filter((tarefa) => tarefa.status === false)
        retorno && listarTarefas(listaPendete)
    } else if(opcao == "2"){
        let listaConcluida = listaTarefas.filter((tarefa) => tarefa.status === true)
        retorno && listarTarefas(listaConcluida)
    } else {
        console.log("\n Opção inválida, tente novamente!")
    }
}

export function filtrarPrioridade(retorno = false){
    let opcao = String(prompt("\n 1 - Filtrar por Alta prioridade\n 2 - Filtrar por Média prioridade\n Filtrar por Baixa prioridade\n Escolha : "))

    if(opcao === "1"){
        let listaAltaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Alta")
        retorno && listarTarefas(listaAltaPrioridade)
    } else if(opcao === "2"){
        let listaMediaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Média")
        retorno && listarTarefas(listaMediaPrioridade)
    } else if(opcao === "3"){
        let listaBaixaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Baixa")
        retorno && listarTarefas(listaBaixaPrioridade)
    }
    else {
        console.log("\n Opção inválida, tente novamente!")
    }
}

export function filtrarVencimento(vencidas : boolean, vencemHoje : boolean, vencemDepois : boolean){
    const listaTarefasVencidas : Tarefa[] = []
    const listaTarefasVencemHoje : Tarefa[] = []
    const listaTarefasVencemDepois : Tarefa[] = []

    const dataAtual = new Date()

    listaTarefas.forEach((tarefa) => {
        const dataVencimento = tarefa.vencimento

        dataVencimento.setHours(0,0,0,0)
        dataAtual.setHours(0,0,0,0)

        if(dataVencimento < dataAtual){
            listaTarefasVencidas.push(tarefa)
        } else if (dataVencimento.getTime() === dataAtual.getTime()){
            listaTarefasVencemHoje.push(tarefa)
        } else {
            listaTarefasVencemDepois.push(tarefa)
        }

        if(vencidas){
            console.log("--- Tarefas Vencidas ---") 
            listarTarefas(listaTarefasVencidas)
        } else if (vencemHoje){
            console.log("--- Tarefas que vencem hoje ---")
            listarTarefas(listaTarefasVencemHoje)
        } else{
            console.log("--- Tarefas que vencem depois ---")
            listarTarefas(listaTarefasVencemDepois)
        }
    })
}
