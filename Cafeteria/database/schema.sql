CREATE DATABASE cafeteria;
USE cafeteria;

CREATE TABLE pedidos (
    id INT NOT NULL AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    cafe ENUM(
        'espresso',
        'americano',
        'especial'
    ) NOT NULL,

    acompanhamento ENUM(
        'pao de queijo',
        'sanduiche',
        'bolo'
    ) NOT NULL,

    status_pedido ENUM(
        'fila',
        'em preparo',
        'pronto',
        'cancelado',
        'retirado'
    ) NOT NULL DEFAULT 'fila',

    valor_total DECIMAL(10,2) NOT NULL,

    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id)
);