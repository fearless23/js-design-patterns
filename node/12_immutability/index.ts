interface Cat {
  name: string;
  breed: string;
}

type ReadonlyCat = Readonly<Cat>

export const make_cat = (name: string, breed: string): ReadonlyCat => {
  return { name, breed }
}
/*
const d = make_cat('meow', 'Tabby');
log('make_cat 1', d)
d.name = 'Tiger' # ERROR as cat is readonly
*/

type ICoordinates = [x: number, y: number, z: number]
export const make_coordinates = (x: number, y: number, z: number): Readonly<ICoordinates> => {
  return [x, y, z]
}

export const immutable_arr = (x: number, y: number): Readonly<number[]> => {
  return [x, y]
}

// {} or [] can be set to const; but then props can be added or push
// to make really const, use following when declaring
const really_const_array = [1, 2, 3] as const;
// really_const_array.push(2) // Property 'push' does not exist on type 'readonly
// really_const_array[1] = 9; // Cannot assign to '1' because it is a read-only property.
const really_const_obj = { name: 'Jassi' } as const;
// really_const_array.new_field = 'Happy' // Property 'new_field' does not exist on type 'readonly
// really_const_array.name = 'Happy' // Property 'name' does not exist on type 'readonly
// delete really_const_array.name; // Property 'name' does not exist on type 'readonly
// delete really_const_array.happy; // Property 'happy' does not exist on type 'readonly