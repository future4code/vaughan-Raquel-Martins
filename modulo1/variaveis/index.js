/* 
#Exercícios de interpretação de código
1. 
let a = 10
let b = 10

console.log(b) 
Irá aparecer o valor 10

b =5

console.log(a,b)
Irá aparecer o valor 10 e 5, pois a constante let pode ser alterada e foi atribuído um novo valor 
para ela, no caso, 5.


2.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

Será impresso reespectivamente (10 , 10, 10)

3. 
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

- Nomes melhores para variáveis  

let horasDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horasDia} por hora`)

O código pergunta ao usuário quantas horas por dia de trabalho e em seguida pergunta quanto recebe por dia, geralmente não sabemos
certinho quanto recebemos por dia, poderia perguntar quanto recebemos por mês, e assim fazer a conta
O ideal seria : 

 let jornadaDiaria = prompt("Quantas horas você trabalha por dia");
 let salarioMes = prompt("Quanto você recebe por mês");
 let diasPorSemana = prompt("Você trabalha quantos dias da semana");
 let diasPorMes = Number(diasPorSemana) * 4;
 let salarioPorDia = Number(salarioMes) / diasPorMes;
 let salarioHora = Number(jornadaDiaria) * diasPorMes;
 alert (`Você recebe ${salarioMes/salarioHora} por hora trabalhada`);


*/ 
 // # Exercícios de escrita de código

 // 1. Construindo um programa

 /*a)*/ const nome = prompt("Qual seu nome?");
 /*b)*/ const idade = prompt("Qual sua idade?");

/*c)*/ console.log(typeof nome)
       console.log(typeof idade)
/*d) O typeof são na forma de string pois tudo o que o usuário insere em um prompt, é na forma de string  */
/*e) Valores atribuídos:
let nome = Raquel  
let idade = 25 
*/ 
/*f) os typeof continuam do tipo string pois não fiz a conversão para número da idade, mas pode ser feita através do comando
let idadeNumero = Number(idade)
*/ 
/*g)*/console.log("Olá", nome, "você tem", idade, "anos")

// 2. Faça 3 perguntas de sim ou não 

let corDaRoupa = prompt("Você está usando azul hoje?")

let calorHoje = prompt("Está calor hoje?")

let aulaHoje = prompt("Assistiu aula hoje?")

//3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
/*
let a = 10
let b = 25

Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
*/
let a = 10
let b = 25


// Aqui faremos uma lógica para trocar os valores


c = a
a = b
b = c


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// DESAFIO


let num1 = prompt("Coloque um número")

let num2 = prompt("Coloque outro número")

/*1.*/
console.log(`O primeiro número somado ao segundo número resulta em: ${Number(num1) + Number(num2)} `)

/*2*/
console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${Number(num1) * Number(num2)}`)

