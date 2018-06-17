//TODO All Star Code Challenge #18
//TODO http://www.codewars.com/kata/all-star-code-challenge-number-18/train/javascript

export function strCount(str, letter): number {
  // TODO Refactor
  return str.split(letter).length - 1;
  
  // TODO First solution
  // let count = 0;
  // str.split("").filter(lt => (lt === letter ? count++ : count));
}

strCount("hello", "o"); //?
