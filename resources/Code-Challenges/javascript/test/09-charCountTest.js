import { charCount } from "../JS_code_challenges/09-charCount.js";
import { expect } from "chai";

describe("09-charCount", function () {
    it("returns an object", function () {
        expect(typeof charCount('abc')).to.equal('object');
    });
    it("properly counts the chars", function () {
        expect(charCount('hello')).to.be.an('object').to.include({ h: 1, e: 1, l: 2, o: 1 });
    });
    it("properly counts the chars with spaces", function () {
        expect(charCount('Today is fantastic!')).to.be.an('object').to.include({ T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 });
    });
});
