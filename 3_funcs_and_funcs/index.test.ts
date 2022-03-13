import { log } from '../log';
import { array_mutate, MutationFunction, createAdder } from '.';

const test = () => {
  const mutator: MutationFunction = (i) => i * 10;
  log('array_mutate', array_mutate([1, 2, 3], mutator));
  const addOne = createAdder(1);
  log('addOne', addOne(4))
}

export default test;