import express from 'express'
import cors from 'cors'
import { afazeres } from './data'

const app = express()

app.use(express.json())
app.use(cors())


app.get("/ping", (req, res) => {          
		res.send("Pong! 🏓")
})


//Adicionando novos afazeres no vetor

app.post('/afazeres', (req, res) => {
const usuario = req.headers.authorization

type Todos = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
};
const novoAfazer:Todos = {
  userId: Number(usuario),
  id: Date.now().toString(),
  title: req.body.title,
  completed: req.body.completed
}

afazeres.push(novoAfazer)
 res.send(afazeres)
})

//Mudando o estado da tarefa

app.put('completedStatus/:id' , (req,res) => {
  const idTarefa = req.params.id

  for(let i = 0; i< afazeres.length; i++){
    if(idTarefa === afazeres[i].id){
      afazeres[i].completed = !afazeres[i].completed
    }
  }

  res.send(afazeres)
})

app.listen(3003, () => {
  console.log('funcionando')
})