import connection from './connection';

// Users functions

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

export const updateUserById = async (
  id: string,
  name: string,
  nickname: string
): Promise<void> => {
  await connection('Users')
    .update({
      name: name,
      nickname: nickname,
    })
    .where({ id: id });
};

export const getAllUsers = async (): Promise<any> => {
  const result = await connection('Users');
  return result;
};

// ------------ // ----------------

//Task functions

export const createTask = async (
  title: string,
  description: string,
  limitDate: Date,
  creatorUserId: string
): Promise<void> => {
  await connection
  .insert({
    id: Date.now().toString(),
    title: title,
    description_task: description,
    limit_date: limitDate,
    creator_user_id: creatorUserId
  })
  .into('Tasks_user')
};
