```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

const nomesAnimais = animais.map((animal) => {
  const nome = animal.nome
  
  return nome
})
 console.log(nomesAnimais)
return nomesAnimais
}

criarArrayNomesAnimais() 

```