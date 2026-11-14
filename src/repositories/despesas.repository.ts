import { pool } from "../database/connection.js";
import type { Despesa } from "../despesas.js";


export async function criar(despesa: Despesa) {
    const client = await pool.connect()
        try {
            const result =  await client.query(
                `INSERT INTO despesas (descricao, categoria, valor) VALUES ($1, $2, $3) RETURNING *`, 
                [despesa.descricao, despesa.categoria, despesa.valor]
            )
            return result.rows[0]
        } catch (error) {
            throw error
        } finally {
            client.release()
        }
}

export async function listar(){
    const client = await pool.connect()
    try {    
        const result = await client.query('SELECT * FROM despesas ORDER BY criado_em DESC')
        return result.rows
    } catch (error) {
        throw error
    } finally {
        client.release()
    }
}