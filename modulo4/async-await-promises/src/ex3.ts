import axios from 'axios';
import { baseURL } from './baseURL';

const news = {
  title: 'Nova notícia',
  content: 'conteúdo',
  date: Date.now(),
};

type Users = {
  id:string,
  email:string,
  name:string
}


const getAllSubscribers = async (): Promise<Users[]> => {
  const response: any = await axios.get(`${baseURL}/subscribers`);
  return response.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const getSubscribersIds = (subscribers: any) => {};

const notifyAllSubscribers = () => {};

// createNews(news)                // criar noticia
//   .then(getAllSubscribers)      // buscar assinantes
//   .then(getSubscribersIds)      // extrair id's (etapa síncrona)
//   .then(notifyAllSubscribers)   // enviar notificacoes
