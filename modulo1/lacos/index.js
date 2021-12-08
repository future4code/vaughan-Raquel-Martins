// - **Exercícios de interpretação de código**
    
    
//     1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
        
        // let valor = 0
        // for(let i = 0; i < 5; i++) {
        //   valor += i
        // }
        // console.log(valor)

        // O valor é declarodo antes sendo igual a 0,
        //no loop o i = 0, o i tem que ser menor que 5 sendo a condição para continuar o loop, e a ação é adicionar +1 para o i a cada rodada de loop,
        //enquanto o i for menor de 5 a ação dentro do loop será executada, na qual é valor +=i, é pegar o valor e atribuir a somar com o valor de i,
        //Na primeira volta dará 0, 0 + 0 =1, depois na segunda volta o i será i = 1, ainda continuando dentro da condição, será executado q ação, 0 + 1, p valor será 1,
        //e o i agora será 2, 1 +2, valor = 3, i vale 3, 3+3= 6, valor agora é 6, i vale 4 agora, 6 + 4, valor vale 10, i agora vale 5 e não passa pelo loop pois a condição pede que ele 
        //seja menor que 5 para executar o loop, fim do loop e o console.log(valor), irá imprimir o valor do valor, que será 10

//     2. Leia o código abaixo:
        
        // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        // for (let numero of lista) {
        //   if (numero > 18) {
        // 		console.log(numero)
        // 	}
        // }
        
//         a) O que vai ser impresso no console?
        //Só será impresso se o numero for maior que 18, logo será impresso 19, 21, 23, 25, 27 e 30

//         b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
        //  Sim, consegue acessar o índice.
//     3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
        
        // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        // let quantidadeAtual = 0
        // while(quantidadeAtual < quantidadeTotal){
        //   let linha = ""
        //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        //     linha += "*"
        //   }
        //   console.log(linha)
        //   quantidadeAtual++
        // }
        
        
        /*
        O resultado mpresso ao digitar no prompt 4 será esse
        *
        **
        ***
        ****
        Enquanto a (quantidadeAtual for menor que 4 que é a quantidadeTotal do prompt, irá executar a ação abaixo, abaixo tem um loop, enquanto o asteriscos for menor que a quantidadeAtul +1, adicionar 
        mais 1 no asteriscos, linha += "*", console.log(linha), e a quantidadeAtual será somada com +1, na primeira rodada será impresso 1 asterisco, e o valor dele será 1 agora e a quantidade atual 1,
        irão passar pelo loop de novo, asteriscos continuará menor que a quantidade atual +1 (2), e no final adicionará mais 1, será impresso mais 1 no asterisco da linha, logo **, ocorrerá isso enquanto a
        quantidadeAtual seja menor que 4, sendo maior que 4 ou 4 o loop para.
        */
//         - 💡 Dica
            
//             <aside>
//             ⭐ Se tiver dificuldade para entender esse exercício, rode as duas primeiras iterações do loop no [pytutor](http://pythontutor.com/javascript.html#mode=edit)
            
// - **Exercícios de escrita de código**
//     1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
        
//         a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
        
//         b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
        
//         - 💡 Dica
            
//             <aside>
//             ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. 
//Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
            
//             </aside>
        
     
         const quantidadeDePets = Number(prompt("Insira a quantidade de pets"))
         const arrNomeDosPets = []

         if(quantidadeDePets > 0){
            for(let i = 0; i < quantidadeDePets; i ++ ){
                const nomePetUser = prompt("Qual o nome do seu pet?")
                
                arrNomeDosPets.push(nomePetUser)
            }
            console.log(`O nome dos animais são ${arrNomeDosPets}`)
         }else {
         console.log("Que pena! Você pode adotar um pet!")
     }
     console.log(arrNomeDosPets)
     
        
//         c) Por fim, imprima o array com os nomes dos bichinhos no console
        
//     2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
//realizando as operações pedidas:
const arrayOriginal = [10, 5 ,21, 15, 25, 31, 60, 40]

        
//         a) Escreva um programa que **imprime** cada um dos valores do array original.
function imprimirNumerosArray(array){
     for(let arr of array){
            console.log(arr)
        }
}
imprimirNumerosArray(arrayOriginal)
       
//         b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    //função
    function dividirPorDez(array){
        for(let arrayDivididoPorDez of array){
           console.log(`${arrayDivididoPorDez/10}`)
       }
    }

    dividirPorDez(arrayOriginal)
       
//         c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

const arrayPares = []
function criarNovoArrayPares (array) {
    for(let arr of array){
            if(arr % 2 === 0){
                arrayPares.push(arr)   
            }
            
        }
        console.log(arrayPares)
}

criarNovoArrayPares(arrayOriginal)
            

//         d) Escreva um programa que **crie** um novo array 
//          contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
        function criarNovoArrayIndice(array){
            const novoArray = []
            for(let i = 0; i < array.length; i++){
                console.log(`O elemento do index ${i} é: ${array[i]}`)
                novoArray.push(array)
            }
        }

        criarNovoArrayIndice(arrayOriginal)
//         e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

        function compararNumeroMaior(array){
            let maiorNumero = array[0]
            for(let i = 1; i < array.length; i++){
                if(maiorNumero < array[i]){
                    maiorNumero = array[i]
                }
            }
           console.log(`O maior número é ${maiorNumero}`) 
        }

        function compararNumeroMenor(array){
            let menorNumero = array[0]
            for(let i = 1; i < array.length; i++){
                if(menorNumero > array[i]){
                    menorNumero = array[i]
                }
            }
            console.log(`O menor número é ${menorNumero}`)
        }

        compararNumeroMaior(arrayOriginal)
        compararNumeroMenor(arrayOriginal)




            
//             Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior 
//que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.
            
//         - Exemplo de saídas esperadas
            
//             ```jsx
//             Este array será usado para exemplificar as respostas de todos os itens
//             const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
            
//             Resposta item a.
//             80
//             30
//             130
//             40
//             60
//             21
//             70
//             120
//             90
//             103
//             110
//             55
            
//             Resposta item b.
//             8
//             3 
//             13
//             4
//             6
//             2.1
//             7 
//             12
//             9
//             10.3
//             11 
//             5.5
            
//             Resposta item c.
//             [80, 30, 130, 40, 60, 70, 120, 90, 110] 
            
//             Resposta item d.
//             [ 'O elemento do índex 0 é 80',
//               'O elemento do índex 1 é 30',
//               'O elemento do índex 2 é 130',
//               'O elemento do índex 3 é 40',
//               'O elemento do índex 4 é 60',
//               'O elemento do índex 5 é 21',
//               'O elemento do índex 6 é 70',
//               'O elemento do índex 7 é 120',
//               'O elemento do índex 8 é 90',
//               'O elemento do índex 9 é 103',
//               'O elemento do índex 10 é 110',
//               'O elemento do índex 11 é 55' ]
            
//             Resposta e.
//             "O maior número é 130 e o menor é 21