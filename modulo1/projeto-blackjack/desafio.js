/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const user = []
const computer =[]

   let userCard1 = comprarCarta()
   let userCard2 = comprarCarta()

   let computerCard1 = comprarCarta()
   let computerCard2 = comprarCarta()

const startGame = () => {
   if(confirm("Bem vindo ao jogo Blackjack! Quer iniciar uma rodada?")){
      user.push(comprarCarta())
      user.push(comprarCarta())
      computer.push(comprarCarta())
      computer.push(comprarCarta())
     if (user[0].valor + user[1].valor === 22 || computer[0].valor + computer[1].valor === 22){
        user = []
        computer = []
     }
   }else {
      alert("O jogo acabou")
   }
}
   

const end = () => {
   if(user.valor > computer.valor){
   alert("Parabéns você ganhou")
}else if(computer.valor > user.valor){
   alert("Não foi dessa vez")
}
}

function gameRound(funcao,funcao2) {
   
funcao()

if (confirm(`Suas cartas são ${user[0].texto} ${user[1].texto}. A carta revelada do computador é ${computer[0].texto}.` + "\n"+ "Deseja comprar mais uma carta?")){
user.push(comprarCarta())
computer.push(comprarCarta())
if (confirm(`Suas cartas são ${user[0].texto}${user[1].texto}${user[2].texto}. A carta revelada do computador é ${computer[0].texto}.` + "\n" + "Deseja comprar mais uma carta?")){
  

}else{
   funcao2()
}
}

}
gameRound(startGame, end)
