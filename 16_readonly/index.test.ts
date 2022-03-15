import { log } from '../log';
import { Singleton } from '.'

const test = () => {
  Singleton.addUrl('https');
  Singleton.addUrl('https');
}

export default test