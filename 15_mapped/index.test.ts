import { log } from '../log';
import { IDog, IListeners, listen_to_object } from '.'

const dog: IDog = {
  name: "Tiger",
  age: 9
}

type DogListeners = IListeners<IDog>

const listeners: DogListeners = {
  on_name_change: (v) => { },
  on_age_change: (v) => { },
}

type DogKey = keyof IDog

const test = () => {
  log('listen_to_object 1', listen_to_object<IDog, DogKey>(dog, listeners))
}

export default test