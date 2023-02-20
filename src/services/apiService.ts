import { queryToString } from "../lib/query-string";

interface IGet {
  url: string;
  query?: Record<string, any>;
}

const get = async <T>({ url, query = {} }: IGet): Promise<T> => { 
  const queryString = `?${queryToString({query})}`
  const response = await fetch(`${url + queryString}`)

  const data = response.json()

  return data
}

const methods = { get }

export default methods