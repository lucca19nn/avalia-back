CREATE DATABASE vendas;

\c vendas;

CREATE TABLE proprietarios (
    id SERIAL PRIMARY KEY,
    proprietario_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE imoveis (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    proprietario_name VARCHAR(255),
    photo TEXT
);

INSERT INTO proprietarios (proprietario_name) VALUES
    ('André Lucca'),
    ('Rafael Henry');

INSERT INTO imoveis (name, proprietario_name, photo) VALUES
    ('Riviera Módulo 12 - Bertioga/SP', 'André Lucca'),
    ('Riviera Módulo 11 - Bertioga/SP', 'Rafael Henry'),
;

