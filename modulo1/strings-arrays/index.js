// # - **Exercícios de interpretação de código**
    
    // Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    // 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
        
    //     let array
    //     console.log('a. ', array)
    //    a. null
    //     array = null
    //     console.log('b. ', array)
    //    b. null
    //     array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    //     console.log('c. ', array.length)
    //    c. 11
    //     let i = 0
    //     console.log('d. ', array[i])
    //    d. 3
    //     array[i+1] = 19
    //     console.log('e. ', array)
    //    e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
    //     const valor = array[i+6]
    //     console.log('f. ', valor)
    //    f. 6, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
        
    // 2. Leia o código abaixo com atenção 
        
    
    //     const frase = prompt("Digite uma frase")
        
    //     console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

        
    //     Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
  //  Será impresso --> SUBI NUM ÔNIBUS EM MIRROCOS, 27 <--
                        
//   - **Exercícios de escrita de código**

//   1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
      
//       O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
      
//       - 💡  Dica
          
//           <aside>
//           ⭐ Você pode fazer isso de duas formas:
//           - Concatenando as strings (com o sinal de +)
//           - Utilizando template strings (e envelopando a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
          
//           </aside>
const nomeDoUsuario = prompt("Insira seu nome")
const emailDoUsuario = prompt("Insira o seu email")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), "+ nomeDoUsuario)
//   2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
      const comidasFavoritas = ["Pizza", "Açaí", "Hambúrguer", "Banoffee", "Chocolate"]
//       a) Imprima no console o array completo
      console.log(comidasFavoritas)
//       b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
      console.log(`Essas são as minhas comidas preferidas:
      ${comidasFavoritas[0]}
      ${comidasFavoritas[1]}
      ${comidasFavoritas[2]}
      ${comidasFavoritas[3]}
      ${comidasFavoritas[4]}`)
//       c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. 
//Imprima no console a nova lista
      const comidaFavoritaUsuario = prompt("Qual a sua comida preferida?")

      comidasFavoritas[1] = comidaFavoritaUsuario
      console.log("Lista após mudança do segundo item",comidasFavoritas)
//   3. Faça um programa, seguindo os passos:
      
//       a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
      const listaDeTarefas = []
//       b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
        const tarefaUsuario1 = prompt("Qual a primeira tarefa que você precisa realizar hoje?")
        const tarefaUsuario2 = prompt("Qual a segunda tarefa que você precisa realizar hoje?")
        const tarefaUsuario3 = prompt("Qual a terceira tarefa que você precisa realizar hoje?")

    listaDeTarefas.push(tarefaUsuario1, tarefaUsuario2, tarefaUsuario3)
//       c) Imprima o array no console
          console.log("Lista de tarefas do usuário",listaDeTarefas)
//       d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
      const tarefaFeita = prompt("Digite o índice de uma tarefa que já realizou: 1, 2 ou 3")

//       e) Remova da lista o item de índice que o usuário escolheu.

    listaDeTarefas.splice(tarefaFeita -1, 1)
    
//       f) Imprima o array no consoleImprima no console
      console.log("Lista de Tarefas após a tarefa do usuário ser concluída",listaDeTarefas)

    //   - 🏅  Desafios
    // 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
    const fraseUsuario = prompt("Insira sua frase")

    const fraseUsuarioSemEspaco = fraseUsuario.replace(/\s+/g, "")
    //
    console.log(fraseUsuarioSemEspaco)

    console.log(fraseUsuarioSemEspaco.split(""))
    // 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa 
    //que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array


const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log("O abacaxi está localizado no índice",frutas.indexOf("Abacaxi"), "O tamanho do array é",frutas.length,"O conteúdo do array é", frutas)
