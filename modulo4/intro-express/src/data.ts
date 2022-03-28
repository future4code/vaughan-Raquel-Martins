export const usuarios: User[] = [
  {
    id: 1,
    name: 'Adriana',
    phone: '928190987',
    email: 'adriana@gmail.com',
    website: 'www.adriana.com.br',
  },
  {
    id: 2,
    name: 'Eduardo',
    phone: '912346576',
    email: 'eduardo@gmail.com',
    website: 'www.eduardo.com.br',
  },
  {
    id: 3,
    name: 'Irani',
    phone: '998761234',
    email: 'irani@gmail.com',
    website: 'www.irani.com.br',
  },
  {
    id: 4,
    name: 'Oswaldo',
    phone: '932768976',
    email: 'oswaldo@gmail.com',
    website: 'www.oswaldo.com.br',
  },
];

type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
};

type Post = {
  usuarioId: number | string;
  id: number;
  title: string;
  body: string;
};

// Você acha melhor criá-los dentro ou fora do array de usuários?
// Justifique com comentários no código.
//Olhando pela documentação do jsonplaceholder, achei melhor criar outro
//vetor, pois na documentação está em outro vetor também.

export const posts: Post[] = [
  {
    usuarioId: 1,
    id: 1,
    title: 'reunião',
    body: 'Bom dia, pessoal, passando aqui pra lembrar que temos nossa reunião marcada as 15hrs',
  },
  {
    usuarioId: 2,
    id: 2,
    title: 'reunião',
    body: 'Certo, estarei presente',
  },
  {
    usuarioId: 3,
    id: 3,
    title: 'reunião',
    body: 'Certo, estarei presente',
  },
  {
    usuarioId: 4,
    id: 4,
    title: 'reunião',
    body: 'Surgiu um imprevisto aqui, não poderei participar da reunião. abraços',
  },
];
