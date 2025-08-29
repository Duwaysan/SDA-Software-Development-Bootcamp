import { reduceArray } from "../JS_code_challenges/18-reduceArray.js";
import { expect } from "chai";

describe("18-reduceArray", function () {
    it("successfully sums an array of numbers", function () {
        expect(reduceArray([1, 2, 3], function (acc, n) {
            return acc + n;
        }, 0)).to.equal(6);
    });

    it("considers index", function () {
        expect(reduceArray([1, 2, 3], function (acc, n, i) {
            return acc + n + i;
        }, 0)).to.equal(9);
    });

    it("counts votes", function () {
        expect(reduceArray(['Yes', 'No', 'Yes', 'Maybe'], function (acc, v) {
            acc[v] = acc[v] ? acc[v] + 1 : 1;
            return acc;
        }, {})).to.be.an("object").to.include({ 'Yes': 2, 'No': 1, 'Maybe': 1 });
    });
});
