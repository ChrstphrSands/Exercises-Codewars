import { findSmallestInt } from "../src/Find the smallest integer in the array";
import { assert } from "chai";



describe("Smallest Integer Tests",  () => {
  it("Fixed Tests", () => {
    assert.equal(findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
    assert.equal(findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
    assert.equal(findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
    assert.equal(findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
    assert.equal(findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');
  });
});