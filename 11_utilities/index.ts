// Utility type 1
export interface IUser {
  id: string;
  name: string;
  age: number;
  email?: string;
  phone?: string;
}

/*
// if IUser is updated, we have to update IUserOptionals,
as they are tied, instead use Partial
export interface IUserOptionals {
  name?: string;
  age?: number;
  email?: string;
}
*/

export type IUserOptionals = Partial<IUser> // all props in IUser are optional
export type IRequiredUser = Required<IUser> // all props in IUser are required
// Pick = pick props from an existing type
export type IPickUser = Pick<IUser, 'age' | 'name' | 'email'>
export type IPickRequiredUser = Pick<IRequiredUser, 'age' | 'name' | 'email'>
// Omit = omit props from an existing type
export type IUserWithoutID = Omit<IUser, 'id'>

export const merge = (user: IUser, overrides: IUserOptionals): IUser => {
  return {
    ...user, // original user
    ...overrides, // overrides any keys, if present
  }
}

export const map_by_id = (users: IUser[]): Record<IUser['id'], IUserWithoutID> => {
  const map: Record<string, IUserWithoutID> = {};
  users.forEach(({ id, ...rest }) => {
    // Here typescript do not detect what we assign to map
    map[id] = rest;
  })
  return map;
}
