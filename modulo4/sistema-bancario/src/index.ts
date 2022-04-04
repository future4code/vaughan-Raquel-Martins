import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { users } from './data';
const app: Express = express();
app.use(express.json());
app.use(cors());

//Criar Conta

// Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: **nome**, **CPF**
//  e **data de nascimento**. As contas devem guardar essas informações e uma propriedade para representar o **saldo** do usuário.
//  Além disso devem ser guardados, também, todos os gastos do usuário num array de **extrato** (possuindo o **valor**, a **data** e uma **descrição**).
// Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.

app.post('/client', (req: Request, res: Response) => {
  let errorCode = 400;
  const currentYear = new Date().getFullYear();

  try {
    const { name, cpf, birthDate } = req.body;

    if (!name || !cpf || !birthDate) {
      errorCode = 422;
      throw new Error('Please check the fields!');
    }

    const age = currentYear - Number(birthDate.slice(6));
    if (age < 18) {
      errorCode = 422;
      throw new Error('Invalid age');
    }
    if (isNaN(cpf)) {
      errorCode = 422;
      throw new Error('Invalid cpf');
    }
    if (isNaN(Number(age))) {
      errorCode = 422;
      throw new Error('Invalid birth date');
    }

    for (let i = 0; i < users.length; i++) {
      if (cpf === users[i].cpf) {
        errorCode = 409;
        throw new Error('cpf already exists');
      }
    }

    const newUser = {
      name,
      cpf,
      birthDate,
      balance: 0,
      extract: undefined,
    };
    if (cpf.toString().length !== 11) {
      errorCode = 422;
      throw new Error('Invalid cpf');
    }
    users.push(newUser);
    res.status(201).send(users);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Pegar Saldo
app.get('/client/:cpf', (req: Request, res: Response) => {
  let errorCode = 400;
  let balanceUser: number = 0;
  let userFounded = false;
  try {
    const cpf: number = Number(req.params.cpf);
    for (let i = 0; i < users.length; i++) {
      if (cpf === users[i].cpf) {
        userFounded = true;
        balanceUser = users[i].balance;
      }
    }

    if (!userFounded) {
      errorCode = 404;
      throw new Error('Cpf not found');
    }

    res.status(200).send({ balance: balanceUser });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Adicionar saldo
// O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
app.put('/client', (req: Request, res: Response) => {
  let errorCode: number = 400;
  let user: any = undefined;
  let userFounded: boolean = false;
  try {
    const { name, cpf, value } = req.body;
    if (!name || !cpf || !value) {
      errorCode = 422;
      throw new Error('Please check the fields!');
    }

    if (typeof cpf !== 'number') {
      errorCode = 422;
      throw new Error('Invalid value for cpf');
    }

    if (typeof value !== 'number') {
      errorCode = 422;
      throw new Error('Invalid value for value');
    }

    if (typeof name !== 'string') {
      errorCode = 422;
      throw new Error('Invalid value for name');
    }

    for (let i = 0; i < users.length; i++) {
      if (name === users[i].name && cpf === users[i].cpf) {
        userFounded = true;
        users[i].balance = users[i].balance + value;
        user = users[i];
      }
    }
    if (!userFounded) {
      errorCode = 404;
      throw new Error('Client not found');
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Pagar Conta

//Esta funcionalidade é muito importante para os clientes. Eles podem pagar uma conta, se quiserem, passando: um valor,
//uma descrição e uma data de pagamento. Caso ele não informe a date, deve-se considerar que o pagamento é para ser feito
//no mesmo dia. Além disso, devemos nos atentar:
//ele não pode agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.

type Acquisition = {
  value: number;
  description: string;
  date: string;
};

app.put('/bills', (req: Request, res: Response) => {
  let errorCode = 400;
  let userFounded: boolean = false;
  const currentDay = new Date();
  const formatar = () => {
    const ano = currentDay.getFullYear();
    const mes = `00${currentDay.getMonth() + 1}`.slice(-2);
    const dia = `00${currentDay.getDate()}`.slice(-2);

    return `${dia}/${mes}/${ano}`;
  };
  let user: any = undefined;
  try {
    let { cpf, value, description, date } = req.body;

    if (!cpf || !value || !description) {
      errorCode = 422;
      throw new Error('Please check the fields!');
    }

    if (!date) {
      date = formatar();
    }

    if (date < formatar()) {
      errorCode = 422;
      throw new Error('Invalid date');
    }

    if (typeof cpf !== 'number') {
      errorCode = 422;
      throw new Error('Invalid value for cpf');
    }

    if (typeof value !== 'number') {
      errorCode = 422;
      throw new Error('Invalid value for value');
    }

    if (typeof description !== 'string') {
      errorCode = 422;
      throw new Error('Invalid value for description');
    }

    const billsToPay: Acquisition = {
      value,
      description,
      date,
    };
    for (let i = 0; i < users.length; i++) {
      if (cpf === users[i].cpf && value < users[i].balance) {
        userFounded = true;
        users[i]['extract'] = billsToPay;
        users[i].balance = users[i].balance - value;
        user = users[i];
      }
    }

    if (!userFounded) {
      errorCode = 404;
      throw new Error('Client not found');
    }

    console.log(user);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
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
