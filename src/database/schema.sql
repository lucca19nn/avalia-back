CREATE DATABASE vendas;

\c vendas;

CREATE TABLE proprietarios (
    id SERIAL PRIMARY KEY,
    proprietario_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE imovel (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    proprietario_name VARCHAR(100) REFERENCES proprietarios(proprietario_name) ON DELETE SET NULL 
);

INSERT INTO proprietarios (proprietario_name) VALUES
    ('André Lucca'),
    ('Rafael Henry');

INSERT INTO imovel (name, proprietario_name) VALUES
    ('Riviera Módulo 12 - Bertioga/SP', 'André Lucca'),
    ('Riviera Módulo 11 - Bertioga/SP', 'Rafael Henry');

ALTER TABLE imovel ADD COLUMN photo TEXT;