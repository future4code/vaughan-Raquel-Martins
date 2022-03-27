export const exercicio6 = () => {
  [
    { cliente: 'João', saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: 'Paula', saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: 'Pedro', saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: 'Luciano', saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: 'Artur', saldoTotal: 1800, debitos: [200, 300] },
    { cliente: 'Soter', saldoTotal: 1200, debitos: [] },
  ];

  type Cliente = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];
  };

  const clientesNegativados = (clientes: Cliente[]): Cliente[] => {
    const soma = clientes.map((cliente) => {
      return cliente.debitos.reduce((prev, curr) => {
        return prev + curr;
      }, 0);
    });

    const clienteSaldoNegativo = clientes
      .map((cliente, i) => {
        const novoCliente = {
          ...cliente,
          saldoTotal: cliente.saldoTotal - soma[i],
        };
        return novoCliente;
      })
      .filter((cliente) => {
        return cliente.saldoTotal < 0;
      });
    console.log(clienteSaldoNegativo);
    return clienteSaldoNegativo;
  };

  clientesNegativados([
    { cliente: 'João', saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: 'Paula', saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: 'Pedro', saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: 'Luciano', saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: 'Artur', saldoTotal: 1800, debitos: [200, 300] },
    { cliente: 'Soter', saldoTotal: 1200, debitos: [] },
  ]);
};
