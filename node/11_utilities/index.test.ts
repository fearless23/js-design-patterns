import { log } from '../log';
import { merge, IUser, IUserOptionals, map_by_id } from './type1'
import { permute_rows } from './type2'

const user: IUser = {
  id: '1',
  name: 'Jassi',
  age: 60,
}

const overrides: IUserOptionals = {
  age: 32,
}

const test = () => {
  log('merge 1', merge(user, overrides))
  log('map_by_id 1', map_by_id([user]))
}


type Name = {
  first: string;
  last: string;
}

const add_full_name = (name: Name): Name & { full_name: string } => {
  return { ...name, full_name: `${name.first} ${name.last}` }
}

const test2 = () => {
  const data = [{first:'Jaspreet', last:'Singh'}]
  log('permute_rows 1', permute_rows(add_full_name, data))
}

export default test2