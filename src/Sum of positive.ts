export function positiveSum(arr) {
  return arr
    .filter(number => number > 0)
    .reduce((previous, current) => previous + current, 0);
}

positiveSum([1, -4, 7, 12]); //?
