export const exercicio1 = () => {
  // O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
  // a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
  // let minhaString : string
  // minhaString = 8
  //Ocorre um erro e o tipo number não pode ser atribuído a minhaString

  // b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja,
  //como criamos no typescript uma variável que aceite mais de um tipo de valor?
  // let meuNumero : number | string
  // meuNumero = '4'
  //Através do Union Type, as variáveis podem assumir valores de diferentes tipos.

  // c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
  // `nome`, que é uma string;
  // `idade`, que é um número;
  // `corFavorita`, que é uma string.
  // Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
  // d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

  type Pessoa = { nome: string; idade: number; corFavorita: string };

  enum corFavorita {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    INDIGO = 'índigo',
    VIOLETA = 'violeta',
  }
  let pessoaInfo = [];
  const pessoaInfo1: Pessoa = {
    nome: 'Julia',
    idade: 14,
    corFavorita: corFavorita.VIOLETA,
  };

  const pessoaInfo2: Pessoa = {
    nome: 'Amanda',
    idade: 24,
    corFavorita: corFavorita.LARANJA,
  };

  const pessoaInfo3: Pessoa = {
    nome: 'José',
    idade: 60,
    corFavorita: corFavorita.VERDE,
  };

  pessoaInfo.push(pessoaInfo1);
  pessoaInfo.push(pessoaInfo2);
  pessoaInfo.push(pessoaInfo3);
  console.table(pessoaInfo);
};
