let username: string = 'Jack';
let has_logged_in: boolean = true;

// has_logged_in += 'Herrignton'; // Error: cannot add boolean and string
console.log(has_logged_in);

let reg: RegExp = /foo/;
const names: string[] = username.split('');
// const values: Array<number> = [1, 2, 3, '2']; // Error: as '2' is a string
const values: Array<number> = [1, 2, 3, ];

interface IPerson {
  first: string;
  last: string;
  cool?: string
}

const person: IPerson = {
  first: 'Jaspreet',
  last: 'Singh'
}

const ids: Record<number, string> = {
  1: 'a',
  2: 'c'
}

// if (ids[30] === 4) {} // Error: as 4 in a number
if (ids[30] === '4') {}

