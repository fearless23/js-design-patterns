import { divider } from './log';

import functions from './2_functions/index.test'
import funcs_and_funcs from './3_funcs_and_funcs/index.test'
import overloading from './4_overloading/index.test'
import exercise_1 from './5_exercise_1/index.test'
import optionals from './6_optionals/index.test'
import tuples from './7_tuples/index.test'
import generics from './8_generics/index.test'

type ITest = () => void

const TESTS: Record<string,ITest> = {
  functions,
  funcs_and_funcs,
  overloading,
  exercise_1,
  optionals,
  tuples,
  generics,
}


const execute = (test_name: string) => {
  console.log(divider);
  const func = TESTS[test_name];
  func()
}

const TEST_NAME = 'generics'
execute(TEST_NAME)