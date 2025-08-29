import { toCamelCase } from "../JS_code_challenges/26-toCamelCase.js";
import { expect } from "chai";

describe("26-toCamelCase", function () {
    it("returns a string", function () {
        expect(typeof toCamelCase('a')).to.equal('string');
    });
    it("returns the correct string", function () {
        expect(toCamelCase('wdi-rocks')).to.equal('wdiRocks')
        expect(toCamelCase('banana_Turkey_potato')).to.equal('bananaTurkeyPotato')
        expect(toCamelCase('Mama-mia')).to.equal('MamaMia')
        expect(toCamelCase('A_b_c')).to.equal('ABC')
    });
});

// // SOLUTION
// function toCamelCase(str) {
//     return str.replace(/[_-]\w/g, function (match) {
//         return match.charAt(1).toUpperCase();
//     });
// }

/* Take advantage of the implicit return of an arrow function for a one-line solution */
// function toCamelCase(str) {
//   return str.replace(/[_-]\w/g, match => match.charAt(1).toUpperCase());
// }
