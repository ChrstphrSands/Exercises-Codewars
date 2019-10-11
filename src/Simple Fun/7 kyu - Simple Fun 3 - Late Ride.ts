// TODO: Simple Fun #3: Late Ride
// TODO: https://www.codewars.com/kata/simple-fun-number-3-late-ride/

export const lateRide = (n: number): number => {
  // const value = Math.floor(n / 60) + "" +(n % 60);
  // let result: number = 0;
  // for (let i = 0; i < value.length; i++) {
  //   result += parseInt(value.charAt(i));
  // }
  
  return [~~(n / 60), (n % 60)].join("").split("").reduce((a, b) => a + +(b),  0);
};