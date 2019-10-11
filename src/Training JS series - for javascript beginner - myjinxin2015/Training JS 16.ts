// TODO: Training JS #16: Methods of String object--slice(), substring() and substr()
// TODO: https://www.codewars.com/kata/training-js-number-16-methods-of-string-object-slice-substring-and-substr

export function cutIt(arr: Array<string>): Array<string> {
  // TODO: First Solution
  // arr.filter(word => {
  //   word.length < size ? (size = word.length) : size; //?
  // });
  //
  // return arr.map(word => word.slice(0, size));

  // TODO: Refactor
  let size = Math.min(...arr.map(word => word.length));
  return arr.map(word => word.slice(0, size));
}
