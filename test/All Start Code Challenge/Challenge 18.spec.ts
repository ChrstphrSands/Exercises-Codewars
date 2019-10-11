import { assert } from "chai";
import { strCount } from "../../src/All Star Code Challenge/Challenge 18";

describe("strCount", () => {
  it("basic tests", () => {
    assert.deepEqual(strCount("Hello", "o"), 1);
    assert.deepEqual(strCount("Hello", "l"), 2);
    assert.deepEqual(strCount("", "z"), 0);
  });
});
