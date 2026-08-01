function Feedback({ tipo, mensagem, onConfirmar, onFechar }) {
    return (
        <div
        className="">
            {tipo === 'sucesso' && <span className="">✓</span>}
            {tipo === 'erro' && <span className="">✕</span>}
            {tipo === 'confirmacao' && <span className="">⚠</span>}

            <p className="">{mensagem}</p>

            {tipo === 'confirmacao' && (
                <div className="">
                    <button onClick={onFechar} className="">
                        Cancelar
                    </button>
                    <button onClick={onConfirmar} className="">
                        Confirmar
                    </button>
                </div>
            )}

            {(tipo === 'sucesso' || tipo === 'erro') && (
                <button onClick={onFechar} className="">
                    Fechar
                </button>
            )}
        </div>
    );
}

export default Feedback;