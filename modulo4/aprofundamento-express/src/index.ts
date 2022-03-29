import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


app.get("/ping", (req, res) => {          
		res.send("Pong! 🏓")
})

app.listen(3003, () => {
  console.log('funcionando')
})