import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { Customer } from './data/Custumer';

const app: Express = express();
app.use(express.json());
app.use(cors());

let user1 : Customer = new Customer("001", "astrodev@gmail.com", "AstroDev", "123456", "nubank")
console.log(user1)

const customer = new Customer("002", "astradev@gmail.com", "AstraDev", "1234567", "nubank") // passa os parâmetros corretos
customer.interoduceYourself()
console.log("nome",customer.getName())
console.log("msg",customer.interoduceYourself())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
