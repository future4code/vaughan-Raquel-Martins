import axios from 'axios';
import { baseURL } from './baseURL';

type Users = {
  id:string,
  email:string,
  name:string
}

const sendNotifications = async (
  users: Users[],
  message: string
): Promise<void> => {

	try {
	  const promises = users.map(user =>{
	    return axios.post(`${baseURL}/notifications`, {
	      subscriberId: user.id,
	      message: message,
	    })
	  })
	
	  await Promise.all(promises);

	} catch {
		console.log("Error");
	}
};
