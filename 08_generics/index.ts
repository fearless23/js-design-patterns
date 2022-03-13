type ISetStateFunction<T> = (t: T) => void
type IGetStateFunction<T> = () => T;
type IUseStateOutput<T> = [x: IGetStateFunction<T>, y: ISetStateFunction<T>]

export const useState = <T>(initialValue: T): IUseStateOutput<T> => {
  let val: T = initialValue;
  return [
    () => val,
    (v) => { val = v; }
  ];
}


interface Rank<T> {
  item: T;
  rank: number;
}

export type IGetRankFunction<T> = (v: T) => number

export const ranker = <T>(items: T[], get_rank: IGetRankFunction<T>): T[] => {
  return items
    .map(item => ({ item, rank: get_rank(item) }))
    .sort((a, b) => a.rank - b.rank)
    .map(i => i.item)
}