import { addList } from "../JS_code_challenges/04-addList.js";
import { expect } from "chai";

describe("04-addList", function () {
    it("returns 0 with no args", function () {
        expect(addList()).to.equal(0);
    });
    it("adds list of numbers", function () {
        expect(addList(2, 7)).to.equal(9);
        expect(addList(0, 7, -1)).to.equal(6);
    });
});
