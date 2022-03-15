import { log } from '../log';
import { create_log_class, create_simple_memory_database } from '.'

type T = {
  name: string;
}
const test = () => {
  const CLC = create_log_class();
  const c = new CLC()
  c.log('hello')
  log('dump_log 1', c.dump_log())

  const CSMD = create_simple_memory_database<T>()
  const d = new CSMD()
  d.set('sdf', { name: 'jassi' })
}

export default test