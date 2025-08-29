import { addChecker } from "../JS_code_challenges/29-addChecker.js";
import { expect } from "chai";

describe("29-addChecker", function () {
    it("returns a boolean", function () {
        expect(typeof addChecker([0, 1], 2)).to.equal('boolean');
    });
    it("checks if two ints add up to desired total", function () {
        expect(addChecker([1, 2], 3)).to.equal(true);
        expect(addChecker([-3, 2], 9)).to.equal(false);
        expect(addChecker([10, 15, 16, 22], 32)).to.equal(true);
        expect(addChecker([10, 15, 16, 22], 19)).to.equal(false);
    });
});

// // SOLUTION
// function addChecker(nums, total) {
//     let result = false;
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === total) return true;
//         }
//     }
//     return result;
// }

/* efficent solution - leveraging the sorted array */
// function addChecker(nums, total) {
//   let result = false;
//   let start = 0
//   let end = nums.length - 1; 
//   while (start < end) {
//     let sum = nums[start] + nums[end];
//     if (sum === total) return true;
//     sum < total ? start++ : end--;
//   }
//   return result;
// }