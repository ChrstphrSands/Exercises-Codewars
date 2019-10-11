import solution = require('../src/Sum of positive');

import { assert } from "chai";

describe("solution", () => {
  it("Basic Tests", () => {
    assert.equal(solution.positiveSum([1, 2, 3, 4, 5]), 15);
    assert.equal(solution.positiveSum([1, -2, 3, 4, 5]), 13);
    assert.equal(solution.positiveSum([]), 0);
    assert.equal(solution.positiveSum([-1, -2, -3, -4, -5]), 0);
    assert.equal(solution.positiveSum([-1, 2, 3, 4, -5]), 9);
  });
});