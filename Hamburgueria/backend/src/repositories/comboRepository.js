import db from "../config/database.js";

const comboRepository = {
    async cadastrarCombo(nome, preco, produtos) {
        const [resultado] = await db.query(
            `
            INSERT 
            INTO combos 
            (nome, preco) 
            VALUES (?, ?)
            `,
            [nome, preco],
        );

        const comboId = resultado.insertId;

        for (const produtoId of produtos) {
            await db.query(
                `
                    INSERT INTO combo_itens (combo_id, produto_id)
                    VALUES (?, ?)
                    `,
                [comboId, produtoId],
            );
        }

        return comboId;
    },

    async listarCombos() {
        const [combos] = await db.query(`
            SELECT * FROM combos`);

        for (const combo of combos) {
            combo.produtos = await this.buscarProdutosDoCombo(combo.id);
        }

        return combos;
    },

    async listarCombosAtivos() {
        const [combos] = await db.query(`
            SELECT *
            FROM combos 
            WHERE ativo = true`);

        for (const combo of combos) {
            combo.produtos = await this.buscarProdutosDoCombo(combo.id);
        }

        return combos;
    },

    async buscarPorId(id) {
        const [resultado] = await db.query(
            `
            SELECT *
            FROM combos
            WHERE id = ?
            `,
            [id],
        );

        return resultado[0] || null;
    },

    async buscarProdutosDoCombo(comboId) {
        const [resultado] = await db.query(
            `
            SELECT p.id, p.nome, p.preco, p.categoria, p.imagem
            FROM combo_itens ci
            JOIN produtos p ON p.id = ci.produto_id
            WHERE ci.combo_id = ?
            `,
            [comboId],
        );

        return resultado;
    },

    async deletarCombo(id) {
        await db.query(
            `
            DELETE FROM combo_itens
            WHERE combo_id = ?
            `,
            [id],
        );

        const [resultado] = await db.query(
            `
            DELETE FROM combos
            WHERE id = ?
            `,
            [id],
        );

        return resultado.affectedRows;
    },

    async editarCombo(id, nome, preco, produtos) {
        await db.query(
            `
            UPDATE combos
            SET nome = ?, preco = ?
            WHERE id = ?
            `,
            [nome, preco, id],
        );

        await db.query(
            `
            DELETE FROM combo_itens 
            WHERE combo_id = ?
            `,
            [id],
        );

        for (const produtoId of produtos) {
            await db.query(
                `
                INSERT INTO combo_itens
                (combo_id, produto_id)
                VALUES (?, ?)
                `,
                [id, produtoId],
            );
        }

        return 1;
    },

    async alternarAtivo(id, ativo) {
        const [resultado] = await db.query(
            `
            UPDATE combos
            SET ativo = ?
            WHERE id = ?
            `,
            [ativo, id],
        );

        return resultado.affectedRows;
    },

    async buscarPorNome(nome) {
        const [resultado] = await db.query(
            `
        SELECT * FROM combos WHERE nome = ?
    `,
            [nome],
        );

        return resultado[0] || null;
    },
};

export default comboRepository;