import { divider } from './log';

import functions from './02_functions/index.test'
import funcs_and_funcs from './03_funcs_and_funcs/index.test'
import overloading from './04_overloading/index.test'
import exercise_1 from './05_exercise_1/index.test'
import optionals from './06_optionals/index.test'
import tuples from './07_tuples/index.test'
import generics from './08_generics/index.test'
import exercise_2 from './09_exercise_2/index.test'
import generics_keyof from './10_generics_keyof/index.test'
import utilities from './11_utilities/index.test'
import immutability from './12_immutability/index.test'
import enums from './13_enums/index.test'
import classes from './14_classes/index.test'
import mapped from './15_mapped/index.test'
import readonly from './16_readonly/index.test'
import mixins from './17_mixins/index.test'
import exercise_3 from './18_exercise_3/index.test'
import conditionals from './19_conditionals/index.test'

type ITest = () => void

const TESTS: Record<string, ITest> = {
  functions,
  funcs_and_funcs,
  overloading,
  exercise_1,
  optionals,
  tuples,
  generics,
  exercise_2,
  generics_keyof,
  utilities,
  immutability,
  enums,
  classes,
  mapped,
  readonly,
  mixins,
  exercise_3,
  conditionals,
}


const execute = async (test_name: string) => {
  try {
    console.log(divider);
    const func = TESTS[test_name];
    await func()
  } catch (error) {
    console.error(error)
  }
  console.log(`---- DONE ----`)
  process.exit()
}

const TEST_NAME = 'utilities'
execute(TEST_NAME).then().catch()