import {assert} from "chai";
import {phoneCall} from "../../src/Simple Fun/7 kyu - Simple Fun 4 - Phone Call";


describe("basic tests", function () {
  it("phoneCall(3,1,2,20)", () => assert.strictEqual(phoneCall(3, 1, 2, 20), 14));
  it("phoneCall(2,2,1,2)", () => assert.strictEqual(phoneCall(2, 2, 1, 2), 1));
  it("phoneCall(10,1,2,22)", () => assert.strictEqual(phoneCall(10, 1, 2, 22), 11));
  it("phoneCall(2,2,1,24)", () => assert.strictEqual(phoneCall(2, 2, 1, 24), 14));
  it("phoneCall(1,2,1,6)", () => assert.strictEqual(phoneCall(1, 2, 1, 6), 3));
});