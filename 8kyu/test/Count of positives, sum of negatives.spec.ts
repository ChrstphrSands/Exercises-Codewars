import { countPositivesSumNegatives } from "../src/Count of positives, sum of negatives";
import { assert } from "chai";

describe("countPositivesSumNegatives", () => {
  it("basic tests", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);

    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    actual = countPositivesSumNegatives(testData);
    expected = [8, -50];
    assert.deepEqual(actual, expected);

    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10];
    actual = countPositivesSumNegatives(testData);
    expected = [8, 0];
    assert.deepEqual(actual, expected);
  });
});
