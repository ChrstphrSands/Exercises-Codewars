import { assert } from "chai";
import { splitAndMerge } from "../../src/Training JS series - for javascript beginner - myjinxin2015/Training JS 18";

describe("splitAndMerge", () => {
  it("basic tests", () => {
    assert.equal(
      splitAndMerge("My name is John", " "),
      "M y n a m e i s J o h n"
    );
    assert.equal(splitAndMerge("Hello World!", "."), "H.e.l.l.o W.o.r.l.d.!");
    assert.equal(splitAndMerge("Hello World!", ","), "H,e,l,l,o W,o,r,l,d,!");
    assert.equal(
      splitAndMerge("My name is John", "-"),
      "M-y n-a-m-e i-s J-o-h-n"
    );
  });
});
