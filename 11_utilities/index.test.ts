import { log } from '../log';
import { merge, IUser, IUserOptionals, map_by_id } from '.'

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

export default test