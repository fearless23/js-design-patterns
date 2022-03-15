// ENUMS - Restrict values to a set of values
export enum LOADING_STATES {
  BEFORE_LOAD = 'before_load',
  LOADING = 'loading',
  LOADED = 'loaded',
}

export const is_loading = (state: LOADING_STATES): boolean => {
  return state === LOADING_STATES.LOADED
}

// Restrict: dice to 1,2,3
// Literal Enums
type DiceRoll = 1 | 2 | 3

/**
 * Get sum of numbers on top face of a dice, after `n` rolls
 */
export const roll_dice = (dice: DiceRoll): number => {
  let sum = 0;
  for (let i = 0; i < dice; i++) {
    sum += Math.floor(Math.random() * 6) + 1
  }
  return sum;
}

// Restriction in overloading
interface ISendEvent {
  // Based on name value, type of second args is changed i.e restricted
  (name: "add_to_cart", data: { product_id: number }): void,
  (name: "checkout", data: { cart_count: number }): void,
}

const send_event: ISendEvent = (name: string, data: unknown): string => {
  return `${name}: ${JSON.stringify(data)}`
}

send_event("add_to_cart", { product_id: 1 }) // if arg1 = add_to_cart, arg2 must contain product_id
send_event("checkout", { cart_count: 1 }) // if arg1 = checkout, arg2 must contain cart_count
// send_event("checkout", { random: 1 }) // # error, if arg1 = checkout, arg2 do not allow random
// send_event("random", { product_id: 1 }) # error