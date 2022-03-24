export const exercicio4 = () => {

  // b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
  //fazendo um npm run start

  type pokemon = {
    name: string,
    types: string,
    healthPoints: number
  }
  
  const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
  }
  
  const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
  }
  
  const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
  }

}