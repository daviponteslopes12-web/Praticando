import 'dotenv/config';
import bcrypt from 'bcrypt';
import pool from '../config/database.js';

async function criarGerente() {
    const nome = process.argv[2];
    const email = process.argv[3];
    const senha = process.argv[4];

    if (!nome || !email || !senha) {
        console.error('Uso: npm run criar-gerente "NOME" "EMAIL" "SENHA" ');
        process.exit(1);
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    await pool.query('INSERT INTO gerentes (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senhaHash]);

    console.log(`Gerente ${nome} criado com sucesso!`);
    process.exit(0);
}

criarGerente();