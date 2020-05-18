import {assert} from "chai";
import {change} from "../../src/7kyu/Search for letters";

describe("Change string", () => {
  it("Change string", () => {
    assert.strictEqual(change("a **&  bZ"), "11000000000000000000000001"
    );
  });
});
