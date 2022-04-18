// - **Exercício 3**

//     Refatore o endpoint de cadastro para que ele receba, também, as
//     informações básicas de endereço do usuário (CEP, número e complemento)
//     e preencha todos os campos da tabela criada no exercício anterior.
import { Request, Response } from 'express';
import { createUserSQL } from '../data/functions';
import { getAdressInfo } from '../services/getAdressInfo';
import { UserInfo, Address } from '../types/Adress';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { zipcode, email, password, number, complement } = req.body;

    if (!zipcode || !email || !password || !number) {
      throw new Error('Please, check the fields');
    }

    const address = await getAdressInfo(zipcode);
    if (!address) {
      throw new Error('Error on get address');
    }

    const formatedResult = async (
      obj: Address,
      email: string,
      zipcode: string,
      number: string,
      complement: string
    ) => {
      const userInfo: UserInfo = {
        email: email,
        zipcode: zipcode,
        street: obj.street,
        district: obj.district,
        city: obj.city,
        state: obj.state,
        complement: complement,
        number: number,
      };
      return userInfo;
    };

    await createUserSQL(
      await formatedResult(address, email, zipcode, number, complement)
    );

    res.status(201).send({ message: 'User created successfully' });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};
