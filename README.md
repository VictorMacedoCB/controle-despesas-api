# Controle de Despesas API

API REST para gerenciamento de despesas pessoais, desenvolvida com Node.js, TypeScript e PostgreSQL.

O projeto tem como objetivo praticar desenvolvimento backend, construção de APIs REST, integração com banco de dados e organização de código em camadas.

**Status:** CRUD implementado. Projeto em evolução.

## Tecnologias utilizadas

- **Node.js** — ambiente de execução.
- **TypeScript** — tipagem estática.
- **Express** — construção da API REST.
- **PostgreSQL 17** — banco de dados relacional.
- **Docker Compose** — execução do banco de dados em container.
- **node-postgres (pg)** — conexão e consultas SQL.
- **Insomnia** — testes das requisições HTTP.

## Arquitetura

O projeto utiliza uma organização em camadas para separar as responsabilidades da aplicação:

```text
src/
├── controllers/
│   └── despesas.controller.ts
├── database/
│   └── connection.ts
├── repositories/
│   └── despesas.repository.ts
├── routes/
│   └── despesas.routes.ts
├── services/
│   └── despesas.service.ts
├── despesas.ts
└── server.ts
```

Fluxo de uma requisição:

```text
Routes → Controller → Service → Repository → PostgreSQL
```

- **Routes:** definem os endpoints da API.
- **Controllers:** recebem as requisições, validam os dados de entrada e retornam respostas HTTP.
- **Services:** concentram a lógica de aplicação.
- **Repositories:** executam as operações no banco de dados.

## Funcionalidades implementadas

| Método | Endpoint | Descrição | Status |
|---|---|---|---|
| GET | `/despesas` | Lista as despesas cadastradas | Implementado |
| POST | `/despesas` | Cadastra uma nova despesa | Implementado |
| PATCH | `/despesas/:id` | Atualiza parcialmente uma despesa | Implementado |
| DELETE | `/despesas/:id` | Exclui uma despesa pelo ID | Implementado |

## Como executar o projeto

### 1. Pré-requisitos

- Node.js instalado.
- Docker e Docker Compose.
- Git.

### 2. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd NOME_DO_PROJETO
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=controle_despesas
```

### 5. Inicie o banco de dados

```bash
docker compose up -d
```

### 6. Execute a aplicação

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3000
```

## Estrutura do banco de dados

Atualmente, o projeto utiliza uma tabela chamada `despesas`.

```sql
CREATE TABLE despesas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    descricao VARCHAR(255) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    valor NUMERIC(10, 2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Exemplos de requisições

### Cadastrar despesa

`POST /despesas`

```json
{
    "descricao": "Compra no mercado",
    "categoria": "Alimentação",
    "valor": 150.50
}
```

### Listar despesas

`GET /despesas`

Retorna as despesas cadastradas no banco de dados.

### Atualizar despesa parcialmente

`PATCH /despesas/:id`

Permite atualizar somente os campos enviados, mantendo os demais dados inalterados.

Exemplo:

```json
{
    "valor": 250.50
}
```

Também é possível atualizar mais de um campo:

```json
{
    "descricao": "Conta de internet",
    "categoria": "Moradia",
    "valor": 180.00
}
```

### Excluir despesa

`DELETE /despesas/:id`

Exemplo:

```text
DELETE /despesas/uuid-da-despesa
```

## Próximos passos

- [ ] Melhorar a validação dos dados recebidos com Zod.
- [ ] Implementar tratamento global de erros.
- [ ] Melhorar a validação de UUID.
- [ ] Implementar testes automatizados com Vitest.
- [ ] Documentar a API com OpenAPI/Swagger.
- [ ] Criar instruções para agentes de IA com AGENTS.md.
- [ ] Implementar autenticação e autorização com middleware.
- [ ] Implementar envio de e-mails.
- [ ] Estudar processamento de tarefas em segundo plano com BullMQ e Redis.
- [ ] Desenvolver uma interface com React.
- [ ] Avaliar a implementação de ORM com Drizzle.

## Objetivo do projeto

Este projeto faz parte do meu processo de aprendizado em desenvolvimento backend, com foco em TypeScript, Node.js, APIs REST, SQL e arquitetura em camadas.

A proposta é construir a aplicação gradualmente, priorizando o entendimento dos fundamentos antes de adotar abstrações e ferramentas adicionais.
