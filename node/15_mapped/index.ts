// IDog has name (required field) + any other fields
type IDogWithRecord = {
  name: string
} & Record<string, string>

export type IDogAnyField = {
  name: string;
  [key: string]: string | number
}

// ConvertToBoolean (name of type) - can be any name
// Implements T
// any key in T will be converted to boolean
type IConvertToBoolean<T> = {
  [K in keyof T]: boolean;
}


// convert all fields of IDogAnyField to boolean
type IDogConverted = IConvertToBoolean<IDogAnyField>


export interface IDog {
  name: string;
  age: number;
}

// keyof should be string|number etc
export type IListeners<T> = {
  [K in keyof T as `on_${string & K}_change`]: (v: T[K]) => void;
}

export const listen_to_object = <T, K extends keyof T>(obj: T, listeners: IListeners<T>): void => {
  for(const key of Object.keys(obj)){
    // not working
    // const v = obj[key as K]
    // const _key = `on_${key}_change` as K;
    // const func = listeners[_key];
    // func(v)
  }
}