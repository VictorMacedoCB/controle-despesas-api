export type Despesa = {
    descricao: string,
    categoria: string,
    valor: number
}

const despesas : Despesa[] = []

export const cadastrarDespesa = (novaDespesa: Despesa) => {
    despesas.push(novaDespesa)
}

export const calcularTotalDespesas = (): number => {
    let total: number = 0
    despesas.forEach(despesa =>{ 
         total = total + despesa.valor
    })
    return total 
}

export const listarDespesas = () =>{
    despesas.forEach(despesa => {
        console.log(despesa)
    });
}

export const filtrarDespesasPorCategoria = (categoria : string)  => {
    return despesas.filter(c => c.categoria === categoria)
}