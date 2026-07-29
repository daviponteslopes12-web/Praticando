import comboRepository from "../repositories/comboRepository.js";
import produtoRepository from '../repositories/produtoRepository.js';
import criarErro from '../utils/criarErro.js';

const comboService = {
    async cadastrarCombo(nome, preco, produtos) {
        const comboExistente = await comboRepository.buscarPorNome(nome);

        if (comboExistente) {
            throw criarErro("Combo já cadastrado", 400);
        }

        for (const produtoId of produtos) {
            const produto = await produtoRepository.buscarPorId(produtoId)
        }

        if (!produto) {
            throw criarErro(`Produto com id ${produtoId} não encontrado`, 404);
        }

        const id = await comboRepository.cadastrarCombo(nome, preco, produtos);

        return { id, nome, preco, produtos };
    },

    async listarCombos() {
        const combos = await comboRepository.listarCombos();
        return combos;
    },

    async listarCombosAtivos() {
        const combos = await comboRepository.listarCombosAtivos();
        return combos;
    },

    async editarCombo(id, nome, preco, produtos) {
        const combo = await comboRepository.buscarPorId(id);

        if (!combo) {
            throw criarErro("Combo não encontrado", 404);
        }

        if (nome) {
            const nomeExistente = await comboRepository.buscarPorNome(nome);

            if (nomeExistente && nomeExistente.id != id) {
                throw criarErro("Já existe um combo com esse nome", 400);
            }
        }

        for (const produtoId of produtos) {
            const produto = await produtoRepository.buscarPorId(produtoId);

            if (!produto) {
                throw criarErro(`Produto com id ${produtoId} não encontrado`, 404);
            }
        }

        await comboRepository.editarCombo(id, nome, preco, produtos);

        const comboAtualizado = await comboRepository.buscarPorId(id);
        comboAtualizado.produtos = await comboRepository.buscarProdutosDoCombo(id);

        return comboAtualizado;
    },

    async deletarCombo(id) {
        const combo = await comboRepository.buscarPorId(id);

        if (!combo) {
            throw criarErro("Combo não encontrado", 404);
        }

        await comboRepository.deletarCombo(id);
    },

    async alternarAtivo(id, ativo) {
        const combo = await comboRepository.buscarPorId(id);

        if (!combo) {
            throw criarErro("Combo não encontrado", 404);
        }

        await comboRepository.alternarAtivo(id, ativo);

        const comboAtualizado = await comboRepository.buscarPorId(id);
        comboAtualizado.produtos = await comboRepository.buscarProdutosDoCombo(id);

        return comboAtualizado;
    },
}

export default comboService;