import { gridTrip } from "../JS_code_challenges/28-gridTrip.js";
import { expect } from "chai";

describe("28-gridTrip", function () {
    it("returns an array", function () {
        expect(Array.isArray(gridTrip([0, 0], 'U1'))).to.equal(true);
    });
    it("returns the correct final position", function () {
        expect(gridTrip([0, 0], 'U2R1')).deep.to.equal([2, 1])
        expect(gridTrip([5, 10], 'D5L15U2')).deep.to.equal([2, -5])
        expect(gridTrip([-22, 100], 'L2L15D50U1D9')).deep.to.equal([-80, 83])
    });
});

// // SOLUTION
// function gridTrip(xyArr, moves) {
//     // create result array with starting positions
//     let result = [xyArr[0], xyArr[1]];
//     // lookup object used to map direction character to x or y index and a multiplier
//     // e.g., if direction is 'U', the first element of the 'U' array, 0, represents 
//     // which element of results to "adjust" and the second element is the multiplier
//     const lookup = { 'U': [0, 1], 'R': [1, 1], 'D': [0, -1], 'L': [1, -1] };
//     let idx = 0;
//     while (idx < moves.length) {
//         // first char of the move string is the direction to be used to access the lookup object
//         let dir = moves[idx];
//         idx++;
//         let numString = '';
//         // 'grab' digits (length of move)
//         while ('0123456789'.includes(moves[idx]) && idx < moves.length) {
//             numString += moves[idx];
//             idx++;
//         }
//         // "adjust" result's x or y value
//         result[lookup[dir][0]] += parseInt(numString) * lookup[dir][1];
//     }
//     return result;
// }

/*--- Using regular expressions to break up the moves into an array ---*/
// function gridTrip(xyArr, moves) {
//   let result = [xyArr[0], xyArr[1]];
//   const lookup = {'U': [0, 1], 'R': [1, 1], 'D': [0, -1], 'L': [1, -1]}; 
//   // regular expressions are fantastic - be sure to use the 'global' flag with the match method
//   moves = moves.match(/[UDLR]\d+/g);
//   moves.forEach(function(move) {
//     let dir = move.charAt(0);
//     result[lookup[dir][0]] += move.substr(1) * lookup[dir][1];
//   });
//   return result;
// }