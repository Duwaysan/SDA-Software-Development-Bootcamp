import { sumNumbers } from "../JS_code_challenges/03-sumNumbers.js";
import { expect } from "chai";

describe("03-sumNumbers", function () {
    it("sums array of one num", function () {
        expect(sumNumbers([10])).to.equal(10);
    });
    it("sums array of two nums", function () {
        expect(sumNumbers([5, 10])).to.equal(15);
    });
    it("sums_array_of_three_nums", function () {
        expect(sumNumbers([2, 10, -5])).to.equal(7);
    });
    it("sums_empty_array", function () {
        expect(sumNumbers([])).to.equal(0);
    });
});