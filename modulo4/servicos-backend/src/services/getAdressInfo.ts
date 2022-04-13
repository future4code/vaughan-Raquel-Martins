import axios from 'axios';
import { Address } from '../types/Adress';

// - **Exercício 1**

//     Escreva uma função que receba um CEP, faça uma requisição para a url [https://viacep.com.br/ws/:cep/json/](https://viacep.com.br/ws/05424150/json/)  e retorne um objeto contendo:

//     - Logradouro
//     - Bairro
//     - Cidade
//     - Estado

const baseURL: string = 'https://viacep.com.br/ws';

export const getAdressInfo = async (
  zipcode: string
): Promise<Address | null> => {
  try {
    const response = await axios.get(`${baseURL}/${zipcode}/json/`);
    const adress: Address = {
      street: response.data.logradouro,
      district: response.data.bairro,
      city: response.data.localidade,
      state:  response.data.uf
    };
    return adress;
  } catch (error) {
    console.error('Erro no serviço getAddressInfo: ', error);
    return null;
  }
};
