-- Clientes 
INSERT INTO cliente VALUES 
(null, 'Suzane Almeida', "suzaneAl88@gmail.com", '45568778812', 'almeida88suz', '064995919121' ),
(null, 'Alexandre De Sá', "alesa@outlook.com", '74413255122', 'desaale744', '071988512131' ),
(null, 'Eliane Silva Sampaio', "sampaeliane@gmail.com", '95577741051', '851232eli', '011992134471' ),
(null, 'Marta Bertollini Schaffel', "marta95berto@gmail.com", '62135785122', 'schaffelMar85', '051995412233' ),
(null, 'Eloi Pedro Silveira', "eloi.pedro@gmail.com", '95551457312', '77eloisilveira', '021985553211' );

-- Endereços
INSERT INTO endereco VALUES
(null, 'Av', "Martim Ribeiro", 551, "Independência", '77501-100', "Alto Das Flores", "SC", 4),
(null, 'Av', "Santos Drummond", 1455, "Centro", '01120-085', "São Paulo", "SP", 3),
(null, 'Rua', "São Félix", 18, "Laranjeiras", '92333-100', "Viamão", "RS", 1),
(null, 'Av', "Brasil", 2030, "Moinhos de Vento", '40510-950', "Santa Marta", "MG", 2),
(null, 'Rua', "Hélio Mascarenhas", 45, "Alameda das Flores", '21001-120', "Rio de Janeiro", "RJ", 5);

-- Categorias
INSERT INTO categoria VALUES
(null, "Suculenta", "Escolha entre as mais variadas espécies de suculentas para decorar sua casa"),
(null, "Samambaia", "As maiores e belas samambaias para seu ambiente"),
(null, "Vasos", "Vasos variados para todos os tipos de plantas");

-- Produtos
INSERT INTO produto VALUES
(null, "Estrelinha Gorda", "Suculenta Estrelinha Gorda", 15, 5, 'estrelinha-gorda.png', 1),
(null, "Orelha de Shrek ", "Suculenta Orelha de Shrek para acompanhar seu burro", 22, 3, 'orelha-sherek.png', 1),
(null, "Planta fantasma", "Suculenta Planta fantasma", 18, 4, 'planta-fantasma.png', 1),
(null, "Samambaia do Sul", "Samambaia do Sul para pendurar no teto", 40, 2, 'samambaia-sul.png', 2),
(null, "Samambaia Americana", "Samambaia Americana para quintal", 25, 6, 'samambaia-americana.png', 2),
(null, "Vaso de Samambaia", "Vaso grande de samambaia", 12, 4, 'vaso-samambaia.png', 3),
(null, "Vaso pequeno", "Vaso tamanho pequeno - marrom", 25, 6, 'vaso-pequeno.png', 3),
(null, "Vaso de Suculenta", "Vaso de suculenta - preto", 10, 5, 'vaso-suculenta.png', 3);

-- Pedidos
INSERT INTO pedido VALUES
(null, 'F', "2022-01-27", 52, 5),
(null, 'F', "2022-02-05", 30, 3),
(null, 'F', "2022-02-12", 50, 1),
(null, 'F', "2022-02-21", 47, 2),
(null, 'F', "2022-03-02", 61, 2);

-- Item Pedido
INSERT INTO item_pedido VALUES
(null, 1, 40, 1, 4),
(null, 1, 12, 1, 6),
(null, 2, 15, 2, 1),
(null, 1, 22, 3, 2),
(null, 1, 18, 3, 3),
(null, 1, 10, 3, 8),
(null, 1, 25, 4, 5),
(null, 1, 22, 4, 2),
(null, 1, 25, 5, 7),
(null, 2, 18, 5, 2);
