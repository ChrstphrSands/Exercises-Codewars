// TODO: Simple Fun #2: Circle of Numbers
// TODO: https://www.codewars.com/kata/58841cb52a077503c4000015

export const circleOfNumbers = (n: number, firstNumber: number) => {
  return (firstNumber + n / 2) % n;
};