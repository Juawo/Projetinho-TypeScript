import { listaTarefas, id_count } from "./ListaTarefas";

class Tarefa {
    id : String;
    titulo : String;
    descricao : String;
    vencimento : Date;
    prioridade : String;
    dataCreate : Date;
    status : boolean;
    
    constructor(){
        this.id = String(id_count + 1);
        this.status = false;
    }

}


