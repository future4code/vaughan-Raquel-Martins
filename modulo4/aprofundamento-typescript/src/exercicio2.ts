export const exercicio2 = () => {
  function obterEstatisticas(numeros: number[]): {
    maior: number;
    menor: number;
    media: number;
  } {
    const numerosOrdenados = numeros.sort((a, b) => a - b);

    let soma = 0;

    for (let num of numeros) {
      soma += num;
    }

    const estatisticas: { maior: number; menor: number; media: number } = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length,
    };
    console.table(estatisticas);
    return estatisticas;
  }

  obterEstatisticas([2, 5, 4, 6, 7, 1, 10, 22, 19, 9, 100, 200]);
};
