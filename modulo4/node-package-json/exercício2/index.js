const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])

switch(operacao){
  case "add":
   console.log(valor1 + valor2)
    break
  case "sub":
    console.log(valor1 - valor2)
    break
  case "mult":
    console.log(valor1 * valor2)
    break
  case "div":
    console.log(valor1/valor2)
}