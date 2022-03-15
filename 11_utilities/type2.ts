// Parameters<T>: Obtain the parameters of a function type in a tuple
// ReturnType<T>: Obtain the return type of a function type
// condition is that T should be a function
type AnyFunc = (...args: any[]) => any; // to extend a general func type
type AnyClass = new (...args: any[]) => any; // to extend a general class type

// Parameters<F>[0] -> tales in first arg to a function
// if f = map func; then 
// Parameters<F>[0] = item
// Parameters<F>[1] = index

export const permute_rows = <T extends AnyFunc>(
  iterator_func: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] => {
  return data.map(iterator_func)
}
