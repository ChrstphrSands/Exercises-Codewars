// TODO: Simple Fun #1: Seats in Theater
// TODO: https://www.codewars.com/kata/588417e576933b0ec9000045

export const seatsInTheater = (
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number => {
  return (nCols - col + 1) * (nRows - row);
};
