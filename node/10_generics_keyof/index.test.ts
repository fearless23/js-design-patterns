import { log } from '../log';
import { pluck, send_event, IUser, IProduct, IEventMap } from '.'

interface IDog {
  name: string;
  age: number;
}

const dogs: IDog[] = [
  { name: 'Mimi', age: 12 },
  { name: 'Tiger', age: 8 },
]

type IDogKey = keyof IDog;

const age_key: IDogKey = 'age'
const name_key: IDogKey = 'name'

const test = () => {
  log('pluck age', pluck(dogs, age_key))
  log('pluck name', pluck(dogs, name_key))
}

const a: IUser & IProduct = {
  time: 1230, user: 'Jassi',
  product_id: 'TV', quantity: 3
};
const b: IUser = { time: 1230, user: 'Jassi' };
// const c = 'fdf'

const test2 = () => {
  log('send_event 1', send_event("addToCart", a))
  log('send_event 2', send_event("abc", b))
}

export default test2