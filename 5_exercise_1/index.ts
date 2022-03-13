import HOUSES from './data.json'

interface IHouse {
  name: string;
  planets: string | string[];
}

/*
interface IHouseWithID {
  id: number;
  name: string;
  planets: string | string[];
}
*/

interface IHouseWithID extends IHouse {
  id: number;
}

export type IHouseFilter = (house: IHouse) => boolean

const attach_id = (house: IHouse): IHouseWithID => {
  let id = -1;
  for (let i = 0; i < HOUSES.length; i++) {
    if (HOUSES[i].name === house.name) id = i;
  }
  return { id, ...house }

}

export function find_houses(houses: string): IHouseWithID[];
export function find_houses(houses: IHouse[]): IHouseWithID[];
export function find_houses(houses: string, filter: IHouseFilter): IHouseWithID[];
export function find_houses(houses: IHouse[], filter: IHouseFilter): IHouseWithID[];
export function find_houses(input: string | IHouse[], filter?: IHouseFilter): IHouseWithID[] {
  const houses: IHouse[] = typeof input === 'string' ? JSON.parse(input) : input;
  return (filter ? houses.filter(filter) : houses).map(attach_id)
}