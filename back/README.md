# Rankio
Sistema de Gamificação Educacional.

## Requisitos rápidos
- Sistema Operacional: Linux.
- Node.js v18+ e npm.
- Git.
- Banco de dados: MySQL (projeto usa `mysql2` e `sequelize`).
- (Opcional) WebStorm 2025.3 para desenvolvimento/depuração.

## Clonar o repositório
```bash
git clone git@github.com:jrmessias/pos-dev-fullstack-ifsudestemg-tcc.git

cd pos-dev-fullstack-ifsudestemg-tcc
```

## Instalar dependências
```bash
npm install
```

## Arquivo de ambiente (\`.env\`)
Copie o arquivo `.env.example` para `.env` na raiz do projeto.

Exemplo mínimo:
```env
PORT=3000

MYSQL_DIALECT=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=rankio

SESSION_SECRET=your_session_secret_here
# Gere um SESSION_SECRET em https://it-tools.tech/token-generator?length=64
```
_Ajuste os valores conforme seu ambiente._

## Criar banco MySQL
```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS rankio CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
```
_Se usar outro usuário/porta, adapte o comando._

## Importar SQL de demonstração

- Se não utiliza senha no banco de dados
```bash
mysql -u root -psua_senha rankio < rankio.sql
```
- Ou se não utiliza senha no banco de dados
```bash
mysql -u root -p rankio < rankio.sql
```
_Ainda é possível iniciar o sistema e cadastrar professores e alunos sem a necessidade de importar o banco de dados._

## Scripts úteis
- Rodar em desenvolvimento (com `nodemon`):
```bash
  npm run dev
```
- Rodar em produção:

```bash
  npm start
```

## Observações e depuração
- Procure por `process.env` no código para identificar outras variáveis necessárias.
- Logs aparecem no terminal; a aplicação já depende de `morgan`. Use variáveis de ambiente e ferramentas de depuração do Node conforme necessário.
- O projeto usa `sequelize`; a sincronização de models com o banco de dados está desabilitada em `app.js`, linha 16.
