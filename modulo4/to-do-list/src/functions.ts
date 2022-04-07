import connection from './connection';

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection('Users')
    .insert({
      id: Date.now().toString(),
      name: name,
      nickname: nickname,
      email: email,
    })
    .into('Users');
};

export const getUserById = async (id: string): Promise<void> => {
  const result = await connection('Users')
    .select('id', 'nickname')
    .where({ id: id });

  return result[0];
};


export const updateUserById = async (id:string, name:string, nickname:string): Promise<void> => {
   await connection('Users')
  .update({
   name: name,
   nickname:nickname
  })
  .where({id : id})

  
}