import { fromPairs } from "../JS_code_challenges/14-fromPairs.js";
import { expect } from "chai";

describe("14-fromPairs", function () {
    it("returns object from array of arrays", function () {
        expect(fromPairs([["a", 1], ["b", 2], ["c", 3]])).to.be.an('object').to.include({ a: 1, b: 2, c: 3 });
    });
    it("returns object from array of arrays", function () {
        expect(fromPairs([["name", "Sam"], ["age", 24], ["name", "Sally"]])).to.be.an('object').to.include({ name: "Sally", age: 24 });
    });
    it("returns object from array of arrays", function () {
        expect(fromPairs([["i", "like"], ["to", "eat"], ["banana", "chips"]])).to.be.an('object').to.include({ i: "like", to: "eat", "banana": "chips" });
    });
});
