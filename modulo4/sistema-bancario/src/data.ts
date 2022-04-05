

type User = {
  name: string,
  cpf: number,
  birthDate: string,
  balance: number,
  extract: any[],
}

export const users: User[] = [
  {
    name: "Julia",
    cpf: 12098312399,
    birthDate: "09/01/2000",
    balance: 200,
    extract: []
  },
  {
    name: "Amanda",
    cpf: 12098712392,
    birthDate: "30/08/1992",
    balance: 300,
    extract: []
  },
  {
    name: "Fernando",
    cpf: 12398712321,
    birthDate: "23/02/1986",
    balance: 1000,
    extract: []
  }
]