import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection"


const app: Express = express();
app.use(express.json());
app.use(cors());





const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}



// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()


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

const searchActorByName = async (name :string): Promise<void> => {
const result = await connection.raw(`
SELECT * FROM Actor
WHERE name = '${name}'
`)

return result[0][0]
}

(async () => {
  console.log(await searchActorByName('Larissa Manoela') )
})()


//c)Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

const countActorByGender = async (gender:string):Promise<void> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count, gender FROM Actor
  WHERE gender = '${gender}'
  `)
  return result[0][0].count
}

countActorByGender("female")
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
})


//Exercício 2






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});




