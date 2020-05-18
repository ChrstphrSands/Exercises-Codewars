import { assert } from "chai";
import { lateRide } from "../../src/Simple Fun/7 kyu - Simple Fun 3 - Late Ride";

describe("basic tests", function() {
  it("lateRide(240, 4)", () => assert.strictEqual(lateRide(240), 4));
  it("lateRide(808, 14)", () => assert.strictEqual(lateRide(808), 14));
  it("lateRide(1439, 19)", () => assert.strictEqual(lateRide(1439), 19));
  it("lateRide(0, 0)", () => assert.strictEqual(lateRide(0), 0));
  it("lateRide(23, 5)", () => assert.strictEqual(lateRide(23), 5));
  it("lateRide(8, 8)", () => assert.strictEqual(lateRide(8), 8));
});
