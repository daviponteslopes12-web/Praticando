CREATE DATABASE IF NOT EXISTS padaria;
USE padaria;


CREATE TABLE IF NOT EXISTS estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto VARCHAR(200) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0,
    adicionado_em TIMESTAMP NULL DEFAULT null,
    retirado_em TIMESTAMP NULL DEFAULT null,
    quantidade_retirada INT DEFAULT null
);

CREATE TABLE IF NOT EXISTS fornada (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conteudo VARCHAR(200) NOT NULL,
    quantidade INT NOT NULL,
    `status` ENUM('esperando', 'preparando', 'pronta') NOT NULL DEFAULT 'esperando',
    ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);