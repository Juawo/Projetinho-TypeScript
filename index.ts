import { Tarefa } from "./modules/TarefaModelClass";
import { adicionarTarefa, editarTarefa, marcarTarefaConcluida, removerTarefa } from "./modules/filesFuncoes/funcoesCRUD";
import { listarTarefas, ordernarDataCreate, ordernarPrioridade, ordernarVencimento, resumoTarefas } from "./modules/filesFuncoes/funcoesExibir";
import { filtrarPrioridade, filtrarStatus, filtrarVencimento } from "./modules/filesFuncoes/funcoesFiltrar";
import { pesquisarDescricaoTarefa, pesquisarTituloTarefa } from "./modules/filesFuncoes/funcoesPesquisar";

let loop = true
while(loop){
    console.log(`--- Gerenciador de Tarefas ---`)
    let opcao = prompt(`
        1 - Adicionar Tarefa
        2 - Marcar Tarefa como Concluída
        3 - Listar Tarefas
        4 - Editar Tarefa
        5 - Remover Tarefa
        6 - Pesquisar Tarefa
        7 - Resumo das Tarefa
        8 - Sair`)
    
    switch(opcao){
        case "1":
            adicionarTarefa()
            break
        case "2":
            marcarTarefaConcluida()
            break
        case "3":
            let opcaoListar = String(prompt(" 1 - Listar Tarefas\n 2 - Filtrar por Status\n 3 - Filtrar por Proridade\n 4 - Filtrar por Data de Vencimento\n 5 - Ordernar por Vencimento\n 6 - Ordernar por Prioridade\n 7 - Ordernar por Data de Criação\n Digite : "))
            switch(opcaoListar){
                case "1":
                    listarTarefas()
                    break
                case "2":
                    filtrarStatus()
                    break
                case "3":
                    filtrarPrioridade()
                    break
                case "4":
                    let filtrarPor = String(prompt(" 1 - Tarefas Vencidas\n 2 - Tarefas que Vencem Hoje\n 3 - Vencem depois"))
                    filtrarPor === "1" && filtrarVencimento(true,false,false)
                    filtrarPor === "2" && filtrarVencimento(false,true,false)
                    filtrarPor === "3" && filtrarVencimento(false,false,true)
                    break
                case "5":
                    ordernarVencimento()
                case "6":
                    ordernarPrioridade()
                case "7":
                    ordernarDataCreate()
                default:
                    console.log("Digite uma opção válida!")

            }
            listarTarefas()
            break
        case "4":
            editarTarefa()
            break
        case "5":
            removerTarefa()
            break
        case "6":
            let opcaoPesquisar = String(prompt(" 1 - Pesquisar por Titulo\n 2 - Pesquisar por Descrição\n Digite : "))
            opcaoPesquisar === "1" && pesquisarTituloTarefa()
            opcaoPesquisar === "2" && pesquisarDescricaoTarefa()
            break
        case "7":
            resumoTarefas()
            break
        case "8":
            console.log("Até a próxima!")
            break
        default:
    }
}