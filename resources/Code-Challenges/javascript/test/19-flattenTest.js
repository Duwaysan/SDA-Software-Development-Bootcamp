import { flatten } from "../JS_code_challenges/19-flatten.js";
import { expect } from "chai";

describe("19-flatten", function () {
    it("returns a new array", function () {
        var arr = [];
        expect(flatten(arr)).to.be.an("array").to.not.equal(arr);
    });

    it("flattens a nested array", function () {
        expect(flatten([1, [2, 3]])).to.be.an("array").to.include(1, 2, 3);
    });

    it("flattens an array with deeply nested arrays", function () {
        expect(flatten([1, [2, [3, [4]]], 1, 'a', ['b', 'c']])).to.be.an("array").to.include(1, 2, 3, 4, 1, 'a', 'b', 'c');
    });
});
