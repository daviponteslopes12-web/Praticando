import produtoRepository from "../repositories/produtoRepository.js";
import criarErro from '../utils/criarErro.js';

const produtoService = {

    async cadastrarProduto(nome, descricao, preco, categoria, imagem) {
        const produto = await produtoRepository.buscarPorNome(nome);

        if (produto) {
            throw criarErro("Produto já cadastrado", 400);
        }

        const id = await produtoRepository.cadastrarProduto(nome, descricao, preco, categoria, imagem);

        return { id, nome, descricao, preco, categoria, imagem };
    },

    async editarProduto(id, dados) {
        const produto = await produtoRepository.buscarPorId(id);

        if (!produto) {
            throw criarErro("Produto não encontrado", 404);
        }

        if (dados.nome) {
            const nomeExistente = await produtoRepository.buscarPorNome(dados.nome);

            if (nomeExistente && nomeExistente.id != id) {
                throw criarErro("Já existe um produto com esse nome", 400);
            }
        }

        const linhasAfetadas  = await produtoRepository.editarProdutos(id, dados);

        if (linhasAfetadas === 0) {
            throw criarErro("Nenhuma alteração realizada", 400);
        }

        const produtoAtualizado = await produtoRepository.buscarPorId(id);

        return produtoAtualizado;
    },

    async deletarProduto(id) {
        const produto = await produtoRepository.buscarPorId(id);

        if (!produto) {
            throw criarErro("Produto não encontrado", 404);
        }

        const linhasAfetadas = await produtoRepository.deletarProduto(id);

        return linhasAfetadas;
    },

    async buscarProdutos() {
        const produtos = await produtoRepository.buscarProdutos();

        return produtos;
    },

    async buscarProdutosAtivos() {
        const produtos = await produtoRepository.buscarProdutosAtivos();

        return produtos;
    },

    async alternarAtivo(id, ativo) {
        const produto = await produtoRepository.buscarPorId(id);

        if (!produto) {
            throw criarErro("Produto não encontrado", 404);
        }

        const produtoAlterado = await produtoRepository.alternarAtivo(id, ativo);

        return produtoAlterado;
    }
}

export default produtoService;