// TODO: Training JS #18: Methods of String object--concat() split() and its good friend join()
// TODO: https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/train/javascript

export function splitAndMerge(str: string, sp: string): string {
  return str
    .split(" ")
    .map(word => word.split("").join(sp))
    .join(" ");
}

splitAndMerge("Hello World!", ".");
