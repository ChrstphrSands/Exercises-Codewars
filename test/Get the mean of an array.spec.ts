import { getAverage } from '../src/Get the mean of an array';

import { assert } from 'chai';

describe('solution', () => {
  it('Basic Tests', () => {
    assert.equal(getAverage([2, 2, 2, 2]), 2);
    assert.equal(getAverage([1, 2, 3, 4, 5]), 3);
    assert.equal(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
  });
});