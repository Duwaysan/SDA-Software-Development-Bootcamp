import { addTwoNumbers } from "../JS_code_challenges/02-addTwoNumbers.js";
import { expect } from "chai";

describe("02-addTwoNumbers", function () {
    it("adds 5 and 10", function () {
        expect(addTwoNumbers(5, 10)).to.equal(15);
    });
    it("adds 10 and negative 2", function () {
        expect(addTwoNumbers(10, -2)).to.equal(8);
    });
    it("adds 0 and 0", function () {
        expect(addTwoNumbers(0, 0)).to.equal(0);
    });
    it("returns NaN appropriately", function () {
        expect(addTwoNumbers('Hello', 5)).to.be.NaN;
    });
});