# Projeto Cafeteria ☕

Descrição curta
Projeto para treinar Desenvolvimento Web usando Node.js (backend) e React + Vite (frontend) criando um sistema de pedidos para uma cafeteria.

## Objetivo
Aprender e praticar criando um app de pedidos: cadastrar pedidos (café + acompanhamento) e acompanhar status.

## Tecnologias
- Banco: MySQL
- Backend: Node.js, Express, CORS, dotenv
- Frontend: React (Vite), Axios, TanStack Query, Tailwind CSS

## Funcionalidades principais
- Cadastrar pedidos (produto + acompanhamento)
- Listar pedidos com status: fila, em preparo, pronto, cancelado, retirado
- Navegação (Router) e chamadas API via repository/axios

## Instalação
1. git clone https://github.com/davi41933-svg/ProjetoCafeteria.git
2. Entrar nas pastas backend e frontend e rodar:
   - npm install
3. Criar o banco e executar schema.sql
4. Copiar .env.example para .env em backend e frontend e ajustar variáveis

## Execução
- No backend: npm run dev
- No frontend: npm run dev

## Possíveis melhorias
- Tabela de produtos com preços
- CRON para mudança automática de status
- Cálculo automático do valor total do pedido
- Validação de inputs com Zod
