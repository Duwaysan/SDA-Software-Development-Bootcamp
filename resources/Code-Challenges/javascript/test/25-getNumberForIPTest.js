import { getNumForIP } from "../JS_code_challenges/25-getNumForIP.js";
import { expect } from "chai";

describe("25-getNumForIP", function () {
    it("returns a number", function () {
        expect(typeof getNumForIP('0.0.0.0')).to.equal('number');
    });
    it("returns the correct number for an IP address", function () {
        expect(getNumForIP('0.0.0.1')).to.equal(1);
        expect(getNumForIP('0.0.2.0')).to.equal(512);
        expect(getNumForIP('192.156.99.15')).to.equal(3231474447);
        expect(getNumForIP('10.0.0.1')).to.equal(167772161);
    });
});


// // SOLUTION
// function getNumForIP(ip) {
//     // reverse the chunks so that the we can use the index like 256**idx 
//     let chunks = ip.split('.').reverse();
//     let sum = 0;
//     chunks.forEach(function (chunk, idx) {
//         sum += parseInt(chunk) * 256 ** idx;
//     });
//     return sum;
// }

// Remove the necessity to reverse with 256**(3-idx) 
// function getNumForIP(ip) {
//   let chunks = ip.split('.');
//   let sum = 0;
//   chunks.forEach(function(chunk, idx) {
//     sum += parseInt(chunk) * 256**(3-idx);
//   });
//   return sum;
// }

/* Using reduce method gives us a one-liner */
// function getNumForIP(ip) {
//   return ip.split('.').reduce((sum, chunk, idx) => sum + parseInt(chunk) * 256**(3-idx), 0);
// }