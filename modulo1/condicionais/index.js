// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Leia o código abaixo:
        

//         const respostaDoUsuario = prompt("Digite o número que você quer testar")
//         const numero = Number(respostaDoUsuario)
        
//         if (numero % 2 === 0) {
//           console.log("Passou no teste.")
//         } else {
//           console.log("Não passou no teste.")
//         }

        
//         a) Explique o que o código faz. Qual o teste que ele realiza? 
//          O código verifica se o número enviado pelo usuário é par ou não.
//          Relizando o teste de se o numero % 2 === 0, verificando se o número módulo 2 não tem sobras na divisão, logo se ele é par
//          Por exemplo:  
//          4 % 2 === 0  //true --> passa no teste
//          3 % 2 === 0 //false --> não passa no teste
        
//         b) Para que tipos de números ele imprime no console "Passou no teste"? 
//            Números pares, pois todos os números pares possuem como resultado de % 2 o 0        
//         c) Para que tipos de números a mensagem é "Não passou no teste"? 
//            Números impars não passam no teste, pois o resultado deles no % 2 será igual a 1        
//     2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
        
//         let fruta = prompt("Escolha uma fruta")
//         let preco
//         switch (fruta) {
//           case "Laranja":
//             preco = 3.5
//             break;
//           case "Maçã":
//             preco = 2.25
//             break;
//           case "Uva":
//             preco = 0.30
//             break;
//           case "Pêra":
//             preco = 5.5
//             break; // BREAK PARA O ITEM c.
//           default:
//             preco = 5
//             break;
//         }
//         console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

        
//         a) Para que serve o código acima?
        // O código acima do tipo switch case, após o usuário inserir a fruta no prompt esse valo irá percorrer todo o switch case até achar um match exatamente igual ao do usuário
//         caso encontrar o mesmo nome igual com letra maiuscula e minuscula, acento, irá falar a fruta encontra e o preço da fruta conforme o valor armazenado no switch case, 
//          caso nenhum valor seja encontrado, ele irá rodar o default em que no console.log irá imprimir o nome da fruta do usuário e com o preço do default que seria 5.

//         b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
 //           O preço da fruta , Maçã é R$  2.25      
//         c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//           O preço da fruta , Pêra é R$ 5, pois sem o break em cima do default o código iria roda até o break abaixo do preco do default, reatribuindo o valor preco para = 5.

//     3. Leia o código abaixo:
        
//         const numero = Number(prompt("Digite o primeiro número."))
        
//         if(numero > 0) {
//           console.log("Esse número passou no teste")
//         	 let mensagem = "Essa mensagem é secreta!!!"
             
//         }
        
//         console.log(mensagem)
// //         ```
        
//         a) O que a primeira linha está fazendo?
        // Pedindo para o usuário digitar um número e já converte a string para número,
        // em seguinda o if verifica se o numero inserido pelo usuario no prompt é maior que 0, se isso for true, irá imprimir no console que esse número passou no teste.


//         b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//          Ao inserir 10 irá aparecer a mensagem no terminal que Esse número passou no teste, se for -10 não irá aparecer nada, e em todos os casos haverá um erro pois 
//          depois tem um console.log(mensagem), e o erro será porque o mensagem não foi declarado no escopo glogal, apenas no escopo do if e está invisível para o global, pois não existe lá.      
//         c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//          a variável mensagem só existe no escopo do if, ao tentar chamar ela pelo console.log não será possível pois o javascript entende que essa variavel mensagem não existe,
//           pois não foi declarada no escopo global, apenas dentro de outro escopo menor em que o global não tem acesso.


// - **Exercícios de escrita de código**
//     1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
//         a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        const idadeUsuario = Number(prompt("Qual a sua idade?"))

//         b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
//         c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console 
//  `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
        
    function podeDirigir(idade){
        if(idade >= 18){
            console.log("Você pode dirigir")
        }else{
            console.log("Você não pode dirigir")
        }
    }

    podeDirigir(idadeUsuario)


//     2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
//     Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
//         - 💡 Dica
            
//             <aside>
//             ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
//             Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)
            
//             </aside>
            
//             Se o usuário digitar "V", a saída deve ser:
            
//             ```
//             "Boa Tarde!"
//             ```
            const turnoEscolar = prompt("Insira o turno do dia em que você estuda, para matutino insira M, para Vespertino insira V e para noturno insira N")
            const turnoEscolarLowerCase = turnoEscolar.toLowerCase()
            if(turnoEscolarLowerCase === "m"){
                console.log("Bom dia!")
            }else if (turnoEscolarLowerCase === "v"){
                console.log("Boa tarde!")
            }else if(turnoEscolarLowerCase === "n"){
                console.log("Boa noite!")
            }else{
                console.log("Bom dia Brasil! Boa tarde Itália!")
            }
          


        
//     3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

switch (turnoEscolar){
    case "M":
        console.log("Bom dia!")
        break
     case "V":
         console.log("Boa tarde!")
         break
     case "N":
         console.log("Boa noite!")
         break
     default :
     console.log("Bom dia Brasil! Boa tarde Itália!")
}
        
//     4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está 
//abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai 
//topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, 
//      caso contrário, imprima `"Escolha outro filme :("`

const filmGenresUser = prompt("Qual gênero de filme que vão assistir?")
const ticketPrice = Number(prompt("Qual o preço do ingresso?"))

function toWatchFilm(genre, price){
const fantasia = "fantasia"
    if (genre === fantasia && price < 15){
        console.log("Bom filme!")
    }else{
        console.log("Escolha outro filme :(")
    }

}

toWatchFilm(filmGenresUser,ticketPrice)

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, ]
//pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as
// mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.
//     - Exemplo
        
//         Entradas: `"fantasia"` | `"10"`
        
//         Saída:
        
//         ```
//         [prompt] Qual snack que você quer comprar?
//         ```
        
//         Entrada: `"chocolate"`
        
//         Saída:
        
//         ```
//         "Bom filme!"
//         "Aproveite o seu chocolate"
//         ```
        
const filmGenresUser2 = prompt("Qual gênero de filme que vão assistir?")
const ticketPrice2 = Number(prompt("Qual o preço do ingresso?"))
const snackUser = prompt("Qual lanchinho você vai comprar?")

function toWatchFilm(genre, price){
const fantasia = "fantasia"
    if (genre === fantasia && price < 15){
        const snackUser = prompt("Qual lanchinho você vai comprar?")
        console.log(`Bom filme!`)
        console.log(`Aproveite o seu ${snackUser}`)
        console.log(snack)
    }else{
        console.log("Escolha outro filme :(")
    }

}

toWatchFilm(filmGenresUser2,ticketPrice2)
        
    
// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
    
//     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o 
//valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de 
//execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
    
let domestico = [{
    semifinal : {
        1 : 1320,
        2 : 880,
        3 :550,
        4 :220,
    },
    
    decisaoterceiro : {
        1 : 660,
        2 : 440,
        3 :330,
        4 :170,
    },
    final : {
        1 : 1980,
        2 : 1320,
        3 : 880,
        4 : 330,
    }

}]
const nomeCompleto = prompt("Insira o nome completo")
const tipoDeJogo = prompt("Insira o tipo de jogo que você que você quer assistir, escreva IN para internacional e DO para doméstico")
const etapaDoJogo = prompt("Insira SF para semi-final, DT para decisão de terceiro lugar e FI para final")
const categoriaJogo = Number(prompt("Insira ao número da categoria abaixo, as opções são: 1, 2, 3 ou 4"))
const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"))


function calcularCompra(nome, tipo, etapa, categoria, quantidade){


if(tipo === "IN"){
tipo = "internaconal"
}else{
 tipo = "domestico"
}

if(etapa === "SF"){
etapa = "semifinal"
}else if(etapa === "DT"){
etapa = "decisaoterceiro"
}else{
etapa = "final"
}

if(categoria === 1){
categoria =1
}else if (categoria === 2){
categoria =2
}else if(categoria ===3){
categoria = 3
}else if (categoria === 4){
categoria =4
}

const valor = Object.values(tipo.etapa.categoria)
console.log(`
---Dados da compra--- 
Nome do cliente: ${nome}
Tipo do jogo: ${tipo}
Etapa do jogo: ${etapa}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidadeIngressos} ingressos
---Valores--- 
Valor do ingresso: R$ ${valor}
Valor total: ${quantidade * valor}
`)
}

calcularCompra(nomeCompleto,tipoDeJogo,etapaDoJogo, categoriaJogo,quantidadeIngressos)