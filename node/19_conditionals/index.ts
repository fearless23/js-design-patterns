import axios from 'axios';

interface PokemonAPIResponse {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type Callback = (data: PokemonAPIResponse) => void
type NoneOrCallback = undefined | Callback

type FetchPokenOutput<T> = T extends undefined ? Promise<PokemonAPIResponse> : void

export const fetch_pokemon_old = <T extends NoneOrCallback>(url: string, cb?: T): FetchPokenOutput<T> => {
  const y = axios.get(url).then(r => r.data) as Promise<PokemonAPIResponse>
  if (cb) {
    y.then(cb)
    return undefined as FetchPokenOutput<T>
  }
  else {
    return y as FetchPokenOutput<T>
  }
}

// instead above can be done with overloading

interface IFetchPokemon {
  (url: string): Promise<PokemonAPIResponse>;
  (url: string, cb: Callback): void;
}

export const fetch_pokemon = (url: string, cb?: Callback): Promise<PokemonAPIResponse> | void => {
  const y = axios.get(url).then(r => r.data) as Promise<PokemonAPIResponse>
  if (cb) {
    y.then(cb)
    return
  }
  else {
    return y
  }
}
