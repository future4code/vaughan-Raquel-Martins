import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import {
  createUser,
  getUserById,
  updateUserById,
  getAllUsers,
  createTask,
} from './functions';

const app = express();

app.use(express.json());
app.use(cors());

// Users

// 6. Pegar todos os usuários

app.get('/user/all', async (req: Request, res: Response): Promise<void> => {
  console.log('teste');
  let errorCode = 500;
  try {
    const allUsers = await getAllUsers();

    res.status(200).send({ users: allUsers });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//1. Criar usuário

app.post('/user', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const { name, nickname, email } = req.body;
    await createUser(name, nickname, email);

    if (!name || !nickname || !email) {
      errorCode = 422;
      throw new Error('Please check the fields!');
    }

    if (
      typeof name !== 'string' &&
      typeof nickname !== 'string' &&
      typeof email !== 'string'
    ) {
      errorCode = 422;
      throw new Error('Invalid values for name, nickname or email');
    }
    res.status(201).send({ message: 'User created successfully' });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//2.Pegar usuário pelo id

app.get('/user/:id', async (req: Request, res: Response) => {
  let errorCode = 400;
  const id: string = req.params.id;
  try {
    if (isNaN(Number(id))) {
      errorCode = 422;
      throw new Error('Invalid value for id');
    }
    const result = await getUserById(id);

    if (result === undefined) {
      errorCode = 404;
      throw new Error('User id not found');
    }
    console.log(result);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//3.Editar usuário

app.put('/user/edit/:id', async (req: Request, res: Response) => {
  let errorCode = 400;
  const id: string = req.params.id;
  const { name, nickname } = req.body;
  try {
    if (!name || !nickname) {
      errorCode = 422;
      throw new Error('Please check the fields!');
    }

    if (typeof name !== 'string' && typeof nickname !== 'string') {
      errorCode = 422;
      throw new Error('Invalid values for name or nickname');
    }
    if (isNaN(Number(id))) {
      errorCode = 422;
      throw new Error('Invalid value for id');
    }

    if ((await getUserById(id)) === undefined) {
      errorCode = 404;
      throw new Error('User id not found');
    }

    await updateUserById(id, name, nickname);

    res.status(200).send({ message: 'User data successfully changed' });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//4.Criar tarefa

app.post('/task', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 500;
  try {
    const { title, description, limitDate, creatorUserId } = req.body;
    if (!title || !description || !limitDate || !creatorUserId) {
      errorCode = 422;
      throw new Error('Please check the fields!');
    }

    if (
      typeof title !== 'string' &&
      typeof description !== 'string' &&
      typeof limitDate !== 'string' &&
      typeof creatorUserId !== 'string'
    ) {
      errorCode = 422;
      throw new Error('Invalid values');
    }

    if(title.length < 3 || description.length < 3){
      errorCode = 422
      throw new Error('title or description too short')
    }

    await createTask(title, description, limitDate, creatorUserId);
    res.status(201).send({ message: 'Task created successfully' });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app;
