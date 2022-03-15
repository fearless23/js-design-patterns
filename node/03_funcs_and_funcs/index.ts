export const print_to_file = (text: string, callback: () => void): void => {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number
export const array_mutate = (
  numbers: number[],
  mutate: MutationFunction
) => {
  return numbers.map(mutate);
}

export type AdderFunction = (v: number) => number

export const createAdder = (num: number): AdderFunction => {
  return (val: number) => num + val;
}
