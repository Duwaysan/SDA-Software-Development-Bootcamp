import { hammingDistance } from "../JS_code_challenges/12-hammingDistance.js";
import { expect } from "chai";

describe("12-hammingDistance", function () {
    it("returns NaN if not same length", function () {
        expect(hammingDistance('abc', 'ab')).to.be.NaN;
    });
    it("returns correct distance", function () {
        expect(hammingDistance('abc', 'abc')).to.equal(0);
    });
    it("returns correct distance", function () {
        expect(hammingDistance('a1c', 'a2c')).to.equal(1);
    });
    it("returns correct distance", function () {
        expect(hammingDistance('!!!!', '****')).to.equal(4);
    });
});

