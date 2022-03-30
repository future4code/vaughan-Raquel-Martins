export const exercicio2 = () => {

  const imprimeTipo = (param:any):any => {
   let tipo = typeof param 
   console.log(tipo)
   return tipo
  }

  imprimeTipo(true)
  imprimeTipo("olá")
  imprimeTipo(13)
  imprimeTipo(undefined)
  imprimeTipo(() => { console.log("oi")})
}