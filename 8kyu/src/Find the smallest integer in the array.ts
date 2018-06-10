export function findSmallestInt(args: number[]): number {
  return args.reduce((p, c) => Math.min(p, c));
  // return Math.min(...args);
}
