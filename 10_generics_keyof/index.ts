export const pluck = <T,K extends keyof T>(items: T[], key:K): T[K][] => {
  return items.map(i => i[key]);
}



export interface IUser {
  time: number;
  user: string;
}

export interface IProduct {
  quantity: number;
  product_id: string;
}

export interface IEventMap {
  add_to_cart: IUser & IProduct,
  checkout: IUser
}


export const send_event = <K extends keyof IEventMap>(name:string, data: IEventMap[K]): void => {
  console.log(name, data)
}