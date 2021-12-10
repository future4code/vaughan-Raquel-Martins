// - **Exercícios de interpretação de código**
    
    
//     1.  Leia o código abaixo
        
        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" }
        // ]
        
        // const novoArrayA = usuarios.map((item, index, array) => {
        //    console.log(item, index, array)
        // })
        
//         a) O que vai ser impresso no console?
    //  Será impresso o nome e apelido de cada indice do array com o seu índice ao lado e depois será impresso o array todo em cada impressão terá esse padrão,
    // o conteudo do object no indice dele, o indice em que ele está e todos os outros itens da array.
    //{nome: 'Amanda Rangel', apelido: 'Mandi'} 0   <-- posição do array
        // apelido: "Mandi"
        // nome: "Amanda Rangel"
        // 0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
        // 1: {nome: 'Laís Petra', apelido: 'Laura'}
        // 2: {nome: 'Letícia Chijo', apelido: 'Chijo'}

//     2. Leia o código abaixo
        
        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]
        
        // const novoArrayB = usuarios.map((item, index, array) => {
        //    return item.nome
        // })
        
        // console.log(novoArrayB)
        
//         a) O que vai ser impresso no console?
        // O map irá percorrer a array usuarios e irá criar uma nova array sem modificar, mostrando apenas os valores da chave nome do array, irá imprimir,
        // ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
//     3. Leia o código abaixo
        
        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]
        
        // const novoArrayC = usuarios.filter((item, index, array) => {
        //    return item.apelido !== "Chijo"
        // })
        
        // console.log(novoArrayC)
        
//         a) O que vai ser impresso no console?
/*
O filter irá percorrer a array usuarios e criará uma nova array com modificações
nisso na const novoArrayC ele diz para retornar item.apelido !== "Chijo", em que os apelidos não podem ser iguais a Chijo, nisso
irá retornar todos os outros apelidos menos o apelido que seja igual a Chijo
["Mandi", "Laura"]
*/

// - **Exercícios de escrita de código**
//     1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
        
        const pets = [
           { nome: "Lupin", raca: "Salsicha"},
           { nome: "Polly", raca: "Lhasa Apso"},
           { nome: "Madame", raca: "Poodle"},
           { nome: "Quentinho", raca: "Salsicha"},
           { nome: "Fluffy", raca: "Poodle"},
           { nome: "Caramelo", raca: "Vira-lata"},
        ]
        
        
//         a) Crie um novo array que contenha apenas o nome dos doguinhos
        const nomesDosPets = pets.map((nomePet) =>{
            return nomePet.nome
        })
        console.log(nomesDosPets)
//         b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
        const cachorrosSalsichas = pets.filter((pet) => {
            return pet.raca === "Salsicha"
        })
        console.log(cachorrosSalsichas)
//         c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
        
//        
            
        const cachorroPoodles = pets.filter((pet) => {
            if(pet.raca === "Poodle"){
                return true
                
            }
        })
        const descontoDeTosa = cachorroPoodles.map((pet) =>{
            console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`)
        })
//     2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
        
        const produtos = [
           { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
           { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
           { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
           { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
           { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
           { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
           { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
           { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
           { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
           { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]
        

            
        
//         a) Crie um novo array que contenha apenas o nome de cada item
        const produtosNomes = produtos.map((produto) => {
            return produto.nome
        })
        console.log(produtosNomes)

//         b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
        const produtosNomesEPrecos = produtos.map((produto) =>{
             const desconto = Math.round(produto.preco * (1-0.05) *100) /100  
            return {nome: produto.nome, preco: desconto}
        })
        console.log(produtosNomesEPrecos)   

        const produtosNomesEPrecos2 = produtos.map((produto) =>{
            const desconto = Number((produto.preco * (1 - 0.05)).toFixed(2))  //Outra alternativa toFixed()
           return {nome: produto.nome, preco: desconto}
       })
       console.log(produtosNomesEPrecos2)   



//         c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
        
const categoriaBebidas = produtos.filter((produto) => {
    if(produto.categoria === "Bebidas"){
        return true
    }
})

const nomesBebidas = categoriaBebidas.map((bebida) => {
   return bebida.nome
})
console.log(nomesBebidas)

//         d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
        


const produtosYpe = produtos.filter((produto) => {
    if(produto.nome.includes("Ypê")){
        const ype = produto.nome
        return ype
    }
})

console.log(produtosYpe)
        
//         e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
        
const fraseComercialYpes = produtosYpe.map((produto) => {
    const frase = `Compre ${produto.nome} por R$${produto.preco}`
    return frase
})

console.log(fraseComercialYpes)


// - 🏅  Desafios
//     1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
        
        const pokemons = [
           { nome: "Bulbasaur", tipo: "grama" },
           { nome: "Bellsprout", tipo: "grama" },
           { nome: "Charmander", tipo: "fogo" },
           { nome: "Vulpix", tipo: "fogo" },
           { nome: "Squirtle", tipo: "água" },
           { nome: "Psyduck", tipo: "água" },
        ]
        
//         - ⭐  Resultados esperados em cada item
            
//             ```jsx
//             // item A
//             [
//               "Bellsprout", 
//               "Bulbasaur",
//               "Charmander",
//               "Psyduck", 
//               "Squirtle", 
//               "Vulpix"
//             ]
            
//             // item B
//             [
//                "grama",
//                "fogo",
//                "água",
//             ]
//             ```
            
        
//         a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
        
            
//             <aside>
//             ⭐ Pesquise sobre o método `sort()`
            
//             </aside>
   
    const pokemonsOrdemAlfabetica = pokemons.map((pokemon) => {
            const nome = pokemon.nome
            return nome
    })
console.log(pokemonsOrdemAlfabetica.sort())
  
//         b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
        
//         - 💡  Dica
            
//             <aside>
//             ⭐ Existem várias maneiras de resolver esse exercício! Pesquise outras funções de arrays ou utilize loops juntamente com o filter 😄
            
//             </aside>

const categoriasPokemons = pokemons.map((pokemon) => {
    const categoriaPoke = pokemon.tipo
    return categoriaPoke
})


const tiposPokeUnicos = new Set()

categoriasPokemons.forEach((tipos) => {
tiposPokeUnicos.add(tipos)
})

console.log([...tiposPokeUnicos.values()])