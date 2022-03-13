import { log } from '../log';
import { print_ingredient, get_email, get_email_easy, add_with_callback } from '.'

const test = () => {
  log('print_ingredient 1', print_ingredient('3', 'Panner'))
  log('get_email 1', get_email({ id: '1' }))
  log('get_email 2', get_email({ id: '1', info: {} }))
  log('get_email 3', get_email({ id: '1', info: { email: 'hello@gmail.com' } }))
  log('get_email_easy 1', get_email_easy({ id: '1' }))
  log('get_email_easy 2', get_email_easy({ id: '1', info: {} }))
  log('get_email_easy 3', get_email_easy({ id: '1', info: { email: 'hello@gmail.com' } }))
  log('add_with_callback 1', add_with_callback(1, 2))
}

export default test;