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
VITE_API_URL=http://127.0.0.1:3001/api/

```
_Ajuste os valores conforme seu ambiente._ 

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

