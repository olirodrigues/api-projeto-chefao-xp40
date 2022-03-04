CREATE TABLE produto(

numero INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 

nome VARCHAR(45) NOT NULL, 

descricao TEXT, 

preco DOUBLE, 

quantidade INTEGER, 

link_foto VARCHAR(255), 

    numero_departamento INTEGER NOT NULL,

CONSTRAINT cod_produto FOREIGN KEY 

(numero_departamento) REFERENCES departamento(numero)

);

