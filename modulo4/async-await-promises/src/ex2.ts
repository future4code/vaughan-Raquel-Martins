import axios from "axios"
import { baseURL } from "./baseURL"

axios.get(`${baseURL}/subscribers/idInvalido/notifications`)

type Users = {
  id:string,
  email:string,
  name:string
}

const getAllSubscribers = async ():Promise<Users[]> => {
const response = await axios.get(`${baseURL}/subscribers`)
return response.data
}

getAllSubscribers()