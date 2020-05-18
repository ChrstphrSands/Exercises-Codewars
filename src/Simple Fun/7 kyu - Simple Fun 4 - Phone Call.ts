// TODO: Simple Fun #4: Phone Call
// TODO: https://www.codewars.com/kata/simple-fun-number-4-phone-call/

export const phoneCall = (min1, min2_10, min11, s): number => {
  if (s < min1) return 0;
  else if (s < min1 + min2_10) return 1;
  else if (s < min1 + 9 * min2_10) return 1 + ~~((s - min1) / min2_10);
  else return 10 + ~~((s - min1 - 9 * min2_10) / min11);
};

console.log(phoneCall(3, 1, 2, 20), 14);
console.log(phoneCall(2, 2, 1, 2), 1);
console.log(phoneCall(10, 1, 2, 22), 11);
console.log(phoneCall(2, 2, 1, 24), 14);
console.log(phoneCall(1, 2, 1, 6), 3);
