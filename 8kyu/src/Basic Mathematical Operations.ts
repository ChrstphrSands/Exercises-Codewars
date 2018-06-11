// TODO: Basic Mathematical Operations
// TODO: https://www.codewars.com/kata/basic-mathematical-operations

export function basicOp(
  operation: string,
  value1: number,
  value2: number
): number {
  // TODO: Refactor 1
  return eval(`${value1}${operation}${value2}`);

  // TODO: First Solution
  // switch (operation) {
  //   case "+":
  //     return value1 + value2;
  //   case "-":
  //     return value1 - value2;
  //   case "*":
  //     return value1 * value2;
  //   case "/":
  //     return value1 / value2;
  // }
}
