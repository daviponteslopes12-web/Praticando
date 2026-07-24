function criarErro(mensagem, status) {
    const erro = new Error(mensagem);
    erro.status = status;

    return erro;
}

export default criarErro;