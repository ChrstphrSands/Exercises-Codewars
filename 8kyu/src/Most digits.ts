//TODO: Most digits
//TODO: https://www.codewars.com/kata/most-digits/

export class Kata {
  static findLongest(array: Array<number>): number {
    return array.reduce(
      (a, b) => (a.toString().length < b.toString().length ? b : a)
    );
  }
}
