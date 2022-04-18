console.log("teste1")

const printHi  = async ():Promise<void> => { 
console.log("Oi")
}

setTimeout(printHi, 5000);

console.log("teste2")
