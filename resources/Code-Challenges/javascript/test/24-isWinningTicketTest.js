import { isWinningTicket } from "../JS_code_challenges/24-isWinningTicket.js";
import { expect } from "chai";

describe("24-isWinningTicket", function () {
    it("returns a boolean", function () {
        expect(typeof isWinningTicket([['a', 1]])).to.equal('boolean');
    });

    it("checks for winning ticket", function () {
        expect(isWinningTicket([['ABC', 65]])).to.equal(true);
        expect(isWinningTicket([['ABC', 999]])).to.equal(false);
        expect(isWinningTicket([['ABC', 999], ['XY', 89]])).to.equal(false);
        expect(isWinningTicket([['ABC', 66], ['dddd', 100], ['Hello', 108]])).to.equal(true);
        expect(isWinningTicket([['dddd', 15], ['Hello', 108], ['ABC', 66]])).to.equal(false);
    });
});


// // SOLUTION
// function isWinningTicket(ticket) {
//     let winner = true;
//     for (let i = 0; i < ticket.length; i++) {
//         let charFromNumber = String.fromCharCode(ticket[i][1]);
//         if (!ticket[i][0].includes(charFromNumber)) {
//             winner = false;
//             break;
//         }
//     }
//     return winner;
// }

/* Array.prototype.every is sweet */
// function isWinningTicket(ticket){
//   return ticket.every(function(arr) {
//     return arr[0].includes(String.fromCharCode(arr[1]));
//   });
// }

/* Arrow functions help make concise one-liners possible */
// function isWinningTicket(ticket){
//   return ticket.every(arr => arr[0].includes(String.fromCharCode(arr[1])));
// }