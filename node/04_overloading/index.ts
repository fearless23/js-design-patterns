interface ICoordinate {
  x: number;
  y: number;
}

const parse_coordinate_from_numbers = (x: number, y: number): ICoordinate => {
  return { x, y }
}

const parse_coordinate_from_string = (str: string): ICoordinate => {
  const coordinate: ICoordinate = { x: 0, y: 0 };
  str.trim().split(",").forEach(r => {
    const [key, value] = r.trim().split(':')
    coordinate[key as "x" | "y"] = parseInt(value, 10);
  })
  return coordinate;
}

const parse_coordinate_from_object = (obj: ICoordinate): ICoordinate => {
  return { ...obj }
}

/*
Function Overloading
a function can arguments in various forms, but internally works in a way that it returns
similar response

if arg1 = number; return number
if arg1 = string; return number
if arg1 = string & arg2=number; return string

For above we can use | to declare input and output types
input = T | U | V
output = string | number
But, here we cannot enforce if input T maps to string output or number
Thus, function overloading, declares multiple states of a function input/output
*/

export function parse_coordinate(obj: ICoordinate): ICoordinate;
export function parse_coordinate(x: number, y: number): ICoordinate;
export function parse_coordinate(str: string): ICoordinate;
export function parse_coordinate(arg1: unknown, arg2?: unknown): ICoordinate {
  // Runtime check for types
  if (typeof arg1 === 'object') return parse_coordinate_from_object(arg1 as ICoordinate)
  else if (typeof arg1 === 'string') return parse_coordinate_from_string(arg1)
  else return parse_coordinate_from_numbers(arg1 as number, arg2 as number)
};

// Better way to do overloading -> see that in 05_exercise_1