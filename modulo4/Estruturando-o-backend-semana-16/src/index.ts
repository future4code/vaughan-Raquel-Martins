import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { users } from './data';
import { networkInterfaces } from 'os';
const app = express();

app.use(express.json());
app.use(cors());

type User = {
  id: string;
  name: string;
  nickname: string;
  email: string;
};

app.post('/user', (req: Request, res: Response) => {
  let errorCode = 400;
  let userFounded = false;
  try {
    const { name, nickname, email } = req.body;
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

    for (let i = 0; i < users.length; i++) {
      if (users[i].nickname === nickname) {
        userFounded = true;
      }
    }

    if (userFounded) {
      errorCode = 409;
      throw new Error('Nickname already exists');
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      nickname,
      email,
    };

    users.push(newUser);
    res.status(201).send({ message: 'User created successfully' });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get('/user/:id', (req: Request, res: Response) => {
  let errorCode = 400;
  const id: string = req.params.id;
  let userFounded: boolean = false;
  let userInfo: any = undefined;
  try {
    if (isNaN(Number(id))) {
      errorCode = 422;
      throw new Error('Invalid value for id');
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        userFounded = true;
        userInfo = {
          name: users[i].name,
          nickname: users[i].nickname,
        };
      }
    }

    if (!userFounded) {
      errorCode = 404;
      throw new Error('User not found');
    }
    res.status(200).send(userInfo);
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
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        userFounded = true;
        users[i].name = name;
        users[i].nickname = nickname;
      }
    }

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
