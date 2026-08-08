function Modal({ aberto, onFechar, children }) {
    if (!aberto) return null;

    return (
        <div 
        className=""
        onClick={onFechar}>
            <div
            className=""
            onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;