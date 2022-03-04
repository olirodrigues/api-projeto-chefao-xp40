endereco(num_seq,tipo, logradouro, numero, bairro, cep, cidade, estado, id_cliente)

CREATE TABLE endereco(

    num_seq INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,

    tipo VARCHAR(8) NOT NULL,
    
    logradouro VARCHAR(45) NOT NULL,

    numero INTEGER NOT NULL,

    bairro VARCHAR(30) NOT NULL, 

    cep VARCHAR(10) NOT NULL, 

    cidade VARCHAR(40) NOT NULL, 

    estado VARCHAR(2) NOT NULL,

    id_cliente INTEGER NOT NULL,

        CONSTRAINT endereco_cliente FOREIGN KEY
    
        (id_cliente) REFERENCES cliente(id)

);