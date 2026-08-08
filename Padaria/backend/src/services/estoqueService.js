import { estoqueRepository } from "../repositories/estoqueRepository.js";

export const estoqueService = {

    async cadastrar(produto) {

        const verificarExiste = await estoqueRepository.buscarProdutoPorNome(produto);

        if (verificarExiste) {
            throw { status: 409, mensagem: 'Produto já cadastrado' };
        }

        const id = await estoqueRepository.cadastrar(produto);

        return { id, produto, quantidade: 0 };
    },

    async adicionarEstoque(produto, quantidade) {

        if (quantidade <= 0) {
            throw { status: 400, mensagem: 'Valor inválido' }
        } 


        const resultado = await estoqueRepository.adicionarEstoque(produto, quantidade);

        return { mensagem: 'Produto adicionado com sucesso' };
    },

    async retirarEstoque(produto, quantidade) {

        if (quantidade <= 0) {
            throw { status: 400, mensagem: 'Valor inválido' }
        }

        const resultado = await estoqueRepository.retirar(produto, quantidade);

        return { mensagem: 'Produto retirado com sucesso' };
    },

    async listar() {

        const resultado = await estoqueRepository.listar();

        return resultado;
    }
}