import { addOne } from "../JS_code_challenges/01-addOne.js";
import { expect } from "chai";

describe("01-addOne", function () {
    it("works with negative numbers", function () {
        expect(addOne(-5)).to.equal(-4);
    });
    it("works with positive numbers", function () {
        expect(addOne(1)).to.equal(2);
    });
});