import { assert } from "chai";
import { printArray } from "../src/Printing Array elements with Comma delimiters";

describe("printArray([2,4,5,2])", () => {
  it("Should return something that isn't falsy", function() {
    assert.equal(!!printArray([2, 4, 5, 2]), true);
  });

  it("Should return '2,4,5,2'", function() {
    assert.deepEqual(printArray([2, 4, 5, 2]), "2,4,5,2");
  });

  it("Should return '2'", () => {
    assert.deepEqual(printArray([2]), "2");
  });
});
