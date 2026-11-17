import { pool } from "../database/connection.js";
import type { AtualizarDespesa, Despesa, NovaDespesa } from "../despesas.js";


export async function criar(despesa: NovaDespesa) : Promise<Despesa> {
    const client = await pool.connect()
    try {
        const result =  await client.query<Despesa>(
            `INSERT INTO despesas (descricao, categoria, valor) VALUES ($1, $2, $3) RETURNING *`, 
            [despesa.descricao, despesa.categoria, despesa.valor]
        )
        if(!result.rows[0]) {
            throw new Error("Erro ao criar a despesa")
        }
        return result.rows[0]
    } catch (error) {
        throw error
    } finally {
        client.release()
    }
}

export async function listar(): Promise<Despesa[]> {
    const client = await pool.connect()
    try {    
        const result = await client.query<Despesa>('SELECT * FROM despesas ORDER BY criado_em DESC')
        return result.rows
    } catch (error) {
        throw error
    } finally {
        client.release()
    }
}

export async function deletar(id: string) : Promise<boolean> {
    const client = await pool.connect()
    try {
        const result = await client.query('DELETE FROM despesas WHERE id = $1', [id])
        if(result.rowCount === 0) return false
        return true
    } catch (error) {
        throw error
    } finally {
        client.release()
    }
}

export async function atualizar(id: string, dados: AtualizarDespesa) : Promise<boolean> {
    const client = await pool.connect()
    try {
        const result = await client.query('UPDATE DESPESAS SET descricao = COALESCE($1, descricao), categoria = COALESCE($2, categoria), valor = COALESCE($3, valor) WHERE id = $4', [dados.descricao, dados.categoria, dados.valor, id])
        if(result.rowCount === 0 ) return false
        return true
    } catch (error) {
        throw error
    } finally {
        client.release()
    }
}