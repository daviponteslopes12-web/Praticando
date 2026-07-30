# Projeto Hamburgueria

## Descrição
Projeto simples criado para praticar e desenvolver conhecimento em **Desenvolvimento Web**.
Simula um sistema de hamburgueria com cardápio digital, carrinho de compras e painel de gerenciamento para o gerente.

---

## Funcionalidades

**Cliente**
- Visualizar cardápio por categorias (hambúrgueres, bebidas, acompanhamentos, sobremesas, combos)
- Adicionar e remover itens do carrinho
- Preço atualizado em tempo real
- Tela de pagamento com formas de pagamento (Pix, Cartão, Boleto)

**Gerente**
- Login com autenticação por token
- Cadastrar, editar e deletar produtos
- Cadastrar, editar e deletar combos
- Ativar e desativar produtos e combos

---

## Instalação
1. git clone https://github.com/davi41933-svg/ProjetoHamburgueria.git
2. Entrar nas pastas backend e frontend e rodar: ``npm install``
3. Criar o banco e executar schema.sql
4. Copiar .env.example para .env em backend e frontend e ajustar variáveis
5. Criar o gerente pelo terminal: ``node src/scripts/criarGerente.js "Nome" "email" "senha"``

---

## Como usar
No backend: ``npm run dev``
No frontend: ``npm run dev``

---

## Tecnologias
**Banco**
- mariadb

**Backend**
- express
- cors
- dotenv
- mysql2
- zod
- bcrypt
- jsonwebtoken
- nodemon

**Frontend**
- react
- react-router-dom
- axios
- @tanstack/react-query
- tailwindcss

---

## Autores
**Davi A. Lopes**
*Utilização de IA como ferramenta de auxílio*