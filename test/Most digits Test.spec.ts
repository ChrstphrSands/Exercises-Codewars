import { assert } from "chai";
import { Kata } from "../src/Most digits";

describe("solution", function() {
  it("basic tests", function() {
    assert.strictEqual(Kata.findLongest([1, 10, 100]), 100);
    assert.strictEqual(Kata.findLongest([9000, 8, 800]), 9000);
    assert.strictEqual(Kata.findLongest([8, 900, 500]), 900);
    assert.strictEqual(Kata.findLongest([8, 900, 901]), 900);
  });
});
