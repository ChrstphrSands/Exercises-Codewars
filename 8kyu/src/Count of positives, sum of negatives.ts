// TODO: Count of positives / sum of negatives
// TODO: https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/discuss/typescript

export function countPositivesSumNegatives(input: any): Array<number> {
  if (input == null && input.length) return [];

  return input.reduce(
    (acc, val) => {
      val > 0 ? (acc[0] += 1) : (acc[1] += val);
      return acc;
    },
    [0, 0]
  );
}
