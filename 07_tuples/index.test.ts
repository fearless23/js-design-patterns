import { log } from '../log';
import { add_3d_coordinate, useState } from '.'

const test = () => {
  log('add_3d_coordinate 1', add_3d_coordinate([1, 2, 3], [10, 11, 12]))
  const [value, setValue] = useState<number>(1);
  console.log('get value', value());
  setValue(3);
  console.log('get value', value());
}

export default test;