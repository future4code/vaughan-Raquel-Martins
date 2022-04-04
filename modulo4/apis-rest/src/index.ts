import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

//Exercício 1
//a. Qual método HTTP você deve utilizar para isso?
//Método GET
//b. Como você indicaria a **entidade** que está sendo manipulada?*
//'/users'

app.get('/users', (req: Request, res: Response) => {
  const allUsers = users.map((user) => user);
  res.status(200).send(allUsers);
});

//Exercício 2
//a. Como você passou os parâmetros de type para a requisição? Por quê?
//Por queryParams pois quero filtrar um tipo de informação dos usuários
//b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?

type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

app.get('/users/search', (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const type: UserType = req.query.type as UserType;

    const typeValidation: any = {
      [UserType.ADMIN]: true,
      [UserType.NORMAL]: true,
    };

    const user: User[] | undefined = users.filter((user) => {
      return user.type.toLowerCase() === type.toLowerCase();
    });
    if (!user) {
      errorCode = 404;
      throw new Error('User type not found');
    }

    // if (type.toLowerCase() === UserType.ADMIN.toLowerCase() || type.toLowerCase() === UserType.NORMAL.toLowerCase()) {
    //
    // }

    if (typeValidation[type.toUpperCase()]) {
      res.status(200).send(user);
    } else {
      errorCode = 422;
      throw new Error('User type not exist');
    }
  } catch (e: any) {
    res.status(errorCode).send({ message: e.message });
  }
});

//Exercício 3
//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
//Path parameter
//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app.get('/users/:name', (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.params.name;
    const user = users.find((user) => {
      return user.name === name;
    });

    if (!user) {
      errorCode = 404;
      throw new Error('User not found');
    }
    res.status(200).send(user);
  } catch (e: any) {
    res.status(errorCode).send({ message: e.message });
  }
});

//Exercício 4
//a. Mude o método do endpoint para `PUT`. O que mudou?
//Nada
// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//Não,

app.post('/users', (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { name, email, type, age } = req.body;
    if (!name || !email || !type || !age) {
      errorCode = 422;
      throw new Error('Plese check the fields!');
    }

    const typeValidation: any = {
      [UserType.ADMIN]: true,
      [UserType.NORMAL]: true,
    };

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    if (typeValidation[type.toUpperCase()]) {
      res.status(200).send(users);
    } else {
      errorCode = 422;
      throw new Error('User type not exist');
    }
  } catch (e: any) {
    res.status(errorCode).send({ message: e.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
