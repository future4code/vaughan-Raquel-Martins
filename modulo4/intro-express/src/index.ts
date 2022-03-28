import express from 'express';
import cors from 'cors';
import { usuarios, posts } from './data';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello from Express');
});

app.get('/users', (req, res) => {
  const allUsers = usuarios
    .map((usuario) => {
      return usuario;
    })
    .flat(1);

  res.status(200).send(allUsers);
});

app.get('/posts', (req, res) => {
  const allPosts = posts
    .map((post) => {
      return post;
    })
    .flat(1);

  res.status(200).send(allPosts);
});

app.get('/posts/:userId' ,(req, res) => {
    const userId = req.params.userId;
    const getPostByUserId = posts
      .filter((post) => {
        return post.usuarioId === Number(userId)
      })
      
   console.log(typeof userId)
    
    res.status(200).send(getPostByUserId);
  })

app.listen(3003, () => {
  console.log('Server is running in http://localhost:3003/');
});
