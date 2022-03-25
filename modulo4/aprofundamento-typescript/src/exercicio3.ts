export const exercicio3 = () => {
  const posts: { autor: string, texto: string }[] = [
    {
      autor: 'Alvo Dumbledore',
      texto: 'Não vale a pena viver sonhando e se esquecer de viver',
    },
    {
      autor: 'Severo Snape',
      texto: 'Menos 10 pontos para Grifinória!',
    },
    {
      autor: 'Hermione Granger',
      texto: 'É levi-ô-sa, não levio-sá!',
    },
    {
      autor: 'Dobby',
      texto: 'Dobby é um elfo livre!',
    },
    {
      autor: 'Lord Voldemort',
      texto: 'Avada Kedavra!',
    },
  ];

  type Post = {
    autor: string;
    texto: string;
  };

  const userPost: Post = {
    autor: 'Dobby',
    texto: 'Dobby é um elfo livre!',
  };
  console.log(userPost);

  function buscarPostsPorAutor(posts: {autor: string, texto:string}[], autorInformado: string) {
    return posts.filter((post): boolean => {
      console.log(post.autor === autorInformado)
      return post.autor === autorInformado;
    });
  }

  buscarPostsPorAutor(posts, 'Dobby')
  buscarPostsPorAutor(posts, 'Luisa')

};
