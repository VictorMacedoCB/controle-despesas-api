import {
    cadastrarDespesa,
    calcularTotalDespesas,
    listarDespesas,
    filtrarDespesasPorCategoria
} from './despesas.js';


cadastrarDespesa({
    categoria: "Veterinario",
    descricao: "Vacina",
    valor: 200
})

cadastrarDespesa({
    categoria: "Academia",
    descricao: "Anualidade",
    valor: 1500
})

console.log(listarDespesas(), calcularTotalDespesas(), filtrarDespesasPorCategoria('Academia'))

