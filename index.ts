import { Tarefa } from "./modules/TarefaModelClass";
import { adicionarTarefa } from "./modules/filesFuncoes/funcoesCRUD";
import { listarTarefas } from "./modules/filesFuncoes/funcoesExibir";
import { pesquisarDescricaoTarefa, pesquisarTituloTarefa } from "./modules/filesFuncoes/funcoesPesquisar";

adicionarTarefa()
listarTarefas()