import { mergeObjects } from "../JS_code_challenges/15-mergeObjects.js";
import { expect } from "chai";

describe("15-mergeObjects", function () {
    it("returns same object", function () {
        var obj = {};
        expect(mergeObjects(obj, { a: 1 })).to.be.an('object').to.include({ a: 1 });
    });
    it("adds additional properties", function () {
        expect(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 })).to.be.an('object').to.include({ a: 1, b: 2, c: 3, d: 4 });
    });
    it("merges props from left to right", function () {
        expect(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 }, { b: 22, d: 44 })).to.be.an('object').to.include({ a: 1, b: 22, c: 3, d: 44 });
    });
});
