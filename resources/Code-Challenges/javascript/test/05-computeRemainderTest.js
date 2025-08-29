import { computeRemainder } from "../JS_code_challenges/05-computeRemainder.js";
import { expect } from "chai";

describe("05-computeRemainder", function () {
    it("returns infinity", function () {
        expect(computeRemainder(4, 0)).to.equal(Infinity);
    });
    it("computes remainder", function () {
        expect(computeRemainder(10, 2)).to.equal(0);
        expect(computeRemainder(10, 3)).to.equal(1);
        expect(computeRemainder(10.5, 3)).to.equal(1.5);
    });
});
