import { log } from '../log';
import { LOADING_STATES, is_loading, roll_dice } from '.'

const test = () => {
  const s = LOADING_STATES.LOADED;
  console.log(s)
  console.log(is_loading(s))

  log('roll_dice', roll_dice(2))
}

export default test