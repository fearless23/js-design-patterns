type I3DCoordinate = [x: number, y: number, z: number]

export const add_3d_coordinate = (c1: I3DCoordinate, c2: I3DCoordinate): I3DCoordinate => {
  return [
    c1[0] + c2[0],
    c1[1] + c2[1],
    c1[2] + c2[2],
  ]
}
type ISetStateFunction<T> = (t: T) => void
type IGetStateFunction<T> = () => T;
type IUseStateOutput<T> = [x: IGetStateFunction<T>, y: ISetStateFunction<T>]

export const useState = <T>(initialValue: T): IUseStateOutput<T> => {
  let val: T = initialValue;
  return [
    () => val,
    (v) => {
      val = v;
    }
  ];
}