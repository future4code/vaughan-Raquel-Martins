import {connection} from './connection'



export const selectAllUsers = async (name:string, type:string):Promise<any> => {
  const result = await connection('aula48_exercicio')
  .select('*')
  .where('name', 'like', `%${name}%`)
  .where('type', 'like', `%${type}%`)
  return result
}


export const selectOrderBy = async (type:string, ordenation:string):Promise<any> => {
  const result = await connection('aula48_exercicio')
  .select('*')
  .orderBy(`${type}`, `${ordenation}`)
  return result
}


export const pagination = async (type:string, ordenation:string, page:number):Promise<any> => {
  let offset = 5 * (page - 1)
  const result = await connection('aula48_exercicio')
  .select('*')
  .orderBy(`${type}`, `${ordenation}`)
  .limit(5)
  .offset(offset)
  return result
}


