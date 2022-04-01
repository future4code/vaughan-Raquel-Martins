type Acquisition = {
    price: number,
    description: string,
    date: string
}

type User = {
  name: string,
  cpf: number,
  birthDate: string,
  balance: number,
  // extract: Acquisition[]
}

export const users: User[] = [
  {
    name: "Julia",
    cpf: 12098312399,
    birthDate: "09/01/2000",
    balance: 200,
    // extract: [{
    //   price:  100,
    //   description: "fone de ouvido" ,
    //   date: "20/12/2021",
    // }]
  }
]