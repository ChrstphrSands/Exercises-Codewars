// TODO: Adding Arrays
// TODO: https://www.codewars.com/kata/adding-arrays/train/javascript

export function arrAdder(arr: string[][]) {
  /* * Reformat * */
  return arr[0].map( (_, i) => arr.map(_ => _[i]).join('')).join(' ');

  /* * Array * */
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
        result += arr[j][i];
    }
    result += " ";
  }
  return result.trim();
}
