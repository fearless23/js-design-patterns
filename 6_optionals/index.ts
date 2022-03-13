export const print_ingredient = (
  quantity: string,
  ingredient: string,
  extra?: string
): string => {
  return `${ingredient}:${quantity}${extra ? ` - ${extra}` : ''}`;
}

interface IUser {
  id: string,
  info?: {
    email?: string
  }
}

export const get_email = (user: IUser): string => {
  if (user.info) return user.info.email || '';
  return '';
}

export const get_email_easy = (user: IUser): string => {
  return user?.info?.email ?? '';
}

export type ICallback = () => void;

export const add_with_callback = (x: number, y: number, callback?: ICallback) => {
  console.log([x, y])
  callback?.()
}