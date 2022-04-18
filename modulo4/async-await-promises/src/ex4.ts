import axios from 'axios';
import { baseURL } from './baseURL';

const news = {
  title: 'Nova notícia',
  content: 'conteúdo',
  date: Date.now(),
};


async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseURL}/news`, {
    title: title,
    content: content,
    date: date,
  });
}



createNews(news.title, news.content, news.date)

const main = () => {};
