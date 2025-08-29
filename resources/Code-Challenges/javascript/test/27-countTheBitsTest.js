import { countTheBits } from "../JS_code_challenges/27-countTheBits.js";
import { expect } from "chai";

describe("27-countTheBits", function () {
    it("returns a number", function () {
        expect(typeof countTheBits(0)).to.equal('number');
    });
    it("returns the correct number of bits", function () {
        expect(countTheBits(0)).to.equal(0);
        expect(countTheBits(13)).to.equal(3)
        expect(countTheBits(256)).to.equal(1)
        expect(countTheBits(255)).to.equal(8)
        expect(countTheBits(65535)).to.equal(16)
    });
});


// // SOLUTION
// function countTheBits(int) {
//     return int.toString(2).split('').filter(bit => bit === '1').length;
// }

/* Using a regular expression. Note || operator to provide an array so that can use length if there are no matches */
// function countTheBits(int) {
//   return (int.toString(2).match(/1/g) || []).length;
// }