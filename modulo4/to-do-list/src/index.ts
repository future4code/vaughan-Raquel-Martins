import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import {
  createUser,
  getUserById,
  updateUserById,
  getAllUsers,
  createTask,
  getTaskById,
  getTaskByCreatorId,
  giveResponsibility,
  getResponsibleTask,
  deleteResponsibleTask,
} from './functions';

const app = express();

app.use(express.json());
app.use(cors());

// Users

// 6. Pegar todos os usuários

app.get('/user/all', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 500;
  try {
    const allUsers = await getAllUsers();

    res.status(200).send({ users: allUsers });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// 8. Pesquisar usuário

app.get('/user', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 500;
  try {
    const query: string = req.query.query as string;
    if (!query) {
      errorCode = 422;
      throw new Error('Please check the fields!');
    }
    const allUsers = await getAllUsers();

    const searchUser = await allUsers
      .filter((user: any) => {
        return user.nickname.toLowerCase().includes(query.toLowerCase());
      })
      .map((user: any) => {
        const users = {
          id: user.id,
          nickname: user.nickname,
        };
        return users;
      });

    res.status(200).send({ users: await searchUser });
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
  let currentYear = new Date().getFullYear();
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

    if ((await getUserById(creatorUserId)) === undefined) {
      errorCode = 404;
      throw new Error('User id not found');
    }

    if (
      isNaN(Number(limitDate.slice(0, 2))) ||
      isNaN(Number(limitDate.slice(3, 5))) ||
      isNaN(Number(limitDate.slice(-4)))
    ) {
      errorCode = 422;
      throw new Error('Invalid value for date, must be DD/MM/YYYY');
    }

    if (
      !(
        Number(limitDate.slice(0, 2)) <= 31 &&
        limitDate.slice(2, 3) === '/' &&
        Number(limitDate.slice(3, 5)) <= 12 &&
        limitDate.slice(5, 6) === '/' &&
        Number(limitDate.slice(-4)) >= currentYear
      )
    ) {
      errorCode = 422;
      throw new Error('Invalid format or value for date, must be DD/MM/YYYY');
    }

    if (title.length < 3 || description.length < 3) {
      errorCode = 422;
      throw new Error('title or description too short');
    }

    const newFormatDate = (date: string): string => {
      let day = date.slice(0, 2);
      let mounth = date.slice(3, 5);
      let year = date.slice(-4);
      let newDate = `${year}-${mounth}-${day}`;
      return newDate;
    };

    await createTask(
      title,
      description,
      newFormatDate(limitDate),
      creatorUserId
    );
    res.status(201).send({ message: 'Task created successfully' });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//5.Pegar tarefa pelo id da tarefa
//11. Pegar tarefa pelo id

app.get('/task/:id', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 500;
  try {
    const id: string = req.params.id;
    const taskById = await getTaskById(id);

    const getResponsible = await getResponsibleTask(id);

    const takeUsersResponsible = async (obj: any) => {
      const arrUsersId = [...obj];

      const usersIdList = arrUsersId.map((obj) => {
        return obj.responsible;
      });

      const allUsers = await getAllUsers();
      let usersMatch: any[] = [];

      for (let i = 0; i < allUsers.length; i++) {
        for (let j = 0; j < usersIdList.length; j++) {
          if (allUsers[i].id === usersIdList[j]) {
            usersMatch.push({
              id: allUsers[i].id,
              nickname: allUsers[i].nickname,
            });
          }
        }
      }

      return usersMatch;
    };

    const formatedResult = async (obj: any): Promise<any> => {
      const newFormatDate = (date: Date): string => {
        let dateFormat = date.toISOString().split('T')[0];
        let day = dateFormat.slice(-2);
        let mounth = dateFormat.slice(5, 7);
        let year = dateFormat.slice(0, 4);
        let newDate = `${day}/${mounth}/${year}`;
        return newDate;
      };

      let userId = obj.creatorUserId;
      const infoUser = await getUserById(userId);

      let taskInfo = {
        ...obj,
        limitDate: newFormatDate(obj.limitDate),
        creatorUserNickname: infoUser.nickname,
        responsibleUsers: await takeUsersResponsible(getResponsible),
      };
      return taskInfo;
    };

    if (taskById === undefined) {
      errorCode = 404;
      throw new Error('Task id not found');
    }

    res.status(200).send(await formatedResult(taskById));
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// 7. Pegar tarefas criadas por um usuário

app.get('/task', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 500;
  try {
    const creatorUserId: string = req.query.creatorUserId as string;
    if (!creatorUserId) {
      errorCode = 422;
      throw new Error('Check the fields');
    }

    const formatedResult = async (arr: any): Promise<any> => {
      const newFormatDate = (date: Date): string => {
        let dateFormat = date.toISOString().split('T')[0];
        let day = dateFormat.slice(-2);
        let mounth = dateFormat.slice(5, 7);
        let year = dateFormat.slice(0, 4);
        let newDate = `${day}/${mounth}/${year}`;
        return newDate;
      };

      const infoUser = await getUserById(creatorUserId);
      if (infoUser === undefined) {
        errorCode = 404;
        throw new Error('User not found');
      }

      const listTasks = arr.map((task: any) => {
        let taskInfo = {
          ...task,
          limitDate: newFormatDate(task.limitDate),
          creatorUserNickname: infoUser.nickname,
        };
        return taskInfo;
      });

      return listTasks;
    };

    const result = await getTaskByCreatorId(creatorUserId);

    const wasFound = async () => {
      if (result === undefined) {
        return [];
      } else {
        return await formatedResult(result);
      }
    };

    res.status(200).send({ tasks: await wasFound() });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//9. Atribuir um usuário responsável a uma tarefa

app.post(
  '/task/responsible',
  async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500;
    try {
      const { taskId, responsibleUserId } = req.body;
      if (!taskId || !responsibleUserId) {
        errorCode = 422;
        ('Please check the fields!');
      }

      if (typeof taskId !== 'string' && typeof responsibleUserId !== 'string') {
        errorCode = 422;
        throw new Error('Invalid values');
      }

      const userFound = await getUserById(responsibleUserId);
      if (userFound === undefined) {
        errorCode = 404;
        throw new Error('User id not found');
      }

      const taskFound = await getTaskById(taskId);
      if (taskFound === undefined) {
        errorCode = 404;
        throw new Error('Task id not found');
      }

      await giveResponsibility(taskId, responsibleUserId);

      res.status(201).send({ message: 'Task delegated to user successfully!' });
    } catch (error: any) {
      res.status(errorCode).send({ message: error.message });
    }
  }
);

//10. Pegar usuários responsáveis por uma tarefa

app.get(
  '/task/:id/responsible',
  async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500;
    try {
      const id = req.params.id;
      const taskFoundList = await getResponsibleTask(id);
      if (taskFoundList === undefined) {
        errorCode = 404;
        throw new Error('Not found');
      }

      const takeUsersResponsible = async (obj: any) => {
        const arrUsersId = [...obj];

        const usersIdList = arrUsersId.map((obj) => {
          return obj.responsible;
        });

        const allUsers = await getAllUsers();
        let usersMatch: any[] = [];

        for (let i = 0; i < allUsers.length; i++) {
          for (let j = 0; j < usersIdList.length; j++) {
            if (allUsers[i].id === usersIdList[j]) {
              usersMatch.push({
                id: allUsers[i].id,
                nickname: allUsers[i].nickname,
              });
            }
          }
        }

        return usersMatch;
      };

      res
        .status(200)
        .send({ users: await takeUsersResponsible(taskFoundList) });
    } catch (error: any) {
      res.status(errorCode).send({ message: error.message });
    }
  }
);

//15. Retirar um usuário responsável de uma tarefa
app.delete(
  '/task/:taskId/responsible/:responsibleUserId',
  async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const { taskId, responsibleUserId } = req.params;

      if (!taskId || !responsibleUserId) {
        errorCode = 422;
        throw new Error('Please check the fields!');
      }

      const searchTaskId = await getTaskById(taskId);
      if (searchTaskId === undefined) {
        errorCode = 404;
        throw new Error('Task not found');
      }

      const searchUserResponsible = await getResponsibleTask(taskId);

      const getResponsible = async (obj: any): Promise<boolean> => {
        const responsible = await obj;
        let result = false;
        for (let i = 0; i < responsible.length; i++) {
          if (responsible[i].responsible === responsibleUserId) {
            result = true;
          }
        }
        return result;
      };

      if (!(await getResponsible(searchUserResponsible))) {
        errorCode = 404;
        throw new Error('Responsible id user not found');
      }

      await deleteResponsibleTask(taskId, responsibleUserId);
      res.status(200).send({ message: 'task manager successfully deleted' });
    } catch (error: any) {
      res.status(errorCode).send({ message: error.message });
    }
  }
);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app;
