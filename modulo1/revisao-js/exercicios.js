// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const apenasNumPares = array.filter((num) =>{
      return num % 2 === 0
  })
  return apenasNumPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const apenasNumerosPares = array.filter((num) =>{
        return num % 2 === 0
    })
    let numero =[]
   for(num of apenasNumerosPares){
       const calculo = num ** 2
       numero.push(calculo)
   }
   return numero
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for(let i = 1; i < array.length; i++){
        if(maiorNumero < array[i]){
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objetoValores = {}
let menorNumero  
if(num1> num2){
    objetoValores.maiorNumero = num1
    menorNumero = num2
    
}else{
    objetoValores.maiorNumero = num2
    menorNumero = num1
    
}

objetoValores.maiorDivisivelPorMenor = objetoValores.maiorNumero % menorNumero === 0

objetoValores.diferenca = objetoValores.maiorNumero - menorNumero

return objetoValores

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    num = []

   for(i = 0; i < n * 2; i = i +2){
     num.push(i)  
   }
  return num
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoA === ladoC){
    return "Equilátero"
}else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    return "Isósceles"
}else{
    return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArr =[]
  let max = Math.max(...array)
  let min = Math.min(...array)
let novoArr2 = []

if(array.length === 2){
    if(array[0] < array[1]){
        novoArr2.push(array[0], array[1])
    }else{
        novoArr2.push(array[1], array[0]) 
    }
    return novoArr2
}

let posicaoMax = array.indexOf(max)
let posicaoMin = array.indexOf(min)

array.splice(posicaoMax,1)
array.splice(posicaoMin,1)
let segundoMenor = array[0]
let segundoMaior = array[0]
for(let i = 1; i < array.length; i++){

    if(array[i] < segundoMenor){
     segundoMenor = array[i]
    }else if(array[i] > segundoMaior){
    segundoMaior = array[i]
    }
}
novoArr.push(segundoMaior, segundoMenor)

return novoArr
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const autorizadas = pessoas.filter((pessoa) =>{
       return ((pessoa.idade > 14 && pessoa.idade < 60) && pessoa.altura >= 1.5)
   })
   return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizadas = pessoas.filter((pessoa) =>{
        return !((pessoa.idade > 14 && pessoa.idade < 60) && pessoa.altura >= 1.5)
    })
    return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}