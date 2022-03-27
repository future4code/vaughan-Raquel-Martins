export const exercicio3 = () => {

  enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
  }

  const infoFilme = (nome:string, anoLancamento:number, genero: GENERO, nota?:number) => {
    
    let filme = {
      nome : nome,
      anoLancamento: anoLancamento,
      genero: genero,
    }

    if(nota){
      let filmeClone = {...filme, pontuacao:nota}
      console.log(filmeClone)
    }else{
      console.log(filme)
    }
   
  
  }
infoFilme("Duna", 2021, GENERO.ACAO, 74)
infoFilme("Duna", 2021, GENERO.ACAO)
}