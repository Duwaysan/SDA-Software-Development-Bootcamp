import { formatWithPadding } from "../JS_code_challenges/10-formatWithPadding.js";
import { expect } from "chai";

describe("10-formatWithPadding", function () {
    it("pads only if not min length", function () {
        expect(formatWithPadding(1234, '*', 3)).to.equal('1234');
    });
    it("pads integer with char specified", function () {
        expect(formatWithPadding(123, '0', 5)).to.equal('00123');
    });
    it("pads integer with char specified", function () {
        expect(formatWithPadding(42, '*', 10)).to.equal('********42');
    });
});
