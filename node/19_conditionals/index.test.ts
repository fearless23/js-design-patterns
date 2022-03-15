import { log, wait } from '../log';
import { fetch_pokemon } from './index'

const get_url = (limit: number = 10) => {
  return `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
}

const url = get_url(5);

const test = async () => {
  const d = await fetch_pokemon(url)
  log('PokemonAPIResponse', d?.results)

  fetch_pokemon(url, (i) => {
    log(`callback`, i.results)
  })

  await wait(5000)
}

export default test