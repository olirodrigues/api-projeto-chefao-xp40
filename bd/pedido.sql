CREATE TABLE pedido(

numero INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 

status VARCHAR(1) NOT NULL, 

data_pedido DATE,

valor DOUBLE,

cliente_id INTEGER NOT NULL, 

CONSTRAINT cliente_pedido FOREIGN KEY
    (cliente_id) REFERENCES cliente(id)

);