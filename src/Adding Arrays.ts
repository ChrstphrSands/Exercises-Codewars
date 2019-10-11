// TODO: Adding Arrays
// TODO: https://www.codewars.com/kata/adding-arrays/train/javascript

export function arrAdder(arr) {
  let result = "";
  
  arr[0][0]; //?
  arr[1][0]; //?
  arr[0].length; //?
  arr.length; //?
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] != "") {
        result += arr[j][i];
      }
    }
    result += " ";
  }
  
  return result.trim();
}

arrAdder([
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""]
]); //?

arrAdder([
  ["T"],
  ["h"],
  ["e"],
  ["a"],
  ["a"],
  ["a"],
  ["a"],
  ["a"],
  ["a"],
  ["a"],
  ["a"],
  ["a"]
]); //?
