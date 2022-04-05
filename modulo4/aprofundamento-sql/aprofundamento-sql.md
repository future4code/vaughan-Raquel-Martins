````

SET SQL_SAFE_UPDATES = 0;
SELECT * FROM Actor;
-- Exercício 1 -
-- a) ALTER TABLE Actor DROP COLUMN salary;
-- R: Esse comando remove a coluna de salary da tabela Actor.

-- b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- R: Altera o nome da coluna gender para sex da tabela Actor.

-- c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- R: Altera o nome da coluna gender para gender e o valor para VARCHAR(255) 255 caracteres da tabela Actor.

-- d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
DESCRIBE Actor;

-- Exercício 2 -
-- a)Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
UPDATE Actor 
SET name = "Larissa Manoela",
birth_date = "2000-12-28"
WHERE id = "003";

-- b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor
SET name = UPPER(name)
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

-- c) Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor
SET 
name = "Juliana" , 
salary = 100000, 
birth_date = "1973-02-20" , 
gender = "female"
WHERE id = "005";
 
 -- d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.
 UPDATE Actor
SET name = "Abigail"
WHERE id = "006";
-- 13:32:43	UPDATE Actor SET name = "Abigail" WHERE id = "006"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.156 sec
-- 0 linhas foram afetadas e não encontrou nenhuma linha com id 006 para modificar o nome.

-- Exercício 3 -
-- a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


-- Exercício 4 -
-- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor; 

-- b) Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor
WHERE gender = "female";

-- c) Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) FROM Actor
WHERE gender = "female";

-- d) Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;


-- Exercício 5 -
-- a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- O select imprime, e o"COUNT(*), gender" conta todos os gender da tabela Actor
-- e o GROUP BY gender agrupa os dados pelos valores de gender, que são female e male

-- b)Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor ORDER BY name DESC;

-- c)Faça uma query que retorne todos os atores ordenados pelo salário
SELECT * FROM Actor ORDER BY salary ASC;

-- d)Faça uma query que retorne os atores com os três maiores salarios
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- e)Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;


-- Exercício 6 -
-- a)Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
ALTER TABLE Films
ADD playing_limit_date DATE;

SELECT * FROM Films;
DESCRIBE Films;

-- b)Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
ALTER TABLE Films
CHANGE score score FLOAT;

-- C)Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
UPDATE Films
SET playing_limit_date = "2000-12-03"
WHERE id = "004";

UPDATE Films
SET playing_limit_date = "2022-04-28"
WHERE id = "002";

-- d)Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
DELETE FROM Films 
WHERE id = "001";

UPDATE Films
SET synopsis = "teste teste teste"
WHERE id = "001";

-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
-- Ao rodar o código acima aparece essa msg pois não foi encontrado a linha com o dado id 001 na tabela Films.

-- Exercício 7
-- a)
SELECT COUNT(*) FROM Films
WHERE score > 7.5;

-- b)
SELECT AVG(score) FROM Films;

-- c)
SELECT COUNT(*) FROM Films
WHERE playing_limit_date > CURDATE();

-- d)
SELECT COUNT(*) FROM Films
WHERE release_date > CURDATE();

-- e)
SELECT MAX(score) FROM Films;

-- f)
SELECT MIN(score) FROM Films;

-- Exercício 8 -

-- a)
SELECT * FROM Films
ORDER BY title ASC;

-- b)
SELECT * FROM Films
ORDER BY title DESC
LIMIT 5;

-- C)
SELECT * FROM Films
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

-- d)
SELECT * FROM Films
ORDER BY score DESC
LIMIT 3;


````