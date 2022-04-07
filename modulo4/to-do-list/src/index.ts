import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { createUser, getUserById } from './functions';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/users', async (req: Request, res: Response): Promise<void> => {
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

app.get('/users/:id', async (req: Request, res: Response) => {
  let errorCode = 400;
  const id: string = req.params.id;
  try {
    if (isNaN(Number(id))) {
      errorCode = 422;
      throw new Error('Invalid value for id');
    }

    res.status(200).send(await getUserById(id));
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});



app.put('/user/edit/:id', (req: Request, res: Response) => {
  let errorCode = 400;
  const id: string = req.params.id;
  let userFounded: boolean = false;
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
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].id === id) {
    //     userFounded = true;
    //     users[i].name = name;
    //     users[i].nickname = nickname;
    //   }
    // }

    if (!userFounded) {
      errorCode = 404;
      throw new Error('User not found');
    }
    res.status(200).send({ message: 'User data successfully changed' });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//Criar tarefa

app.post('/task', (req: Request, res: Response) => {
  let errorCode = 400;
  const { title, description, limitDate, creatorUserId } = req.body;
  if (!title || !description || !limitDate || !creatorUserId) {
    errorCode = 422;
    throw new Error('Please check the fields!');
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
