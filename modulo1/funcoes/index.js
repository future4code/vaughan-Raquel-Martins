// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Leia o código abaixo
        
//        
//         function minhaFuncao(variavel) {
//         	return variavel * 5
//         }
        
//         console.log(minhaFuncao(2))
//         console.log(minhaFuncao(10))
//         ```
        
//         a) O que vai ser impresso no console?
//        10
 //       50
//         b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//          10
//          50         
//    Pois foi colocado return dentro da função, onde pode ser acessada no escopo global, se não tivesse o return daria undefined por causa do espoco global não conseguir acessar a function 
// e undefined por ser uma variavel que ainda não teria sido declarada no escopo global, todas variáveis que não são declarado no javascript quando incovada aparece undefined.
//   
//     2. Leia o código abaixo
        
//        
//         let textoDoUsuario = prompt("Insira um texto");
        
//         const outraFuncao = function(texto) {
//         	return texto.toLowerCase().includes("cenoura")
//         }
        
//         const resposta = outraFuncao(textoDoUsuario)
//         console.log(resposta)
//         ```
        
//         a. Explique o que essa função faz e qual é sua utilidade
//          A function anônima "outraFuncao" recebe o texto do usuário inserido no prompt, e lê em forma minúscula e procura a palavra "cenoura" no texto inserido pelo 
//          usuário e após isso, na linha de código é declarada uma variável resposta onde é inserido a função com o argumento textoDoUsuario, ou seja tudo que o usuário escrever 
//          após isso, o console.log imprime a resposta no qual imprime na tela true ou false, true para se conter a palavra cenoura ou false se não conter nenhuma palavra cenoura no texto inserido
//          pelo usuário no prompt.
//
//         b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//              i.   `Eu gosto de cenoura`          true
//              ii.  `CENOURA é bom pra vista`      true
//              iii. `Cenouras crescem na terra`    false


//     **Exercícios de escrita de código**
//     1. Escreva as funções explicadas abaixo:
        
//         a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
        
//         ```
//         "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//         ```
        
//         Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
        function informarDadosSemParametro(){
            console.log(`Eu sou ${pessoa}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)
        }
//         b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
        function informarDados(pessoa, idade, cidade, profissao){
            console.log(`Eu sou ${pessoa}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)
        }

        // const nomeUser = prompt("Qual o seu nome?")
        // const idadeUser = prompt("Qual a sua idade?")
        // const cidadeUser = prompt("Qual cidade você mora?")
        // const jobUser = prompt("Qual a sua profissão?")

        // const respostaUser = informarDados(nomeUser, idadeUser, cidadeUser, jobUser)
        // console.log(respostaUser)

//         Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
//         ```
        
//         - Exemplo
            
//             Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
            
//             `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`)
            
//         
         
        
//     2. Escreva as funções explicadas abaixo:
        
//         a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
//          Invoque a função e imprima no console o resultado.
   function somar(numero1, numero2){
       console.log(`A soma de ${numero1} + ${numero2} = ${numero1 + numero2}`)
        
   }
   const numero1User = Number(prompt("Insira um número"))
   const numero2User = Number(prompt("Insira outro número"))

   const resultadoSomaUser = somar(numero1User, numero2User)
   
        
//         b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
        function compararNumeros(numero1, numero2){
            console.log(`O primeiro número é maior ou igual ao segundo? ${numero1 >= numero2}`)
        }

        const resultadoComparacaoUser = compararNumeros(numero1User,numero2User)
        
//         c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
       const isPar = function identificarNumeroPar(numero){
        const resultado = numero % 2 === 0
        console.log(`O número da sorte escolhido é par? ${resultado}`)
        }
        const numeroIsParUser = Number(prompt("Insira um número da sorte"))

        const resultadoNumeroIsParUser = isPar(numeroIsParUser)
     
//         d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//          juntamente com uma versão dela em letras maiúsculas.
        function formatar(mensagem){
            mensagem = mensagemUser.toUpperCase()
            const tamanhoMensagem = mensagem.length

            console.log(mensagem, tamanhoMensagem)
        }

        const mensagemUser = prompt("Insira sua mensagem aqui")
        formatar(mensagemUser)
//     3. Crie uma função para cada uma das operações básicas (soma, 
//subtração, multiplicação e divisão). Em seguida, peça para o 
//usuário inserir dois números e **chame** essas 4 funções com esses
// valores inputados pelo usuário sendo o argumento. Por fim, mostre
// no console o resultado das operações:
        
//         ```
//         Números inseridos: 30 e 3
//         Soma: 33
//         Diferença: 27
//         Multiplicação: 90
//         Divisão: 10
//         ```
        
//         - 💡  Dica
            
//             <aside>
//             ⭐ Lembre-se de converter a 
//entrada do usuário para número antes de fazer os cálculos :)
            
//             </aside>

const primeiroNumero = Number(prompt("Insira um número"))
const segundoNumero = Number(prompt("Insira outro número"))

function somarNum(numero1, numero2){
return numero1 + numero2
}

function subtrair(numero1, numero2){
return numero1 - numero2
}

function multiplicar(numero1, numero2){
 return numero1 * numero2
}

function dividir(numero1, numero2){
return numero1/numero2
}


const somaUser = somarNum(primeiroNumero, segundoNumero)
console.log(`Soma: ${primeiroNumero} + ${segundoNumero} = ${somaUser}`)

const subtracao = subtrair(primeiroNumero, segundoNumero)
console.log(`Subtração: ${primeiroNumero} - ${segundoNumero} = ${subtracao}`)

const multiplicacao = multiplicar(primeiroNumero, segundoNumero)
console.log(`Multiplicação: ${primeiroNumero} x ${segundoNumero} = ${multiplicacao}`)

const divisao = dividir(primeiroNumero, segundoNumero)
console.log(`Divisão: ${primeiroNumero}/${segundoNumero} = ${divisao}`)