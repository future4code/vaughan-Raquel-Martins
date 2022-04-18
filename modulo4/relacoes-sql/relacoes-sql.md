```
-- EXERCÍCIO 1
-- a)Explique o que é uma chave estrangeira
-- No contexto dos banco de dados, o conceito de chave estrangeira ou chave externa se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas.

-- b)Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment_text TEXT NOT NULL,
score FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Films(id)
);

INSERT INTO Rating (id, comment_text, score, movie_id)
VALUES (
"001",
"Muito bom",
3,
"002"
);

INSERT INTO Rating (id, comment_text, score, movie_id)
VALUES (
"002",
"show",
2,
"003"
),
("003",
"muito bom",
8,
"004"
);
;

-- c)Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query

INSERT INTO Rating (id, comment_text, score, movie_id)
VALUES (
("004",
"muito bom",
8,
"009"
)
);

-- Error Code: 1136. Column count doesn't match value count at row 1	0.172 sec
-- Não foi encontrado o id 009 na coluna de filmes

-- d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Films DROP COLUMN rating;

-- e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

DELETE FROM Films
WHERE id = "003";

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21712985-raquel-martins`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Films` (`id`))	0.172 sec
-- Para deletar um item, precisamos deletar todas as referências dele antes.

-- EXERCÍCIO 2

-- a) Explique, com as suas palavras, essa tabela

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- Seria uma tabela de elenco do filme que possuirá 2 colunas, uma com id do filme e outra com id do ator referenciadas por duas chaves entrangeiras da tabela de Films e tabela de Actor

-- b) Crie, ao menos, 6 relações nessa tabela

INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("002", "006"),
("002", "007"),
("004", "007"),
("003","005" ),
("004", "006"),
("001", "002"),
("001", "001");

-- c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("010", "006");
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21712985-raquel-martins`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Films` (`id`))	0.140 sec
-- Não foi encontrado a chave estrangeira de referencia

-- d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

DELETE FROM Actor
WHERE id = "001";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21712985-raquel-martins`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.156 sec
--  Para deletar um item, precisamos deletar todas as referências dele antes.

-- EXERCÍCIO 3

SELECT * FROM Films
INNER JOIN Rating ON Films.id = Rating.movie_id;

-- a) Explique, com suas palavras, a query acima. O que é o operador ON?
-- A query a cima faz uma busca de dados da tabela Films e Rating, e junta os registros das duas tabelas em uma única tabela.
-- O operador ON é um uma condição pela qual as tabelas serão juntadas, nesse caso irá juntas os dados da coluna id de Films = a coluna movie_id de Rating.

 -- b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

SELECT title, score, movie_id FROM Films
INNER JOIN Rating ON Films.id = Rating.movie_id;

-- EXERCÍCIO 4

-- a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não).
-- A sua query deve retornar somente o nome, id, nota do filme e comentário

SELECT title, score, movie_id FROM Films
LEFT JOIN Rating ON Films.id = Rating.movie_id;

-- b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme.
-- A sua query deve retornar o id do filme, título do filme e id do ator

SELECT title, movie_id, actor_id FROM Films
INNER JOIN MovieCast ON Films.id = MovieCast.movie_id;

-- c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes
-- (mesmo que ele não tenha sido avaliado ainda)

SELECT AVG(Rating.score), movie_id, title FROM Films
LEFT JOIN Rating  ON Films.id = Rating.movie_id
GROUP BY (Films.id);


-- EXERCÍCIO 5

SELECT * FROM Films
LEFT JOIN MovieCast ON Films.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;



SELECT * FROM MovieCast;
SELECT * FROM Rating;

```
