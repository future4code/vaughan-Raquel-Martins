export const exercicio4 = () => {

  enum SETORES {
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'
  }

  [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
    { nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
    { nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
    { nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
    { nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
    { nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
  ]

  type Person = {
    nome: string,
    salário: number,
    setor: SETORES,
    presencial: boolean
  }

 const pessoasMarketingPresencial = (pessoa: Person[]) => {
pessoa.filter((person)=>{
  return (person.setor === 'marketing' && person.presencial === true)
}).map((pessoa)=>{
  console.log(pessoa)
  return pessoa
})
 }

 pessoasMarketingPresencial([
  { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
  { nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
  { nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
  { nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
  { nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
  { nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
  { nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
])

}