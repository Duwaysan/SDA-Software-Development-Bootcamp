import { balancedBrackets } from "../JS_code_challenges/23-balancedBrackets.js";
import { expect } from "chai";

describe("23-balancedBrackets", function () {
    it("returns false when not balanced", function () {
        expect(balancedBrackets('(]')).to.equal(false);
        expect(balancedBrackets('[(])')).to.equal(false);
        expect(balancedBrackets('{[()')).to.equal(false);
    });

    it("returns true when balanced", function () {
        expect(balancedBrackets('()')).to.equal(true);
        expect(balancedBrackets('[{}]')).to.equal(true);
        expect(balancedBrackets('[({}[])]')).to.equal(true);
    });
});


// // SOLUTION
// function balancedBrackets(str) {
//     // can't be balanced if string odd in length
//     if (str.length % 2) return false;
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         let b = str.charAt(i);
//         if ('([{'.includes(b)) {
//             // add opening brackets to the stack
//             stack.push(b);
//         } else {
//             // not an opening bracket, so remove last opening and check if matched
//             if (!'() {} []'.includes(stack.pop() + b)) return false;
//         }
//     }
//     return stack.length === 0;
// }

/*--- Using Array.every method to iterate unless false is returned
      Also using arrow function ---*/
// function balancedBrackets(str) {
//   let stack = [];
//   return str.split('').every(c => {
//     if ('([{'.includes(c)) {
//       return stack.push(c);
//     } else {
//       return '() {} []'.includes(stack.pop() + c)
//     }
//   }) && stack.length === 0;
// }

/*--- Holy ternary Batman! Almost a one-liner! ---*/
// function balancedBrackets(str) {
//   let a = [];
//   return str.split('').every(c => '([{'.includes(c) ? a.push(c) : '() {} []'.includes(a.pop() + c)) && a.length === 0;
// }