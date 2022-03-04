CREATE TABLE produto(

numero INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 

nome VARCHAR(45) NOT NULL, 

descricao TEXT, 

preco DOUBLE, 

quantidade INTEGER, 

link_foto VARCHAR(255), 

    numero_categoria INTEGER NOT NULL,

CONSTRAINT produto_depto FOREIGN KEY 

(categoria_numero) REFERENCES categoria(numero)

);

