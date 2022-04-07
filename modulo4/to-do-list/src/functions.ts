import connection from './connection';

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      id: Date.now().toString(),
      name: name,
      nickname: nickname,
      email: email,
    })
    .into('Users');
};


export const getUserById = async (
  id: string
):Promise<void> =>{
  const result = await connection('Users')
  .select()
  .where({id: id})

  return result[0]
}