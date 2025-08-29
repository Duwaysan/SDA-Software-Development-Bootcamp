import { intersection } from "../JS_code_challenges/22-intersection.js";
import { expect } from "chai";

describe("22-intersection", function () {
    it("returns an empty array when no intersection exists", function () {
        expect(intersection([1], [2])).to.be.an('array').that.is.empty;
    });

    it("returns correct intersection", function () {
        expect(intersection(['a', 1], [])).to.be.an('array').that.is.empty;
        expect(intersection(['a', 1], [true, 'a', 15])).to.include('a');
        expect(intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]).sort()).deep.to.equal([1, true, 1].sort());
        expect(intersection([true, 1, 'b', 1], [1, 'a', true, 1, 1]).sort()).deep.to.equal([1, true, 1].sort());
    });

    it("does not modify the args", function () {
        var a1 = [1, 2, 3];
        var _a1 = [1, 2, 3];
        var a2 = ['a', 'b', 'c'];
        var _a2 = ['a', 'b', 'c'];
        intersection(a1, a2);
        expect(a1).deep.to.equal(_a1);
        expect(a2).deep.to.equal(_a2);
    });
});

// // SOLUTION
// function intersection(a1, a2) {
//     let result = [];
//     // create copy of 2nd array to prevent mutating original
//     let _a2 = [...a2];
//     a1.forEach(val => {
//         let idx = _a2.indexOf(val);
//         if (idx > -1) result.push(_a2.splice(idx, 1)[0]);
//     });
//     return result;
// }