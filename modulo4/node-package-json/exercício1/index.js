// a) Como fazemos para acessar os parâmetros passados 
// na linha de comando para o Node?
//Por meio de variáveis, as quais devem guardar o índice do valor passado 
//no node e salvando em uma variável o valor de process.argv[número do índice que você quer mandar pelo terminal]

const nome = process.argv[2]
const idade = Number(process.argv[3])

//Exercício b:

// console.log(`Olá ${nome}! Você tem ${idade} anos.`)

//Exercício c:

console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)