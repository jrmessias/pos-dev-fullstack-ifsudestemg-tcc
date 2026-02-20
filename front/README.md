# Desenvolvimento de um Sistema de Gamificação Educacional para Potencializar Engajamento e Aprendizagem em Ambientes Digitais
Software desenvolvido para o Trabalho de Conclusão de Curso (TCC) apresentado como exigência para obtenção do título de Especialista em Desenvolvimento Full Stack do Instituto Federal do Sudeste de Minas Gerais - Campus Manhuaçu.

ISRAEL APARECIDO MESSIAS JUNIOR – 2026

**Objetivo**:

Analisar, projetar e desenvolver um sistema de gamificação voltado ao contexto educacional, aplicando elementos de jogos para potencializar o engajamento, a motivação e a participação ativa dos estudantes no processo de ensino-aprendizagem.

## Guia de Instalação

## Stack utilizado
- Node.js v18+
- Express.js
- MySQL
- Vite
- React.js
- Tailwind CSS
- Shadcn
- Nodemon
- 

## Requisitos rápidos
- Sistema Operacional: Linux.
- Node.js v18+ e npm.
- Git.
- Banco de dados: MySQL (projeto usa `mysql2` e `sequelize`).
- (Opcional) WebStorm 2025.3 para desenvolvimento/depuração.

## Clonar o repositório
```bash
git clone git@github.com:pos-FullStack/trabalho-de-conclus-o-de-curso-jrmessias/.git

cd trabalho-de-conclus-o-de-curso-jrmessias
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

