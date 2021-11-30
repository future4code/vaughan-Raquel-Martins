// # Exercícios de interpretação de código

// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

/*

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)   

Resposta: "a. false", pois true && false é false.

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

Resposta:  "b. false", pois bool1 && bool2 dá false e bool3 que é !bool2 e bool2 é false, a negação de falso é true, 
sendo assim, false && true dá false.

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

Resposta: "c. true". Primeiro na ordem de precedência se resolve o que está entre parênteses, (bool1 || bool2), que resulta
em true pois apenas um dos valores é true, agora seguindo a ordem de precedência, resolve-se os operadores lógicos, sendo o
&& de maior precedência que o !, seguindo a linha do tempo o último valor atribuído para resultado é o false na questão b,
então, false && true, resultando em false, agora o !false, resultaria em em true, pois negação de false é true. 

console.log("d. ", typeof resultado)

Resposta: "d. boolean", pois é um resultado de true ou false.

*/

//2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  
// Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
/* 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Resposta: Ocorrerá concatenação e não a soma matemática de números, apenas o número digitado ficará junto um do outro sem executa a soma de fato,
pois tudo o que o usuário insere em um prompt, é uma string, sendo assim teria que fazer a conversão para number.
Exemplo: o usuário insere 1 no primeiro prompt e depois 2 no segundo, iria printar no console a soma o resultado 12, pois ocorreu a concatenação dos valores.

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

conversão de string para number
 const soma = Number(primeiroNumero) + Number(segundoNumero)
 console.log(soma)
 ou
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

console.log(primeiroNumero + segundoNumero)

*/

// # Exercícios de escrita de código

// 1. 1. Faça um programa que:
    
// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

const idadeUsuario = Number(prompt("Qual sua idade?"))

const idadeBFF = Number(prompt("Qual a idade do seu melhor amigo?"))

const isMaior = idadeUsuario > idadeBFF

const diferencaIdades = idadeUsuario - idadeBFF

console.log("Sua idade é maior do que a do seu melhor amigo?", isMaior)

console.log("A diferença da idade entre vocês é de", diferencaIdades, "anos")

// 2. Faça um programa que:
    
//     a) Peça ao usuário que insira um número **par**
    
//     b) Imprima na console **o resto da divisão** desse número por 2.
    
//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Resposta: Notei que ao adicionar o módulo 2 em qualquer número par o resultado é 0 pois não há sobras da divisão.

    
//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

//Resposta: Ao adicionar qualquer número impar o resultado é 1 que indica que houve restos na divisão pois é ímpar e 
//não divide por 2 sem ter números quebrados.

const numPar = Number(prompt("Insira um número par"))

console.log(numPar % 2)

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//     a) A idade do usuário em meses
    
//     b) A idade do usuário em dias
    
//     c) A idade do usuário em horas

const idadeEmAnos = Number(prompt("Qual sua idade em anos?"))

console.log("Sua idade em meses é", idadeEmAnos * 12, "meses de vida" )

console.log("Sua idade em dias é", idadeEmAnos * 12 * 30, "dias de vida")

console.log("Sua idade em horas é", idadeEmAnos * 12 * 30 * 24, "horas de vida")

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as 
// seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

const primeiroNumero = Number(prompt("Insira o primeiro número"))

const segundoNumero = Number(prompt("Insira o segundo número"))

console.log(`O primeiro número é maior que o segundo? ${primeiroNumero > segundoNumero}`)

let isIgual = primeiroNumero == segundoNumero

console.log("O primeiro número é igual ao segundo?", isIgual)

let isDivisivel1 = (primeiroNumero % segundoNumero) === 0

console.log("O primeiro número é divisível pelo segundo número", isDivisivel1)

let isDivisivel2 = (segundoNumero % primeiroNumero) === 0

console.log("O segundo número é divisível pelo primeiro número", isDivisivel2)

// ####### DESAFIO #######

// 1.Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  
// Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

// - Graus Fahrenheit(°F) para Kelvin(K)
    
//     (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
    
// - Graus Celsius(°C) para Graus Fahrenheit (°C)
    
//     (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.


 let grausFahrenheit = 77

 const fahrenheitToKelvin = (grausFahrenheit - 32) * (5/9) + 273.15

 console.log("O valor de", grausFahrenheit, "°F para Kelvin é de ", fahrenheitToKelvin, "K")

 //b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

 let grausCelsius = 80
 let celsiusToFahrenheit = grausCelsius * (9/5) + 32

 console.log("O valor de", grausCelsius, "°C para fahrenheit é de", celsiusToFahrenheit, "°F")

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

 grausCelsius = 30

celsiusToFahrenheit = grausCelsius * (9/5) + 32

 const fahrenheitToKelvinAPartirdoResultadodoCelsius = (celsiusToFahrenheit - 32) * (5/9) + 273.15
 


console.log("O valor de", grausCelsius, "°C para fahrenheit é de", celsiusToFahrenheit, "°F e para kelvin é de", 
fahrenheitToKelvinAPartirdoResultadodoCelsius, "K")

// Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let grausCelsiusUsuario = Number(prompt("Insira o valor de graus Celsius"))

const grausCelsiusUsuarioToFahrenheit = grausCelsiusUsuario * (9/5) + 32

console.log("O seu do usuário de",grausCelsiusUsuario, "°C graus celsius para fahrenheit é de", grausCelsiusUsuarioToFahrenheit, "°F")

const fahrenheitToKelvinUsuario = (grausCelsiusUsuarioToFahrenheit - 32) * (5/9) + 273.15


console.log("O valor do usuário de",grausCelsiusUsuario, "°C graus celsius para kelvin é de", fahrenheitToKelvinUsuario, "K" )

//2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
// Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

let quilowatt = 280 
const quiolowattValor = quilowatt * 0.05



console.log("O valor a ser pago por uma residência que consome 280 quilowatt-hora é de", quiolowattValor, "reais" )

// b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência 
//acima considerando 15% de desconto

const quilowattDesconto = quiolowattValor * (1 - 0.15)

console.log("O valor a ser pago após 15% de desconto na conta é de", quilowattDesconto, "reais")

//3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. 
//Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar 
//Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). 
//Dada essa introdução, faça o que se pede:

// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a 
//resposta no console da seguinte forma: 
// `20lb equivalem a X kg`

let libra = 20

let libraToKg = libra * 0.453592

console.log(`20lb equivalem a ${libraToKg} Kg`)

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a 
//resposta no console da seguinte forma: 
// `10.5oz equivalem a X kg`
let oz = 10.5
let ozToKg = oz * 0.0283495
console.log("10.5oz equivalem a",ozToKg,"Kg")

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// `100mi equivalem a X m`
let milha = 100
let milhaToMetro = milha * 1609.34
 console.log(`100mi equivlem a ${milhaToMetro}m`)
// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// `50ft equivalem a X m`
let pes = 50
let pesToMetro = pes * 0.3048
console.log(`50ft equivalem a ${pesToMetro}m`)

// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// `103.56gal equivalem a X l`
let galao = 103.56
let galaoToLitro = galao * 3.785
console.log(`103.53gal equivalem a ${galaoToLitro}L`)

// f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// `450 xic equivalem a X l`
let xicara = 450
let xicaraToLitro = xicara * 0.166667
console.log(`450 xic equivalem a ${xicaraToLitro}L`)
// g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da 
//unidade original antes de converter
 let xicaraUsuario = Number(prompt("Insira a unidade de xícaras para converter em litros"))
 let xicaraToLitroUsuario = xicaraUsuario * 0.166667
 console.log(`O valor de ${xicaraUsuario} xícaras equivalem a ${xicaraToLitroUsuario} litros`)


 //     UhUUUUUL \o/ Trabalho feito!