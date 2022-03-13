export type IMyForEachFunction<T> = (v: T) => void

export const my_for_each = <T>(items: T[], for_each_function: IMyForEachFunction<T>): void => {
  items.forEach(for_each_function)
}

export type IMyFilterFunction<T> = (v: T) => boolean

export const my_filter = <T>(items: T[], filter_function: IMyFilterFunction<T>): T[] => {
  return items.filter(filter_function)
}

export type IMyMapFunction<T, K> = (v: T) => K

export const my_map = <T, K>(items: T[], map_function: IMyMapFunction<T,K>): K[] => {
  return items.map(map_function)
}