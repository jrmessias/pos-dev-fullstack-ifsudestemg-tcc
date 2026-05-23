# Rankio

## Estrutura do projeto

- `back/` - Express + Sequelize REST API
- `front/` - React + Vite SPA

## Executando Front e Back em desenvolvimento (com concurrently)

Requisitos
- Node.js (v18+) e npm instalados.
- Verifique as variáveis: `front/.env.development` (VITE_API_URL) e `back/.env` (PORT).

Instalação (na raiz do repositório)
- Instale a dependência dev `concurrently` na raiz (uma vez):
  npm install --save-dev concurrently@^8.2.0

O que foi adicionado
- Um `package.json` na raiz com os scripts:
    - `start:back` -> `npm --prefix ./back run dev`
    - `start:front` -> `npm --prefix ./front run dev`
    - `dev` -> roda ambos em paralelo através do `concurrently`

Rodando os dois ao mesmo tempo
- A partir da raiz do repositório:
  npm run dev
- A saída será prefixada por [BACK] e [FRONT] e iniciará o backend (nodemon) e o frontend (Vite) em paralelo.

Rodando separadamente
- Backend:
  cd back
  npm install
  npm run dev
- Frontend:
  cd front
  npm install
  npm run dev

Resolução de problemas
- Se `npm run dev` falhar, verifique:
    - Que `back/package.json` tem o script `dev` (ex.: `nodemon ./bin/www`).
    - Que `front/package.json` tem o script `dev` (ex.: `vite`).
    - Que `VITE_API_URL` aponta para a porta correta do back (ex.: http://127.0.0.1:3000/api/).
    - Se vir erro `npm:: not found`, usar os scripts sem a forma `npm:` (ex.: `concurrently "npm --prefix ./back run dev" "npm --prefix ./front run dev"`).
- CORS: permita a origem do Vite (http://127.0.0.1:5173) no backend se necessário.
- Vulnerabilidades: após instalar, rode `npm audit` e `npm audit fix` conforme apropriado.
