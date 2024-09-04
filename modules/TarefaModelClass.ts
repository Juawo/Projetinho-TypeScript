import { listaTarefas} from "./ListaTarefas";
import { promptTitulo, promptPrioridade, promptVencimento } from "./tarefaPrompt";
import { id_count } from "./filesFuncoes/funcoesCRUD";

export class Tarefa {
    protected id : String;
    titulo : String;
    descricao : String | null;
    vencimento : Date;
    prioridade : String;
    dataCreate : Date;
    status : boolean;
    
    constructor(){
        this.id = String(id_count + 1);
        this.status = false;
        this.dataCreate = new Date()
        this.titulo = promptTitulo();
        this.descricao = prompt("Digite uma descrição para a tarefa (Opcional) : ");
        this.prioridade = promptPrioridade();
        this.vencimento = promptVencimento();
    }

    marcarTarefa(): void{
        this.status = true;
        console.log(`Tarefa ${this.titulo} marcada como conluida!`)
    }
    
}


