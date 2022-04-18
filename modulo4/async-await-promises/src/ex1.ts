import axios from "axios"
import { baseURL } from "./baseURL"

axios.get(`${baseURL}/subscribers`)

//a. GET/subscribers
type Users = {
  id:string,
  email:string,
  name:string
}

async function getAllSubscribers():Promise<Users[]> {
const response = await axios.get(`${baseURL}/subscribers`)
return response.data
}

getAllSubscribers()