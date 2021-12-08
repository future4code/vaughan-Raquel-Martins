// - **Exercícios de interpretação de código**
        
//     1.  Leia o código abaixo
        

//         const filme = {
//         	nome: "Auto da Compadecida", 
//         	ano: 2000, 
//         	elenco: [
//         		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//         		"Virginia Cavendish"
//         		], 
//         	transmissoesHoje: [
//         		{canal: "Telecine", horario: "21h"}, 
//         		{canal: "Canal Brasil", horario: "19h"}, 
//         		{canal: "Globo", horario: "14h"}
//         		]
//         }
        
//         console.log(filme.elenco[0])
//         console.log(filme.elenco[filme.elenco.length - 1])
//         console.log(filme.transmissoesHoje[2])

        
//         a) O que vai ser impresso no console?
//          Será impresso respectivamente: 
//          Matheus Nachtergaele
//          Virginia Cavendish
//          canal: "Globo", horario: "14h     

//     2. Leia o código abaixo
        
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//         a) O que vai ser impresso no console?
//          nome : "Juca" , idade : 3, raca : "SRD"        <-- Cachorro
//          nome : "Juba" , idade : 3, raca : "SRD"        <-- Gato             
//          nome : "Jubo" , idade : 3, raca : "SRD"        <-- Tartaruga             
//                     
//         b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//          A sintaxe dos três pontos antes do nome de um objeto é o espalhamento ou spread, na qual é possível realizar uma 
//          cópia inteira do objeto para outro e modificar ou adicionar outra propriedade sem alterar de fato o objeto original, 
//          apenas recriando outro com o molde do objeto a ser citado, mudando ou adicionando propriedades.
        
//     3. Leia o código abaixo
        
//         function minhaFuncao(objeto, propriedade) {
//         	return objeto[propriedade]
//         }
        
//         const pessoa = {
//           nome: "Caio", 
//           idade: 23, 
//           backender: false
//         }
        
//         console.log(minhaFuncao(pessoa, "backender"))
//         console.log(minhaFuncao(pessoa, "altura"))
        
//         a) O que vai ser impresso no console?
//          false para backender
//          undefined para altura.              
        
//         b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//          A função tem dois parâmetros e os valores colocados na função, o primeiro representa o objeto e o segundo a propriedade do objeto,
//          onde tem um valor de objeto nomeado como pessoa que contem informações como chave sobre o nome, idade e backender e os valores Caio, 23 e false para as respectivas chaves.
//          Ao inserir um console.log(minhaFuncao(pessoa, "backender")), irá printar no console a função será chamada como objeto pessoa e propriedade "backender", na qual 
//          existe no objeto da função, e mostrará o valor da chave que é false.
//          Ao inserir outro console.log(minhaFuncao(pessoa, "altura")), a função irá procurar altura no objeto pessoa e não encontrará, e irá dar undefined, pois esse valor não foi definido ainda
//          Será como um valor nativo no javaScript que ainda não foi declarado naquele escopo da minhaFuncao(objeto, propriedade).

//      **Exercícios de escrita de código**
//     1. Resolva os passos a seguir: 
        
//         a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
//          Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
        
//         // Exemplo de entrada
//         const pessoa = {
//            nome: "Amanda", 
//            apelidos: ["Amandinha", "Mandinha", "Mandi"]
//         }
        
//         // Exemplo de saída
//         "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
//         ```
        
//         - 💡  Dica
            
//             <aside>
//             ⭐ Não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!
            
//             </aside>


      const pessoa = {
                nome : "Raquel",
                apelidos : ["Quel", "Quequel", "Rah"]
      }
            console.log(`Eu sou ${pessoa.nome} mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

            function apresentar(pessoa){
                console.log(`Eu sou ${pessoa.nome} mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
            }

            apresentar(pessoa)

          
//         b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a 
//      função feita no item anterior passando como argumento o novo objeto
        
//         - 💡  Dica
            
//             <aside>
//             ⭐ Não lembra da sintaxe de espalhamento ou spread? Não tem problema!
            
//             Pode pesquisar a vontade! Nesse [link](https://blog.fellyph.com.br/javascript/spread-operator/) tem vários exemplos - e não se esqueçam que o Google é melhor amigo da pessoa desenvolvedora 💘
            
//             </aside>
            
        const novosApelidos = {
            ...pessoa,
            apelidos: ["Quelzinha", "Rachel" , "farminha"]
        }

        apresentar(novosApelidos)

//     2. Resolva os passos a seguir: 
        
//         a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

        const funcionario1 = {
            nome : "Mariana",
            idade : "22",
            profissao : "Estagiaria"
        }

        const funcionario2 = {
            nome : "Camila",
            idade : "35",
            profissao : "Farmacêutica"
        }
        
//         b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function relatarInformacoes(pessoa){

const caracteresNome = pessoa.nome.length
const caracteresProfissao = pessoa.profissao.length

const objectToArrayValores = Object.values(pessoa)

objectToArrayValores.push(caracteresNome, caracteresProfissao)

console.log(objectToArrayValores)

}

relatarInformacoes(funcionario1)
relatarInformacoes(funcionario2)

        
//         1. O valor de `nome`
//         2. O numero de caracteres do valor `nome`
//         3. O valor de `idade`
//         4. O valor de `profissão`
//         5. O numero de caracteres do valor `profissão`
//         - Exemplo
            

//             const pessoa = {
//             	nome: "Bruno", 
//               idade: 23, 
//             	profissao: "Instrutor"
//             }
            
//             minhaFuncao(pessoa)
            
//             // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
//             ```
            
        
//     3. Resolva os passos a seguir: 
        
//         a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []
        
//         b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
        const fruta1 = {
            nome : "Melância",
            disponibilidade : true
        }

        const fruta2 = {
            nome : "Melão",
            disponibilidade : true
        }

        const fruta3 = {
            nome : "Abacate",
            disponibilidade : true
        }


function adicionarCarrinho(fruta) {
    return carrinho.push(fruta)
}

adicionarCarrinho(fruta1)
adicionarCarrinho(fruta2)
adicionarCarrinho(fruta3)
            
        
//         d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
        
console.log(carrinho)
 
// DESAFIO  
// 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. 
// Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**
//     - Exemplo
        function perguntarAoUsuario(){
            const nome = prompt("Qual o seu nome?")
            const idade = prompt("Qual a sua idade?")
            const profissao = prompt("Qual a sua profissão?")

            const pessoa = {
                nome : nome,
                idade : idade,
                profissao : profissao
            }

            console.log(pessoa)
        }
        
        perguntarAoUsuario()
//         // Exemplo de entrada: "Lais", 26, "Instrutora"
//         // O que deve ser impresso no console: 
//         { nome: 'Lais', profissao: "Instrutora", idade: 26}

        
// 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. 
// A função deve retornar uma mensagem no seguinte modelo:
    
const filme1 = {
nome: "Fight Club",
ano : 1999
}

const filme2 = {
    nome: "Parasite",
    ano : 2019
    }

function compararFilmes(filme1, filme2){
    const diferencaAno = filme1.ano - filme2.ano
    const foiLancadoAntes = diferencaAno < 0 
    const lancadoNoMesmoAno = filme1.ano === filme2.ano

    console.log(`O primeiro filme foi lançado antes do segundo? ${foiLancadoAntes}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${lancadoNoMesmoAno}`)
}

compararFilmes(filme1, filme2)

//     O primeiro filme foi lançado antes do segundo? false
//     O primeiro filme foi lançado no mesmo ano do segundo? true

    
// 3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: 
// ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.

function recalcularEstoque(fruta) {
    const estoque = fruta.disponibilidade
    
const estoqueAtual = !estoque
console.log(estoqueAtual)
}

recalcularEstoque(fruta1)
recalcularEstoque(fruta2)
recalcularEstoque(fruta3)
