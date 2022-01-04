```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let vezes = 0
  for(let i = 0; i< arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      vezes = vezes + 1
    }
  }
  if(vezes === 0){
    console.log("Número não encontrado")
    } else{
      console.log(`O número ${numeroEscolhido} aparece ${vezes}x `)
      }
}

contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5], 4)


contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5], 3)

```