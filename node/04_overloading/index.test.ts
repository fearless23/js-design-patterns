import { log } from '../log';
import { parse_coordinate } from '.'

const test = () => {
  log('parse_coordinate 1', parse_coordinate({ x: 1, y: 2 }))
  log('parse_coordinate 2', parse_coordinate(1, 2))
  log('parse_coordinate 3', parse_coordinate('    x:1.45  ,  y:200    '))
}

export default test;