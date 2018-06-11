// TODO: Training JS #18: Methods of String object--concat() split() and its good friend join()
// TODO: https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/train/javascript

export function splitAndMerge(str: string, sp: string): any {
  str.split(" "); //?
  return str
    .split("")
    .join(sp)
    .split(" "); //?
}
// splitAndMerge("My name is John", " "); //?
// M y n a m e i s J o h n
splitAndMerge("Hello World!", "."); //?
// "H.e.l.l.o W.o.r.l.d.!"
