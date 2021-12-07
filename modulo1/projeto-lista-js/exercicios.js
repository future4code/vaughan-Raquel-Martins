// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  num1 + num2
  return num1 + num2
}
soma(1,2)
console.log(soma(1,2))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Insira a altura do retângulo em cm"))
  const largura = Number(prompt("Insira a largura do retângulo em cm"))
const area = altura * largura
console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoNascimento = Number(prompt("Insira o ano em que você nasceu"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura**2)
}
console.log(calculaIMC(85, 1.8))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUser = prompt("Insira seu nome")
  const idadeUser = prompt("Insira sua idade")
  const emailUser = prompt("Insira o seu email")
  console.log(`Meu nome é ${nomeUser}, tenho ${idadeUser} anos, e o meu email é ${emailUser}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const coresFavoritas = []
  const cor1 = prompt("Insira a primeira cor favorita")
  const cor2 = prompt("Insira a segunda cor favorita")
  const cor3 = prompt("Insira a terceira cor favorita")
  coresFavoritas.push(cor1, cor2, cor3)
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 const metaDeIngressosASerVendido = custo / valorIngresso
 return metaDeIngressosASerVendido

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho = string1.length === string2.length
  return tamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElementoArray = array[array.length -1]
  return ultimoElementoArray

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
   const primeiro = array[0]
   const ultimo = array[array.length -1]
  array[0] = ultimo
  array[array.length -1] = primeiro
 return array

 }


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const isIgual = string1.toLowerCase() === string2.toLowerCase()
  return isIgual

}

// EXERCÍCIO 13
function checaRenovacaoRG(atual, nascimento, carteira) {
  atual = Number(prompt("Insira o ano atual"))
  nascimento = Number(prompt("Insira o ano de nascimento"))
  carteira = Number(prompt("Insira o ano de emissão da sua carteira de RG"))

  const idade = atual - nascimento
  const diferencaAnoEmissaoRG = atual - carteira
    if(idade <= 20 && diferencaAnoEmissaoRG === 5){
      console.log(true)
    } else if(idade > 20 && idade <= 50 && diferencaAnoEmissaoRG >= 10){
      console.log(true)
    }else if(idade > 50 && diferencaAnoEmissaoRG >= 15){
      console.log(true)
    }else {
     console.log(false)
    }
  }
    
  

//   const renovacao = idade <= 20 && diferencaAnoEmissaoRG === 5  
//   const renovacao2 = idade <=50 && diferencaAnoEmissaoRG === 10 
//   const renovacao3 =idade > 50 && diferencaAnoEmissaoRG === 15
//   console.log(renovacao,renovacao2,renovacao3)
// }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
if(ano % 400 === 0){
  console.log(true)
}else if(ano % 4 === 0 && ano % 100 !==0){
  console.log(true)
}else{
  console.log(false)
}}

checaAnoBissexto(2000)
checaAnoBissexto(2012)
checaAnoBissexto(1900) 
checaAnoBissexto(2001) 


  



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const isMaior = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const horarioDisponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  if(isMaior === "sim" && ensinoMedio === "sim" && horarioDisponivel === "sim"){
    console.log(true)
  }else {
    console.log(false)
  }
}