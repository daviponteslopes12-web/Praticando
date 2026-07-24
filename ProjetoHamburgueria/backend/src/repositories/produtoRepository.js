import db from '../config/database.js';

const produtoRepository = {

    async cadastrarProduto(nome, descricao, preco, categoria, imagem) {
        const [resultado] = await db.query(`
            INSERT 
            INTO produtos (nome, descricao, preco, categoria, imagem) 
            VALUES (?, ?, ?, ?, ?)
            `, [nome, descricao, preco, categoria, imagem]);

            return resultado.insertId;
    },

    async editarProdutos(id, dados) {
        const campos = Object.keys(dados);
        const valores = Object.values(dados);
        const setClause = campos.map((campo) => `${campo} = ?`).join(', ');

        const [resultado] = await db.query(`
            UPDATE produtos SET ${setClause} WHERE id = ?
            `, [...valores, id]);

            return resultado.affectedRows

    },

    async deletarProduto(id) {
        const [resultado] = await db.query(`
            DELETE 
            FROM produtos 
            WHERE id = ?
            `, [id]);

            return resultado.affectedRows;
    },

    async buscarProdutos() {
        const [resultado] = await db.query(`
            SELECT *
            FROM produtos
            `);

            return resultado;
    },

    async buscarProdutosAtivos() {
        const [resultado] = await db.query(`
            SELECT *
            FROM produtos
            WHERE ativo = true
            `);

            return resultado;
    },

    async alternarAtivo(id, ativo) {
        const [resultado] = await db.query(`
            UPDATE produtos
            SET ativo = ?
            WHERE id = ?
            `, [ativo, id]);

            return resultado.affectedRows;
    },

    async buscarPorNome(nome) {
        const [resultado] = await db.query(`
            SELECT * 
            FROM produtos
            WHERE nome = ?
            `, [nome]);

            return resultado[0] || null;
    },

    async buscarPorId(id) {
        const [resultado] = await db.query(`
            SELECT * 
            FROM produtos
            WHERE id = ?
            `, [id]);

            return resultado[0] || null;
    }
}

export default produtoRepository;