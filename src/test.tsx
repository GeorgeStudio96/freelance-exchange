export default function TestComp() {
  // примитивы
  let name: string = "name";
  let age: number = 18;
  let boolean: boolean = true;
  let undef: undefined = undefined;
  let city: null = null;
  let anyProps: any = ["", 1];
  let array: number[] = [1, 2, 3, 4, 5];
  let arrayStr: string[] = ["", "", ""];

  //  структура функции
  function someFunction(): number {
    return 28;
  }

  function foo2(name: string): string {
    return "George";
  }

  const ageFoo = (age: number) => 28;

  // структура объекта
  const profile: {
    firstName: string;
    age: number;
    isWork: boolean;
  } = {
    firstName: "George",
    age: 28,
    isWork: true,
  };
}
