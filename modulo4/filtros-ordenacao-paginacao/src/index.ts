import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { selectAllUsers, selectOrderBy, pagination } from './functions';

const app: Express = express();
app.use(express.json());
app.use(cors());

// //Exercício 1
app.get('/users', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 500;
  try {
    const name: string = req.query.name as string;
    const type: string = req.query.type as string;

    const users = await selectAllUsers(name, type);

    if (!users.length) {
      errorCode = 404;
      throw new Error('No recipes found');
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
});

//Exercício 2

app.get('/users2', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 500;
  try {
    let type: string = req.query.type as string;

    if (!type) {
      type = 'email';
    }
    if (
      type.toLowerCase() !== 'name' &&
      type.toLowerCase() !== 'email' &&
      type.toLowerCase() !== 'type'
    ) {
      errorCode = 422;
      throw new Error('invalid parameter');
    }
    let ordenation: string = req.query.ordenation as string;
    if (
      ordenation.toUpperCase() !== 'ASC' &&
      ordenation.toUpperCase() !== 'DESC'
    ) {
      ordenation = 'ASC';
    }

    const users = await selectOrderBy(type, ordenation);

    if (!users.length) {
      errorCode = 404;
      throw new Error('No recipes found');
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
});

//Exercício 3

app.get('/users3', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 500;
  try {
    let type: string = req.query.type as string;
    let ordenation: string = req.query.ordenation as string;
    let page : number = Number(req.query.page) as number

    if (type === undefined && ordenation === undefined) {
      type = 'email';
      ordenation = 'asc';
    }
    if (
      type.toLowerCase() !== 'name' &&
      type.toLowerCase() !== 'email' &&
      type.toLowerCase() !== 'type'
    ) {
      errorCode = 422;
      throw new Error('invalid parameter');
    }

    if (
      ordenation.toUpperCase() !== 'ASC' &&
      ordenation.toUpperCase() !== 'DESC'
    ) {
      ordenation = 'ASC';
    }

    const users = await pagination(type, ordenation, page);

    if (!users.length) {
      errorCode = 404;
      throw new Error('No recipes found');
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
});




//Exercício 4


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
