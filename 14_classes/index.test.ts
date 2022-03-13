import { log } from '../log';
import { InMemoryDatabase, InMemoryDatabaseG, PersistentMemoryG } from '.'

const test = () => {
  const s = new InMemoryDatabase();
  s.set('name', 'jassi')
  log('name', s.get('name'))

  const t = new InMemoryDatabaseG<string, number>();
  t.set('name', 23)
  log('name', t.get('name'))

  const u = new PersistentMemoryG<string, number>();
  const stored = JSON.stringify({
    'name': 'jassi',
    'age': 32
  })
  u.restore_from_string(stored)
  const val = u.get('name')
}

export default test