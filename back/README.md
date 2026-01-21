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

SESSION_SECRET=your_session_secret_here #(https://it-tools.tech/token-generator?length=64)
```
Ajuste os valores conforme seu ambiente.

## Criar banco MySQL
```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS rankio CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
```
Se usar outro usuário/porta, adapte o comando.

## Scripts úteis
- Rodar em desenvolvimento (com `nodemon`):
```bash
  npm run dev
```
- Rodar em produção:

```bash
  npm start
```
O ponto de entrada usado pelos scripts é `./bin/www` (usa `process.env.PORT`).

## WebStorm
- Crie uma Run Configuration do tipo `npm` com o script `dev`, ou uma Node configuration apontando para `./bin/www`.
- Configure variáveis de ambiente da Run Configuration para carregar o arquivo `.env` se necessário.

## Observações e depuração
- Procure por `process.env` no código para identificar outras variáveis necessárias.
- Logs aparecem no terminal; a aplicação já depende de `morgan`. Use variáveis de ambiente e ferramentas de depuração do Node conforme necessário.
- O projeto usa `sequelize`; se houver migrations, verifique pastas `migrations` e scripts em `package.json`.

## Contato
- Repositório: `git@github.com:jrmessias/pos-dev-fullstack-ifsudestemg-tcc.git`
