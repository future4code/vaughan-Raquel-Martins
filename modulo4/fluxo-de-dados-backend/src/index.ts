import express from 'express';
import cors from 'cors';
import { produtos } from './data';
import { send } from 'process';
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
    if (typeof novoProduto.price !== 'number') {
      throw new Error('valor de preço inválido');
    }

    if (novoProduto.price <= 0) {
      throw new Error('valor de preço é negativo');
    }

    if (typeof novoProduto.name !== 'string') {
      throw new Error('valor de nome inválido');
    }

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
      case 'valor de preço inválido':
        res.status(422).send(e.message);
        break;
      case 'valor de preço é negativo':
        res.status(422).send(e.message);
        break;
      case 'valor de nome inválido':
        res.status(422).send(e.message);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
});

//Exercício 4 Retorna todos os produtos
app.get('/products', (req, res) => {
  const allProducts = produtos.map((produtos) => {
    return produtos;
  });

  res.status(200).send(allProducts);
});

//Exercício 5 Edita o preço de um determinado produto
app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const newPrice: number = req.body.price;

  try {
    if (req.body.price === '') {
      throw new Error('preço não foi encontrado');
    }

    if (typeof req.body.price !== 'number') {
      throw new Error('valor de preço inválido');
    }

    if (req.body.price <= 0) {
      throw new Error('valor de preço é negativo');
    }

    let idFound = false;

    for (let i = 0; i < produtos.length; i++) {
      if (productId === produtos[i].id) {
        produtos[i].price = newPrice;
        idFound = true;
      }
    }
    if (!idFound) {
      throw new Error('Id não encontrado');
    }

    res.status(200).send(produtos);
  } catch (e: any) {
    switch (e.message) {
      case 'valor de preço inválido':
        res.status(422).send(e.message);
        break;
      case 'valor de preço é negativo':
        res.status(422).send(e.message);
        break;
      case 'Id não encontrado':
        res.status(404).send(e.message);
        break;
      case 'preço não foi encontrado':
        res.status(404).send(e.message);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
});

//Exercício 6  deleta um determinado produto
app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  try {
    let idFound = false;
    for (let i = 0; i < produtos.length; i++) {
      if (productId === produtos[i].id) {
        produtos.splice(i, 1);
        idFound = true;
      }
    }

    if (!idFound) {
      throw new Error('Id não encontrado');
    }

    res.status(200).send(produtos);
  } catch (e: any) {
    switch (e.message) {
      case 'Id não encontrado':
        res.status(404).send(e.message);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
});

//https://documenter.getpostman.com/view/19295220/UVyq1HR7

app.listen(3003, () => {
  console.log('Server está funcionando em localhost3003');
});
