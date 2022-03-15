export const divider = '---------------------'
export const log = (title: string, value: any) => {
  console.log(title);
  console.log(value);
  console.log(divider);
}

/**
 * Waits for `timeout` milliseconds in async function
 * 
 * ---
 * __EXAMPLE__
 * 
 * Usage inside async function
 * ```js
 * const myasyncfunction = async () => {
 *    // ... other code
 *    await wait(3000);
 * }
 * ```  
 */
export const wait = (timeout: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}