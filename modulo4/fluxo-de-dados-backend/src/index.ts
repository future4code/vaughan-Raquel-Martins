import express from 'express';
import cors from 'cors';
import { produtos } from './data';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/test', (req, res) => {
  console.log('Api está funcional');
  res.status(200).send('Api está funcional');
});

//Exercício 3 Cria um novo produto --> CreateNewProduct <--
app.post('/products', (req, res) => {
  type Product = {
    id: string;
    name: string;
    price: number;
  };
  const novoProduto: Product = {
    id: Date.now().toString(),
    name: req.body.name,
    price: req.body.price,
  };


// produtos.push(novoProduto)
// res.status(201).send(produtos)
  try {
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].name === req.body.name) {
        throw new Error('Produto já adicionado');
      }
      if (!novoProduto.name || !novoProduto.price) {
        throw new Error('Algum campo do produto está vazio');
      }
    }
    produtos.push(novoProduto);
    res.status(201).send(produtos);
  } catch (e: any) {
    switch (e.message) {
      case 'Produto já adicionado':
        res.status(409).send(e.message);
        break;
      case 'Algum campo do produto está vazio':
        res.status(422).send(e.message);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
});

//Exercício 4 Retorna todos os produtos
app.get('/products' , (req, res) => {
  const allProducts = produtos.map((produtos)=>{
    return produtos
  })

  res.status(200).send(allProducts)
})


app.listen(3003, () => {
  console.log('Server está funcionando em localhost3003');
});
