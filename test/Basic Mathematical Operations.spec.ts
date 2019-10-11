import { assert } from "chai";
import { basicOp } from "../src/Basic Mathematical Operations";

describe("basicOp", () => {
  it("basic tests", () => {
    console.log("Basic tests\n");
    assert.equal(basicOp("+", 4, 7), 11);
    assert.equal(basicOp("-", 15, 18), -3);
    assert.equal(basicOp("*", 5, 5), 25);
    assert.equal(basicOp("/", 49, 7), 7);
  });
});
