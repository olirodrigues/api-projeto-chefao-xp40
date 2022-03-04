CREATE TABLE item_pedido(
  numero INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,

  quantidade INTEGER,

  valor DOUBLE,

  num_pedido INTEGER NOT NULL,

  num_produto INTEGER NOT NULL,

  CONSTRAINT item_pedido FOREIGN KEY

        (num_pedido) REFERENCES pedido(numero)
    
  CONSTRAINT item_produto FOREIGN KEY 
        (num_produto) REFERENCES produto(numero)

);