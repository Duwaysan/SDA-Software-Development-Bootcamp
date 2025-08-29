import { range } from "../JS_code_challenges/06-range.js";
import { expect } from "chai";

describe("06-range", function () {
    it("returns msg if first arg not smaller", function () {
        expect(range(5, 2)).to.equal("First argument must be less than second");
    });
    it("returns appropriate array of nums", function () {
        expect(range(1, 4)).to.be.an('array').to.include(1, 2, 3);
    });
    it("returns empty for equal nums", function () {
        expect(range(1, 1)).to.be.an('array').that.is.empty;
    });
    it("returns appropriate array of nums", function () {
        expect(range(-2, 3)).to.be.an('array').to.include(-2, -1, 0, 1, 2);
    });
});
