import { mapArray } from "../JS_code_challenges/17-mapArray.js";
import { expect } from "chai";

describe("17-mapArray", function () {
    it("returns a new array", function () {
        expect(mapArray([], _ => _)).to.be.an("array");
    });
    it("successfuly maps without using index", function () {
        expect(mapArray([1, 2, 3], function (n) {
            return n * 2;
        })).to.include(2, 4, 6);
    });
    it("successfuly maps using index", function () {
        expect(mapArray(['rose', 'tulip', 'daisy'], function (f, i) {
            return `${i + 1} - ${f}`;
        })).to.include("1 - rose", "2 - tulip", "3 - daisy");
    });
});
