import { removeEnds } from "../JS_code_challenges/08-removeEnds.js";
import { expect } from "chai";

describe("08-removeEnds", function () {
    it("returns empty string when length less than 3", function () {
        expect(removeEnds("a")).to.equal("");
    });
    it("removes the ends", function () {
        expect(removeEnds('abc')).to.equal('b');
        expect(removeEnds('123456789')).to.equal('2345678');
    });
});
