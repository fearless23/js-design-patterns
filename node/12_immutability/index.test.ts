import { log } from '../log';
import { make_cat, make_coordinates, immutable_arr } from '.'

const test = () => {
  const d = make_cat('meow', 'Tabby');
  log('make_cat 1', d)
  // d.name = 'Tiger' // Cannot assign to 'name' because it is a read-only property.
  log('make_cat 1', d)
  const a = make_coordinates(1, 2, 3)
  // a.push(1) // Property 'push' does not exist on type 'readonly

  const b = immutable_arr(1, 2)
  // b.push() // Property 'push' does not exist on type 'readonly
}

export default test