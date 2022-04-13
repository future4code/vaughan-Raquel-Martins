import { connection } from '../connection';
import { UserInfo} from '../types/Adress';

export const createUserSQL = async (obj: UserInfo): Promise<void> => {
  await connection('address_users')
    .insert({
      id: Date.now().toString(),
      email: obj.email,
      zipcode: obj.zipcode,
      street: obj.street,
      district: obj.district,
      city: obj.city,
      state: obj.state,
      complement: obj.complement,
      number_address: obj.number
    })
    .into('address_users');
};
