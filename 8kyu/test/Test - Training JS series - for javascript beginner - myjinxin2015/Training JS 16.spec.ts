import { assert } from "chai";
import { cutIt } from "../../src/Training JS series - for javascript beginner - myjinxin2015/Training JS 16";

describe("cutIt", () => {
  it("basic tests", () => {
    assert.deepEqual(cutIt(["ab", "cde", "fgh"]), ["ab", "cd", "fg"]);
    assert.deepEqual(cutIt(["abc", "defgh", "ijklmn"]), ["abc", "def", "ijk"]);
    assert.deepEqual(cutIt(["codewars", "javascript", "java"]), [
      "code",
      "java",
      "java"
    ]);
  });
});
