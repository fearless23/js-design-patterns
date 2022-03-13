import { log } from '../log';
import {
  my_map,
  IMyMapFunction,
  my_filter,
  IMyFilterFunction,
  my_for_each,
  IMyForEachFunction
} from '.'

interface ICoordinate {
  x: number;
  y: number
}

interface I3DCoordinaet extends ICoordinate {
  z: number
}

const items: ICoordinate[] = [
  { x: 1, y: 2 },
  { x: 4, y: 20 }
]

const for_each_function: IMyForEachFunction<ICoordinate> = (c: ICoordinate) => {
  console.log(`for each ${c.x}|${c.y}`)
};
const filter_function: IMyFilterFunction<ICoordinate> = (c: ICoordinate) => c.y > 10;
const map_function: IMyMapFunction<ICoordinate, I3DCoordinaet> = (c: ICoordinate) => {
  return { ...c, z: c.x + c.y };
}


const test = () => {
  my_for_each(items, for_each_function);
  log('my_filter 1', my_filter(items, filter_function));
  log('my_map 1', my_map(items, map_function));
}

export default test;