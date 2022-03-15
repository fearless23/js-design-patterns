import { log } from '../log';
import { get_name } from '.'

const test = () => {
  log('get_name', get_name({ first: 'a', last: 'b' }))
}

export default test;