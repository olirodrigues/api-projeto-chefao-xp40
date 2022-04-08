# 🍃Mee API 🍃

# 📋Guia da API

- [Descrição](#📝-descrição)
- [Como Executar](#🖥️-como-executar)
- [Tecnologias](#🛠-tecnologias)
- [Métodos](#métodos)
- [Autenticação](#autenticação---jwt)
- [Endpoints](#endpoints)

---

## 💾Features

- [x] Busca de itens por categorias
- [x] Implementação do banco de dados com Sequelize
- [x] Paginação


## 🎯Objetivos 

- [x] Configuração de um banco de dados relacional.
- [x] Criação de uma API capaz de buscar dados de forma categorizada.
- [x] Criação de uma API capaz de listar produtos.



## 📝 Descrição

<p align="center">Desafio final do curso de Desenvolvimento Full Stack da Gama Academy. A proposta desse projeto foi criar um portfólio navegável e interativo de um empreendimento, e assim surgiu a Mee!</p>


<p align="center"> A Mee é uma empresa que se preocupa com o bem-estar das pessoas. Nossas plantinhas são especificas para ambientes internos e requerem poucos cuidados visando pessoas que querem ter muito verde dentro de casa aliando ao aspecto estético e decorativo.</p>

## 🖥️ Como Executar

### Instalação das dependências do projeto

      $ npm i

## 🔨 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- JavaScript
- Sequelize
- Express
- MySQL
- React
- CSS3

## 🔍Métodos

Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| GET | Retorna informações de um ou mais registros. |

## 📝Respostas


| Código | Descrição                                                                                    |
| ------ | -------------------------------------------------------------------------------------------- |
| 200    | Retorna a categoria de plantas, plantas, post do blog ou do sobre nós, a depender do caminho |
| 404    | Post não encontrado!                                                                         |
| 404    | Categoria não cadastrada no banco de dados!                                                  |
| 404    | Planta não cadastrada no banco de dados!                                                     |
| 404    | Planta não encontrada nessa categoria!                                                       |
| 404    | Ops! Algo deu errado, a página que você tentou acessar não existe.                           |                                             

# 🔓Autenticação - JWT

Nossa API utiliza JWT como forma de autenticação/autorização.

Para utilizar a API do Mee através do JWT é necessário ter um Token de acesso da API que deverá ser colocada no header.

Token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZnJvbnRFbmREZXZzIiwiaWF0IjoxNjQ3ODIxNjQyfQ.5YOoYI2zHatrl5iY0BGBsEVsNjShrNG8muaQI0cENK8

# 🔚Endpoints

# [/plantas]

Aqui será o ambiente onde se encontrarão todas as categorias de plantas.

### Listar (List) [GET]

- Request (application/json)

- Response 200 (application/json)

  - Body
 
		{
            "id": 1,
		"nome": "Cactos",
		"foto_desktop": "CCx200",
		"foto_tablet": "CCx150",
		"foto_celular": "CCx100"
            },
		{
            "id": 2,
		"nome": "Suculentas",
		"foto_desktop": "CSx200",
		"foto_tablet": "CSx150",
		"foto_celular": "CSx100"
            },
		{
            "id": 3,
		"nome": "Hortícolas",
		"foto_desktop": "CHx200",
		"foto_tablet": "CHx150",
		"foto_celular": "CHx100"
            }


    
	
# [/plantas/:categorias]

Nesse endpoint será retornada informação sobre uma das três categorias existentes de acordo com o que for selecionado e colocado no placeholder, sendo as três categorias (cactos, horticolas e suculentas).

### Listar (List) [GET]

- Request (application/json)

- Response 200 (application/json)

  - Body
     		
            {
            "categoria": "cactos",
		"nome": "Cacto Candelabro",
		"fotos_id": 1,
		"foto": {
			"categoria_plantas": "PC0101x250",
			"cel_categorias_plantas": "PC0101x150"}
            },
            {
		"categoria": "cactos",
		"nome": "Cacto-de-Frade",
		"fotos_id": 2,
		"foto": {
			"categoria_plantas": "PC0201x250",
			"cel_categorias_plantas": "PC0201x150"
		      }
	         },
	      {
		"categoria": "cactos",
		"nome": "Cacto-Dedal",
		"fotos_id": 3,
		"foto": {
			"categoria_plantas": "PC0301x250",
			"cel_categorias_plantas": "PC0301x150"
		}
	      }

Response 404 (application/json)
		
		{
		"mensagem": "Categoria não cadastrada no banco de dados!",
		"status": 404
		}


# [/plantas/:categorias/:id]

Aqui estará disponível uma planta específica dentro de uma categoria através do placeholder da categoria das plantas e do ID das plantas, sendo os IDs (1,2,3 para cactos, 4,5 e 6 para suculentas e 7,8,9 para horticolas).

### Listar (List) [GET]

- Request (application/json)

- Response 200 (application/json)

  - Body
      
      
	      {
            "id": 2,
            "categoria": "cactos",
            "nome": "Cacto-de-Frade",
            "descricao": "Pequeno e arredondado, o cacto coroa-de-frade tem um aspecto interessante. Suas flores são formadas no chapéu vermelho e cilíndrico sobre o tronco verde. Possui espinhos pontiagudos nas bordas dos gomos que formam o tronco. Nativo das regiões semi-áridas do nordeste, é pouco exigente quanto ao solo e à umidade.",
            "cuidados_descricao": "Devem ser cultivados em substrato composto de areia e terra de jardim, sob pleno sol ou meia sombra, sendo intolerante ao frio. As regas ficam por conta das chuvas que, caso estejam em excesso, podemos protegê-lo até o tempo melhorar. Podem ser cultivados em vasos como planta isolada ou em composição com outras cactáceas e suculentas em terrário ou diretamente no jardim. Multiplica-se por sementes.",
            "cuidados_iluminacao": "Meia sombra e Sol Pleno",
            "cuidados_agua": "1x por semana",
            "cuidados_pet": "Pet Friendly",
            "informacoes_id": 2,
            "fotos_id": 2,
            "informaco": {
                  "id": 2,
                  "nome_cientifico": "Melocactus zehntneri",
                  "categoria_descricao": "Cactos e Suculentas",
                  "altura": "0.1 a 0.3 metros, 0.3 a 0.4 metros, menos de 15 cm",
                  "luminosidade": "Meia Sombra, Sol Pleno"
            },
            "foto": {
                  "id": 2,
                  "desktop_1": "PC0201x500",
                  "desktop_2": "PC0202x500",
                  "desktop_3": "PC0203x500",
                  "desktop_icon_1": "PC0201x80",
                  "desktop_icon_2": "PC0202x80",
                  "desktop_icon_3": "PC0203x80",
                  "celular_1": "PC0201x250",
                  "celular_2": "PC0202x250",
                  "celular_3": "PC0203x250",
                  "celular_icon_1": "PC0201x30",
                  "celular_icon_2": "PC0202x30",
                  "celular_icon_3": "PC0203x30",
                  "cel_categorias_plantas": "PC0201x150"
                  }
            }

- Response 404 (application/json)

		{
		"mensagem": "Planta não encontrada nessa categoria!",
		"status": 404
		}

- Response 404 (application/json)

		{
		"mensagem": "Planta não cadastrada no banco de dados!",
		"status": 404
		}




# [/blog]

Nesse endpoint será possível visualiazar todos os posts disponíveis do blog.

### Listar (List) [GET]

- Request (application/json)

- Response 200 (application/json)

  - Body
            
		{
            "post_titulo": "Decoração Interna: Plantas para sua casa",
		"post_resumo": "Independentemente se o seu cantinho for uma casa espaçosa ou um pequeno apartamento elas são para você.",
		"fotos_gerai": {
			"Capa_do_blog": "BCD01x250",
			"Capa_do_blog_cel": "BCC01x200"
		}
	      },
	      {
		"post_titulo": "Decoração externa: Plantas no meu quintal",
		"post_resumo": "Ambiente externo também merece atenção. Saiba como deixar um espaço verde e aconchegante para você.",
		"fotos_gerai": {
			"Capa_do_blog": "BCD02x250",
			"Capa_do_blog_cel": "BCC02x200"
		}
	      },
	      {
		"post_titulo": "Plantas hortícolas: Da salada ao tempero",
		"post_resumo": "São elas de fácil cultivo e que alimenta muita gente por aí. Conheça agora as plantas que vão parar na sua cozinha.",
		"fotos_gerai": {
			"Capa_do_blog": "BCD03x250",
			"Capa_do_blog_cel": "BCC03x200"
		}
	      }


# [/blog/:id]

Aqui será visível um post específico do blog ao ser selecionado.

### Listar (List) [GET]

- Request (application/json)

- Response 200 (application/json)

  - Body          
                  
            {"id": 1, "post_titulo": "Decoração Interna: Plantas para sua casa", 	"post_resumo": "Independentemente se o seu cantinho for uma casa espaçosa ou um pequeno apartamento elas são para você.", "post_texto": "Você já pensou em adicionar mais verde na sua casa? E não estamos falando de pintura, e sim de incluir uma plantinha em sua decoração! Esta é uma maneira muito simples e prazerosa de oferecer mais aconchego, energia e ar puro ao ambiente sem maiores investimentos, independentemente se o seu cantinho for uma casa espaçosa ou um pequeno apartamento.\nO legal de decorar com plantas é a grande diversidade delas, além dos inúmeros benefícios que carregam. Assim você pode colocar na sua sala, cozinha, quarto, banheiro a folhagem que mais combina com o estilo da sua casa e com seu gosto. Mas é preciso saber a necessidade das plantinhas. Será que fica melhor para ela ficar perto da janela ou em lugares de pouca luz solar ? Qual vaso combina mais ? Quantas vezes devo reguar ? São essas e outras perguntas que devemos nos questionar ao adotar plantas em nossos cômodos. Mas de uma coisa eu garanto, elas nos trazem sensação de ar limpo, aconchego, estimula nossa concetração e a criatividade.",
	      "post_fotos_id": 1,
	      "fotos_gerai": {
		"id": 1,
		"desktop_1": "BD0101",
		"desktop_2": "BD0102",
		"desktop_3": "BD0103",
		"desktop_4": "BD0104",
		"tablet_1": "BT0101",
		"tablet_2": "BT0102",
		"tablet_3": "BT0103",
		"celular_1": "BC0101"
	     }
        }
	
- Response 404 (application/json)

		{
		"mensagem": "Post não encontrado!",
		"status": 404
		}

# [/sobre/:id]

Nesse endpoint é possível visualizar o texto de apresentação da empresa/projeto.

### Listar (List) [GET]

- Request (application/json)

- Response 200 (application/json)

  - Body
            
            {"id": 1, "sobre_titulo": "Nós",	"sobre_texto": "A mee é uma empresa que se preocupa com o bem-estar das pessoas.\nNossos produtos são pensados principalmente para ambientes internos que proporcionam conforto ao seu lar. Nossas plantinhas são de espécies que requerem poucos cuidados visando pessoas que querem ter muito verde dentro de casa aliando ao aspecto estético e decorativo. Se você não tem muito espaço e nem tempo para tarefas mais complexas de jardinagem pode contar com a gente que vamos lhe ajudar nessa tarefa.",
	      "sobre_fotos_id": 4,
	      "fotos_gerai": {
		"id": 4,
		"desktop_1": "SN-D0101",
		"desktop_2": "SN-D0102",
		"desktop_3": "SN-D0103",
		"desktop_4": "SN-D0104",
		"tablet_1": "SN-T0101",
		"tablet_2": "SN-T0102",
		"tablet_3": "SN-T0103",
		"celular_1": "SN-C0101"
	      }
         }



## 🤝 Colaboradores:
---
# Back-end Dev
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/gabezrodz">
        <img src="https://avatars.githubusercontent.com/u/84934507?s=400&u=2121f2fa27f160de9fc31e854e4353169dfa9f4e&v=4" width="100px;" alt="Foto do Gabriel R. Rodrigues no GitHub"/><br>
        <sub>
          <b>Gabriel R. Rodrigues</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/palomapfalchi">
        <img src="https://avatars.githubusercontent.com/u/85750919?v=4" width="100px;" alt="Foto do Pedro"/><br>
        <sub>
          <b>Paloma Patrícia Falchi</b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/WellingtonMax">
        <img src="https://avatars.githubusercontent.com/u/83736385?v=4" width="100px;" alt="Foto do Wellington"/><br>
        <sub>
          <b>Wellington L. Maximiniano</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

---

# Front-end Dev
<table>
  <tr>
   	<td align="center">
      	<a href="https://github.com/olirodrigues">
        <img src="https://avatars.githubusercontent.com/u/68714933?v=4" width="100px;" alt="Foto de Olivia Rodrigues"/><br>
        <sub>
          <b>Olivia Rodrigues</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Leox95">
        <img src="https://avatars.githubusercontent.com/u/90721193?v=4" width="100px;" alt="Foto de Leonardo Paixão"/><br>
        <sub>
          <b>Leonardo Paixão</b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/Marcos-Ignacio">
        <img src="https://avatars.githubusercontent.com/u/94194033?v=4" width="100px;" alt="Foto de Marcos Paulo Ignacio"/><br>
        <sub>
          <b>Marcos Paulo Ignacio</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


## 🤝 Contribuições

---
<p>Esse projeto só foi possível graças a contribuição de todos os envolvidos, a orientação dos professores da Gama Academy, a equipe de suporte da Gama e principalmente ao esforço colaborativo de toda a equipe ao longo de todo o projeto.<p\>

<h1> Gostou? Deixe uma estrelinha para ajudar o projeto ⭐ <h1\>

