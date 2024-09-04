export function promptTitulo(): string {
    let titulo : string | null = null
    while(!titulo){
        titulo = prompt("Digite o título da tarefa : ")
        !titulo && console.log("O campo título não pode ser vazio.")
    }
    return titulo
}

export function promptPrioridade(): string {
    let opcaoPrioridade = Number(prompt("Escolha a prioridade\n 1 - Alta\n 2 - Média\n 3 - Baixa\n Escolha : "))
    switch(opcaoPrioridade){
        case 1:
            return "Alta"
        case 2:
            return "Média"
        case 3:
            return "Baixa"
        default:
            console.log("Digite uma opção valida!")
            return promptPrioridade()
    }
}

export function promptVencimento(): Date {
    let vencimento: Date | null = null
    while(!vencimento){
        let dataVencimento : any = prompt("Digite a data de vencimento da tarefa no padrão DD/MM/AAAA (Campo Obrigatório) : ")
        if(dataVencimento?.length === 10 && dataVencimento[2] === "/" && dataVencimento[5] === "/"){
            dataVencimento = dataVencimento?.split("/")
            let dia = parseInt(dataVencimento[0])
            let mes = parseInt(dataVencimento[1])
            let ano = parseInt(dataVencimento[2])
            let dataAtual = new Date()
            vencimento = new Date(ano, mes - 1 , dia)
            if(ano < dataAtual.getFullYear()){
                console.log(`Data inválida! O ano precisa ser maior ou igual à ${dataAtual.getFullYear()}.`)
                return promptVencimento()
            }
            if(isNaN(vencimento.getTime())){
                console.log("O campo vencimento não pode ser vazio. ")
                return promptVencimento()
            }
        } else {
            console.log("O campo vencimento não pode ser vazio. ")
        }
    }
    return vencimento
}


