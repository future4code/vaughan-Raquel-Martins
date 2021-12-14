// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

//    //  - **🎰**   Montando o jogo
    
//    //  Essa etapa do projeto consiste em criar um programa que:
    
//    //  1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
//     console.log("Boas vindas ao jogo de Blackjack!")
//    //  2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".
    
//    let userCard1 = comprarCarta()
//    let userCard2 = comprarCarta()

//    let computerCard1 = comprarCarta()
//    let computerCard2 = comprarCarta()

//    let userScore = userCard1.valor + userCard2.valor
//    let computerScore = computerCard1.valor + computerCard2.valor

// function startRound(){
//    if(confirm("Quer inciar uma nova rodada?")){
//       console.log(`Usuário - cartas: ${userCard1.texto} ${userCard2.texto} - ${userScore}`)
//       console.log(`Computador - cartas: ${computerCard1.texto} ${computerCard2.texto} - ${computerScore}`)
//       if(userScore > computerScore){
//          console.log("O usuário ganhou!")
//       }else if (computerScore > userScore){
//          console.log("O computador ganhou!")
//       } else if (userScore === computerScore){
//          console.log("Empate!")
//       }
//    }else {
//       console.log("O jogo acabou")
//    }
// }    

// startRound()

        
//    //      if(confirm("pergunta de sim ou não")) {
//    //      	// o que fazer se o usuário clicar "ok"
//    //      } else {
//    //      	// o que fazer se o usuário clicar "cancelar"
//    //      }
//    //      ```
        
    
//    //  3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
    
//    //  4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.