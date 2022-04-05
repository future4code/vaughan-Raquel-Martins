```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18",
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);

INSERT INTO Actor (id, name, salary)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);

Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha: Está faltando os parâmentros

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18",
  "male"
);

Você tem um erro em sua sintaxe SQL; verifique o manual que corresponde à versão do seu servidor MySQL para a sintaxe correta para usar perto: Não tem name que é obrigatório.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  1979-03-26,
  "female"
);

Você tem um erro em sua sintaxe SQL; verifique o manual que corresponde à versão do seu servidor MySQL para a sintaxe correta para usar perto: Não tem name que é obrigatório.: valor de data fora do que foi pedido.


SELECT * FROM Actor;

SELECT id, salary from Actor ;

SELECT id, name from Actor WHERE gender = "male";

SELECT id, name from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary > 500000;

SELECT id, nome from Actor WHERE id = "002";  --> o correto é name


SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;


SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

SELECT * FROM Actor
WHERE (name like "%G%" OR name like "%g%");

SELECT * FROM Actor
WHERE (name like "%A%" OR name like "%a%" OR name like "%G%" OR name like "%g%") AND salary >= 350000 OR salary <= 900000;

```

##Filmes

```
CREATE TABLE Films (
id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis VARCHAR (255) NOT NULL,
    release_date DATE NOT NULL,
    score INT 
);

INSERT INTO Films (id, title, synopsis, release_date, score)
VALUES("001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos 
anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável 
e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Films (id, title, synopsis, release_date, score)
VALUES("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),
("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
),
("004",
"O Auto da Compadecida",
"As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens.",
"2000-09-10",
9
);

SELECT * FROM Films;
```
