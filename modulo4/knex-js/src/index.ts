import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './connection';


const app: Express = express();
app.use(express.json());
app.use(cors());

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0][0];
};

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById('001')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById('001'));
})();

// Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error : any) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// })

//a)Explique como é a resposta que temos quando usamos o raw.
//Ele devolve pra gente o resultado da query e outras informações, essa é a forma com o que o Mysql devolve as queries naturalmente
//Os dados que queremos estão na primeira posição do vetor, então acessamos a primeira posição da resposta da query.

//b)Faça uma função que busque um ator pelo nome;

const searchActorByName = async (name: string): Promise<void> => {
  const result = await connection.raw(`
SELECT * FROM Actor
WHERE name = '${name}'
`);

  return result[0][0];
};

(async () => {
  console.log(await searchActorByName('Larissa Manoela'));
})();

//c)Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

const countActorByGender = async (gender: string): Promise<void> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count, gender FROM Actor
  WHERE gender = '${gender}'
  `);
  return result[0][0].count;
};

countActorByGender('female')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Exercício 2

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

//a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

const updateSalary = async (id: string, salary: number): Promise<void> => {
  await connection('Actor')
    .update({
      salary: salary,
    })
    .where({ id: id });
};

updateSalary('005', 40000);

//b) Uma função que receba um id e delete um ator da tabela

const deleteActorById = async (id: string): Promise<void> => {
  await connection('Actor').delete().where({ id: id });
};

deleteActorById('001');

//d) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

const getAverageSalaryByGender = async (gender: string): Promise<void> => {
  const result = await connection('Actor')
    .avg('salary as average')
    .where({ gender });

  return result[0].average;
};

getAverageSalaryByGender('male')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });



//Exercício 3
//a) Crie um endpoint com as especificações acima

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//b) Crie um endpoint agora com as seguintes especificações:
// - Deve ser um GET (`/actor`)
// - Receber o gênero como um *query param* (`/actor?gender=`)
// - Devolver a quantidade de atores/atrizes desse gênero

app.get('/actor', async(req:Request, res:Response):Promise<void> => {
  try{
   const gender = req.query.gender
   const count = await countActorByGender(gender as string)
   res.status(200).send({
     quantity: count
   })
  }catch(error:any){
    res.status(400).send({
      message: error.message
    })
  }
})


//Exercício 4

app.post("/actor", async (req: Request, res: Response):Promise<void> => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//a) Endpoint para atualizar salário com id

app.put("/actor", async(req: Request, res: Response): Promise<void> => {
  try{
    const {id, salary} = req.body
    
    await updateSalary(id, salary)

    res.status(200).send({
      message: "Success!"
    })
  }catch(error:any){
    res.status(400).send({message: error.message})
  }
})

//b) Endpoint para deletar ator da tabela
app.delete("/actor/:id", async(req:Request, res: Response): Promise<void> => {
try{
const id = req.params.id
await deleteActorById(id)
res.status(200).send({
  message: "Success!"
})
}catch(error:any){
  res.status(400).send({message: error.message})
}
})


//Desafios

//Exercício 5





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
