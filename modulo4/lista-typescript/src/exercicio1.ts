export const exercicio1 = () => {

  const imprimeNomeEDataNascimento = (nome : string, data : string):string => {
    let arrData : string[]= data.split('/')
    let dia : string = arrData[0]
    let mes : string = arrData[1]
    let ano : string = arrData[2]
     
    console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
  }

  imprimeNomeEDataNascimento("Raquel", "22/09/1996")
}