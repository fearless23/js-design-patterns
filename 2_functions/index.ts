function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;


export function addStrings(str1: string, str2: string = ''): string {
  return `${str1} ${str2}`;
}

export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
}

export const print_format = (title: string, param: string | number): void => {
  console.log('print_format', `${title} ${param}`);
}

export const fetch_data = (url: string): Promise<string> => {
  return Promise.resolve(`Data from ${url}`);
}

export const introduce = (salution: string, ...names: string[]): string => {
  return `${salution} ${names.join(', ')}`
}

export const get_name = (user: { first?: string, last?: string }): string => {
  return `${user?.first ?? "first"} ${user.last}`;
}