import { log } from '../log';
import HOUSES from './data.json'
import { find_houses, IHouseFilter } from '.'

const HOUSES_STR = JSON.stringify(HOUSES);

const filter1: IHouseFilter = (h) => {
  return h.name === 'Jassi'
}

const filter2: IHouseFilter = (h) => {
  return Array.isArray(h.planets) ? h.planets.includes('Mars') : h.planets === 'Mars'
}

const test = () => {
  log('find_houses 1', find_houses(HOUSES_STR))
  log('find_houses 2', find_houses(HOUSES))
  log('find_houses 3', find_houses(HOUSES_STR, filter1))
  log('find_houses 5', find_houses(HOUSES, filter1))
  log('find_houses 4', find_houses(HOUSES_STR, filter2))
  log('find_houses 6', find_houses(HOUSES, filter2))
}

export default test;