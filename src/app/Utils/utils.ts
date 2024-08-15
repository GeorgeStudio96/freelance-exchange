export function calculate(a:number, b:number):number {
  return a + b;
}
calculate(10, 11)

export interface User {
  id: number,
  name: string,
  age: number,
  isFreelance: boolean
}